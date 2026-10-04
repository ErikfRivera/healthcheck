#!/usr/bin/env python3
"""
One-off: turn the backlinked pages of the old healthcheck.org (Drupal 6, the
HSF "Health Check" program) into Markdown entries for the `legacy` content
collection.

    python3 legacy/scripts/extract.py            # every restore-page row + Wayback pages
    python3 legacy/scripts/extract.py --top 10   # only the ten highest-RD pages

Reads   legacy/targets.csv, legacy/crawl/**, legacy/wayback/pages/** (Step 2 output)
Writes  src/content/legacy/<encoded-path>.md
        public/<original image path>   (images referenced by restored pages)
        legacy/extract-log.md          (per-page word counts and everything stripped)

Requires: beautifulsoup4, lxml, markdownify, pyyaml.

The `path` frontmatter field, not the filename, is what the site routes on.
Filenames are the path with "/" -> "__" and anything outside [A-Za-z0-9._-]
written as _uXXXX, so they stay ASCII and collision-free.
"""

from __future__ import annotations

import argparse
import csv
import re
import shutil
import sys
from pathlib import Path
from urllib.parse import quote, unquote, urljoin, urlparse

import yaml
from bs4 import BeautifulSoup, Comment, NavigableString, Tag
from markdownify import MarkdownConverter

ROOT = Path(__file__).resolve().parents[2]
LEGACY = ROOT / 'legacy'
CRAWL = LEGACY / 'crawl'
WAYBACK_PAGES = LEGACY / 'wayback' / 'pages'
OUT = ROOT / 'src' / 'content' / 'legacy'
PUBLIC = ROOT / 'public'
LOG = LEGACY / 'extract-log.md'

OLD_HOSTS = {'www.healthcheck.org', 'healthcheck.org'}

# Rows whose target path is a typo of a real page. The page is restored at the
# real path and the typo 301s to it (see vercel.json).
PATH_OVERRIDES = {
    '/page/nutrients-women>': '/page/nutrients-women',
}

# ── branding / contact strip rules ──────────────────────────────────────────

# A sentence matching any of these is removed outright: HSF website and program
# contact details, trademark/licensing boilerplate, the program's social handles.
STRIP_SENTENCE = [
    r'hsf\.ca\b',
    r'heartandstroke\.(com|ca|org)',
    r'visezsante',
    r'youtube\.com/user/HSF',
    r'@HSFHealthCheck',
    r'follow us on twitter',
    r'\(?\b\d{3}\)?[ .-]\d{3}-\d{4}\b',       # phone numbers
    r'\bext\.?:?\s*\d{2,}',
    r'please (feel free to )?contact\b',
    r'\btrade-?mark',
    r'registered (certification )?mark',
    r'explore our website',
    r'[\w.+-]+@[\w-]+\.[a-z]{2,}',           # e-mail addresses
    r'\bcontact:\**\s*$',                     # "For information …, contact:" lead-ins
]
HSF_MARK = '\u2063HSFLINK\u2063'
STRIP_SENTENCE.append(re.escape(HSF_MARK))
STRIP_SENTENCE_RE = re.compile('|'.join(STRIP_SENTENCE), re.I)

# Images that are branding or site chrome rather than content.
DROP_IMAGE_RE = re.compile(
    r'(logo|hc_icon|hsf|heart.?(and|&)?.?stroke|twitter|facebook|print\.gif|share\.gif|'
    r'bookmark|/icons?/|addthis|/sites/all/|/imagecache/(profile_thumb|thumbnail_55)/)',
    re.I,
)

SECTION_BY_PREFIX = [
    ('/page/', 'page'),
    ('/node/', 'page'),
    ('/story/', 'story'),
    ('/content/', 'content'),
    ('/blogs/', 'blog'),
    ('/blog', 'blog'),
    ('/faq', 'faq'),
    ('/recipe/', 'recipe'),
]

TITLE_SUFFIX_RE = re.compile(r'\s*\|\s*(Heart\s*&\s*Stroke;?\s*)?(Heart & Stroke\s*)?Health Check Program\s*$', re.I)
TM_RE = re.compile(r'\s*(™|\(TM\)|&trade;)|(?<=Health Check)\s?(TM|MC)\b')


# ── helpers ─────────────────────────────────────────────────────────────────

def file_stem(path: str) -> str:
    out = []
    for ch in path.lstrip('/'):
        if ch == '/':
            out.append('__')
        elif re.match(r'[A-Za-z0-9._-]', ch):
            out.append(ch)
        else:
            out.append(f'_u{ord(ch):04x}')
    return ''.join(out) or 'index'


def section_for(path: str) -> str:
    for prefix, section in SECTION_BY_PREFIX:
        if path.startswith(prefix):
            return section
    return 'other'


def crawler_decode(segment: str) -> str:
    """The crawler wrote %XX as _XX in file names (Carol_20Dombrow.jpg)."""
    return re.sub(r'_(2[0-9A-F]|3[A-F]|40|5[B-F]|7[B-E])', lambda m: '%' + m.group(1), segment)


def encode_path(path: str) -> str:
    """Percent-encode a decoded site path for use in an href/src."""
    return quote(path, safe="/-._~!$&'()*+,;=:@")


def strip_tm(text: str) -> str:
    return TM_RE.sub('', text)


def clean_title(raw: str) -> str:
    t = TITLE_SUFFIX_RE.sub('', raw or '').strip()
    return re.sub(r'\s+', ' ', strip_tm(t))


class Ctx:
    """Per-page state: where the page lives and what we stripped."""

    def __init__(self, path: str, crawl_rel: str, link_map: dict[str, str], log: list[str]):
        self.path = path
        # The crawler stored /a/b as a/b.html but wrote links as if it were a/b/,
        # so resolve relative URLs against the directory form.
        stem = re.sub(r'\.html?$', '', crawl_rel)
        self.base = f'http://www.healthcheck.org/{stem}/'
        self.crawl_dir = (CRAWL / crawl_rel).parent
        self.link_map = link_map
        self.log = log
        self.images: list[tuple[Path, Path]] = []

    def resolve(self, href: str) -> tuple[str, str] | None:
        """Return (kind, url): kind is 'internal' (site path) or 'external'."""
        href = (href or '').strip()
        if not href or href.startswith(('javascript:', '#', 'mailto:')):
            return None
        url = urljoin(self.base, href)
        u = urlparse(url)
        if u.scheme not in ('http', 'https'):
            return None
        if u.netloc.lower() in OLD_HOSTS:
            p = unquote(u.path).rstrip('/') or '/'
            return ('internal', p)
        return ('external', url)


# ── DOM cleanup ─────────────────────────────────────────────────────────────

REMOVE_SELECTORS = [
    'script', 'style', 'form', 'noscript', 'iframe', 'object', 'embed',
    '#below_left', '#below_right', '#below', '#bottom', '#comments',
    '.print-share-buttons', '.item-list:has(.pager)', 'ul.pager', 'ul.links',
    '.links', '#blog_count', '.readmore_blog', '.picture', '.view-filters',
    '.search-right', '.filefield-icon', '.breadcrumb', '.translation-link',
    '.four-cats-product',  # recipe/product taxonomy tags
]

# HSF copyright lines on recipes ("Developed by X. © 2012 The Heart and Stroke
# Foundation."): the credit stays, the copyright claim goes.
COPYRIGHT_RE = re.compile(r'\s*©\s*\d{4}\s*(The\s+)?Heart and Stroke Foundation( of Canada)?\.?', re.I)


def find_body(soup: BeautifulSoup) -> Tag | None:
    for sel in ['#content-area', '#content-inner', '#content', '#main', 'body']:
        el = soup.select_one(sel)
        if el:
            return el
    return None


def extract_meta(body: Tag) -> dict:
    """Pull heading, date and byline out of the node chrome, removing them."""
    meta: dict = {}

    # Story pages: <h2 class="title">Media Room - Media Releases</h2>
    # <h3 class="page-title">Real title</h3><h3 class="page-title">Date: ...</h3>
    titles = body.select('h3.page-title')
    # Stories and recipes carry the section name in <h2 class="title">
    # ("Media Room - Media Releases", "Recipes") and the real title in h3.
    for h in body.select('h2.title'):
        if titles or re.match(r'\s*Media Room', h.get_text()):
            h.decompose()
    for h in titles:
        text = h.get_text(' ', strip=True)
        m = re.match(r'Date:\s*(.+)', text)
        if m:
            meta['date'] = m.group(1).strip()
            h.decompose()
        elif text.lower() == 'comments':
            nxt = h.find_next_sibling()
            if nxt is not None and nxt.name == 'table':
                nxt.decompose()
            h.decompose()
        elif 'heading' not in meta and text not in ('Restaurant Finder',):
            meta['heading'] = text
            h.decompose()

    # Regular nodes: the first h2.title inside the node.
    node = body.select_one('.node:not(.node-teaser)')
    if node and 'heading' not in meta:
        h = node.select_one('h2.title')
        if h:
            meta['heading'] = h.get_text(' ', strip=True)
            h.decompose()

    # Blog posts: <div id="blog_details">Posted by x on 2012-05-29 9:22</div>
    if node:
        bd = node.find(id='blog_details')
        if bd:
            meta['byline'] = bd.get_text(' ', strip=True)
            bd.decompose()

    # "Comment Count" tables that weren't preceded by a Comments heading.
    for h5 in body.find_all('h5'):
        if 'Comment Count' in h5.get_text():
            t = h5.find_parent('table')
            (t or h5).decompose()
    return meta


def clean_dom(body: Tag, ctx: Ctx) -> None:
    for c in body.find_all(string=lambda s: isinstance(s, Comment)):
        c.extract()
    for sel in REMOVE_SELECTORS:
        for el in body.select(sel):
            el.decompose()

    # Views: FAQ questions and teaser titles become real headings.
    for el in body.select('.views-field-title'):
        if el.find_parent('table'):
            continue
        el.name = 'h3'
        el.attrs = {}
    for h in body.select('.node-teaser h2'):
        h.name = 'h3'
    # CCK fields (recipes): "Prep Time: 5 minutes" inline, "Ingredients:" as a heading.
    for el in body.select('.field-label-inline-first'):
        el.name = 'strong'
        el.attrs = {}
        item = el.find_parent(class_='field-item')
        if item is not None:
            item.name = 'p'
    for el in body.select('.field-label'):
        el.name = 'h3'
        el.attrs = {}
    # Blog teaser bylines.
    for el in body.find_all(id='blog_details'):
        el.name = 'p'
        el.attrs = {}

    # ™ / TM after Health Check.
    for sup in body.find_all('sup'):
        if sup.get_text(strip=True).upper() in ('TM', 'MC', '™', 'MD', '®'):
            sup.decompose()
    for s in list(body.find_all(string=True)):
        new = COPYRIGHT_RE.sub('', strip_tm(str(s)))
        if new != strip_tm(str(s)):
            ctx.log.append('removed HSF copyright notice')
        if new != str(s):
            s.replace_with(NavigableString(new))

    # Links: keep links to restored pages and to the open web; unwrap the rest.
    for a in list(body.find_all('a')):
        if a.get('name') and not a.get_text(strip=True):
            a.decompose()
            continue
        if a.get('href', '').startswith('#'):
            a.decompose()  # "back to top>" and similar in-page jumps
            continue
        r = ctx.resolve(a.get('href', ''))
        text = a.get_text(strip=True)
        if r is None:
            a.unwrap()
            continue
        kind, url = r
        if kind == 'external':
            if re.search(r'heartandstroke|hsf\.ca|visezsante|addthis|twitter\.com', url, re.I):
                ctx.log.append(f'unlinked HSF/social link `{url}` ("{text}")')
                # The marker makes strip_sentences drop the sentence that carried
                # the link; any that survive are removed afterwards.
                a.insert_after(NavigableString(HSF_MARK))
                a.unwrap()
                continue
            a.attrs = {'href': url}
            continue
        target = ctx.link_map.get(url) or ctx.link_map.get(url + '.html')
        if not target and (PUBLIC / url.lstrip('/')).is_file():
            target = url
        if target:
            a.attrs = {'href': encode_path(target)}
        else:
            a.unwrap()

    # Images.
    for img in list(body.find_all('img')):
        src = img.get('src', '')
        r = ctx.resolve(src)
        if r is None or r[0] != 'internal' or DROP_IMAGE_RE.search(src):
            ctx.log.append(f'dropped image `{src}`')
            img.decompose()
            continue
        crawl_rel = urlparse(urljoin(ctx.base, src)).path.lstrip('/')
        local = CRAWL / unquote(crawl_rel)
        if not local.is_file() or not is_image(local):
            ctx.log.append(f'dropped image `{src}` (not in crawl)')
            img.decompose()
            continue
        original = unquote('/'.join(crawler_decode(seg) for seg in crawl_rel.split('/')))
        ctx.images.append((local, PUBLIC / original))
        alt = img.get('alt', '')
        img.attrs = {'src': encode_path('/' + original), 'alt': alt}
        # Images inside headings (the bio pages) move out in front of them.
        h = img.find_parent(re.compile(r'^h[1-6]$'))
        if h is not None:
            h.insert_before(img.extract())


def is_image(p: Path) -> bool:
    head = p.read_bytes()[:12]
    return head.startswith((b'\xff\xd8', b'\x89PNG', b'GIF8')) or head[8:12] == b'WEBP'


# ── tables ──────────────────────────────────────────────────────────────────

INLINE_OK = {'strong', 'b', 'em', 'i', 'a', 'sup', 'sub'}


def cell_html(el: Tag) -> str:
    parts: list[str] = []

    def walk(node, out):
        for ch in node.children:
            if isinstance(ch, NavigableString):
                out.append(escape_html(re.sub(r'\s+', ' ', str(ch))))
            elif isinstance(ch, Tag):
                if ch.name in ('p', 'div', 'li', 'br', 'ul', 'ol', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'):
                    out.append('\n')
                    walk(ch, out)
                    out.append('\n')
                elif ch.name in INLINE_OK:
                    tag = {'b': 'strong', 'i': 'em'}.get(ch.name, ch.name)
                    attrs = f' href="{escape_html(ch["href"])}"' if tag == 'a' and ch.get('href') else ''
                    inner: list[str] = []
                    walk(ch, inner)
                    out.append(f'<{tag}{attrs}>{"".join(inner).strip()}</{tag}>')
                elif ch.name == 'img':
                    out.append(f'<img src="{escape_html(ch["src"])}" alt="{escape_html(ch.get("alt", ""))}" loading="lazy" decoding="async">')
                else:
                    walk(ch, out)

    walk(el, parts)
    lines = [re.sub(r'\s+', ' ', l).strip() for l in ''.join(parts).split('\n')]
    return '<br>'.join(l for l in lines if l)


def escape_html(s: str) -> str:
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;')


def table_markup(table: Tag) -> str:
    """Data tables stay HTML: the old ones use colspans and multi-line cells
    that GFM can't express, and HTML lets them carry the `tnum` class."""
    rows = [tr for tr in table.find_all('tr') if tr.find_parent('table') is table]
    grid = []
    for tr in rows:
        row = [(c, cell_html(c)) for c in tr.find_all(['td', 'th'], recursive=False)]
        if any(h for _, h in row):
            grid.append(row)
    if not grid:
        return ''
    # Drop columns left empty in every row (e.g. removed thumbnail images).
    if len({len(r) for r in grid}) == 1:
        keep = [i for i in range(len(grid[0])) if any(r[i][1] for r in grid)]
        grid = [[r[i] for i in keep] for r in grid]

    out = ['<table class="tnum">']
    for r in grid:
        out.append('<tr>')
        for c, h in r:
            tag = 'th' if c.name == 'th' else 'td'
            attrs = ''
            for a in ('colspan', 'rowspan'):
                if c.get(a, '1') != '1':
                    attrs += f' {a}="{c[a]}"'
            out.append(f'<{tag}{attrs}>{h}</{tag}>')
        out.append('</tr>')
    out.append('</table>')
    return '\n'.join(out)


# ── Markdown ────────────────────────────────────────────────────────────────

class Converter(MarkdownConverter):
    def convert_h1(self, el, text, *args, **kw):
        return self._h(2, text)

    def convert_h2(self, el, text, *args, **kw):
        return self._h(2, text)

    def convert_h3(self, el, text, *args, **kw):
        return self._h(3, text)

    def convert_h4(self, el, text, *args, **kw):
        return self._h(4, text)

    convert_h5 = convert_h4
    convert_h6 = convert_h4

    def convert_img(self, el, text, *args, **kw):
        # Raw HTML so the page gets loading="lazy" whatever Markdown processor
        # renders it; the alt text is the old page's, unchanged.
        return (f'<img src="{escape_html(el["src"])}" alt="{escape_html(el.get("alt", ""))}" '
                f'loading="lazy" decoding="async">')

    def _h(self, level, text):
        text = re.sub(r'\s+', ' ', text).strip()
        return f'\n\n{"#" * level} {text}\n\n' if text else ''


def is_layout_table(t: Tag) -> bool:
    """Drupal-era pages used borderless tables for layout and one-cell tables
    as call-out boxes. Only bordered tables and Views listings hold data."""
    if 'views-table' in (t.get('class') or []):
        return False
    rows = [tr for tr in t.find_all('tr') if tr.find_parent('table') is t]
    max_cols = max((len(tr.find_all(['td', 'th'], recursive=False)) for tr in rows), default=0)
    return max_cols <= 1 or t.get('border') in (None, '', '0')


def unwrap_layout_tables(body: Tag) -> None:
    for t in list(body.find_all('table')):
        if t.parent is None or not is_layout_table(t):
            continue
        box = body.new_tag('div')
        for cell in t.find_all(['td', 'th']):
            if cell.find_parent('table') is not t:
                continue
            div = body.new_tag('div')
            for ch in list(cell.children):
                div.append(ch.extract())
            box.append(div)
        t.replace_with(box)


def to_markdown(body: Tag) -> str:
    unwrap_layout_tables(body)
    tables: list[str] = []
    for t in list(body.find_all('table')):
        if t.find_parent('table'):
            continue
        tables.append(table_markup(t))
        p = body.new_tag('p')
        p.string = f'LEGACYTABLE{len(tables) - 1}X'
        t.replace_with(p)

    md = Converter(heading_style='ATX', bullets='-', strong_em_symbol='*', escape_underscores=False).convert_soup(body)
    for i, t in enumerate(tables):
        md = md.replace(f'LEGACYTABLE{i}X', '\n\n' + t + '\n\n' if t else '')
    md = md.replace(' ', ' ').replace('﻿', '')
    md = re.sub(r'[ \t]+\n', '\n', md)
    md = re.sub(r'\n{3,}', '\n\n', md)
    # Empty emphasis and empty list items left behind by removed elements.
    md = re.sub(r'\*\*\s*\*\*', '', md)
    md = re.sub(r'^\s*[-*]\s*$', '', md, flags=re.M)
    md = re.sub(r'\n{3,}', '\n\n', md)
    # Inline field labels: "**Makes:**\n1 serving" -> "**Makes:** 1 serving".
    md = re.sub(r'^(\*\*[^*\n]+:\*\*)\n(?=[^\s#*-])', r'\1 ', md, flags=re.M)
    # "**A:**Each" -> "**A:** Each" (the space lived outside the <strong>).
    md = re.sub(r'(\*\*[^*\n]+?[:.]\*\*)(?=\w)', r'\1 ', md)
    # Collapse the old site's double spaces after full stops.
    md = re.sub(r'(?<=\S) {2,}(?=\S)', ' ', md)
    return md.strip() + '\n'


SENTENCE_SPLIT = re.compile(r'(?<=[.!?])["”’)]?\s+(?=[A-Z“"(\[*])')


def strip_sentences(md: str, ctx: Ctx) -> str:
    out_blocks = []
    for block in re.split(r'\n{2,}', md):
        if block.startswith(('<table', '|')):
            out_blocks.append(block)
            continue
        lines_out = []
        for line in block.split('\n'):
            m = re.match(r'^(\s*(?:[-*]|\d+\.)\s+|#+\s+|>\s*)?(.*)$', line)
            prefix, text = m.group(1) or '', m.group(2)
            if not STRIP_SENTENCE_RE.search(text):
                lines_out.append(line)
                continue
            kept = []
            for s in SENTENCE_SPLIT.split(text):
                if STRIP_SENTENCE_RE.search(s):
                    if s.replace(HSF_MARK, '').strip():
                        ctx.log.append(f'removed sentence: "{s.replace(HSF_MARK, "").strip()}"')
                else:
                    kept.append(s)
            joined = ' '.join(k.strip() for k in kept if k.strip())
            if joined.count('**') % 2:
                joined = joined + '**' if joined.startswith('**') else joined.replace('**', '', 1)
            if joined.strip('* '):
                lines_out.append(prefix + joined)
        if any(l.strip() for l in lines_out):
            out_blocks.append('\n'.join(lines_out))
    return '\n\n'.join(out_blocks).replace(HSF_MARK, '').strip() + '\n'


def plain_text(md: str) -> str:
    t = re.sub(r'<[^>]+>', ' ', md)
    t = re.sub(r'!\[[^\]]*\]\([^)]*\)', ' ', t)
    t = re.sub(r'\[([^\]]*)\]\([^)]*\)', r'\1', t)
    t = re.sub(r'^\s*(#+|[-*]|\d+\.|>)\s+', ' ', t, flags=re.M)
    t = re.sub(r'[*_|`]', ' ', t)
    return re.sub(r'\s+', ' ', t).strip()


def describe(text: str, limit: int = 155) -> str:
    if len(text) <= limit:
        return text
    cut = text[:limit].rsplit(' ', 1)[0].rstrip(',;:–—-')
    return cut + '…'


# ── main ────────────────────────────────────────────────────────────────────

def load_rows() -> list[dict]:
    with open(LEGACY / 'targets.csv', encoding='utf-8') as f:
        return list(csv.DictReader(f))


def source_for(row: dict) -> tuple[str, Path] | None:
    """The HTML to extract: the crawl file, or the Wayback snapshot from Step 2."""
    if row['action'] == 'restore-page' and row['crawl_file']:
        return row['crawl_file'], CRAWL / row['crawl_file']
    if row['action'] == 'recover-page-from-wayback':
        snap = WAYBACK_PAGES / (file_stem(row['path']) + '.html')
        if snap.is_file():
            return row['crawl_file'] or row['path'].lstrip('/') + '.html', snap
    return None


def extract(row: dict, link_map: dict[str, str]) -> tuple[dict, str, Ctx]:
    path = PATH_OVERRIDES.get(row['path'], row['path'])
    crawl_rel, src = source_for(row)
    log: list[str] = []
    ctx = Ctx(path, crawl_rel, link_map, log)
    soup = BeautifulSoup(src.read_bytes(), 'lxml')
    # lxml reads the old "Heart&Stroke" as an unknown entity and writes "&Stroke;".
    original_title = (soup.title.get_text() if soup.title else '').strip().replace('&Stroke;', '&Stroke')
    body = find_body(soup)
    meta = extract_meta(body)
    clean_dom(body, ctx)
    md = strip_sentences(to_markdown(body), ctx)

    title = clean_title(original_title)
    heading = strip_tm(meta.get('heading') or title).strip()
    # Some blog posts repeat the heading as the first line.
    md = re.sub(r'^#+ ' + re.escape(heading) + r'\s*\n', '', md, count=1)
    text = plain_text(md)

    fm = {
        'path': path,
        'title': title or heading,
        'heading': heading,
        'description': describe(text),
        'originalTitle': original_title,
        'section': section_for(path),
        'crawlFile': row['crawl_file'] or None,
        'referringDomains': int(row['referring_domains']),
        'maxDR': int(row['max_dr']),
        'archived': True,
    }
    if meta.get('date'):
        fm['date'] = meta['date']
    if meta.get('byline'):
        fm['byline'] = meta['byline']
    if src.is_relative_to(WAYBACK_PAGES):
        fm['source'] = 'wayback'
    fm['wordCount'] = len(text.split())
    return fm, md, ctx


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument('--top', type=int, help='only the N highest-referring-domain pages')
    args = ap.parse_args()

    rows = [r for r in load_rows() if source_for(r)]
    rows.sort(key=lambda r: (-int(r['referring_domains']), -int(r['max_dr'])))
    if args.top:
        rows = rows[: args.top]

    # Every restorable page, keyed by both its crawl stem (how old links point
    # at it, e.g. content/dairy-milking-it-what-it_s-worth) and its real path.
    link_map: dict[str, str] = {}
    for r in load_rows():
        if not source_for(r):
            continue
        p = PATH_OVERRIDES.get(r['path'], r['path'])
        link_map[p] = p
        if r['crawl_file']:
            link_map['/' + re.sub(r'\.html?$', '', r['crawl_file'])] = p

    if not args.top and OUT.exists():
        for old in OUT.glob('*.md'):
            old.unlink()
    OUT.mkdir(parents=True, exist_ok=True)

    report = ['# Legacy extraction log', '', 'Generated by `legacy/scripts/extract.py`. One section per restored page.', '']
    thin = []
    for row in rows:
        fm, md, ctx = extract(row, link_map)
        for local, dest in ctx.images:
            dest.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(local, dest)
        front = yaml.safe_dump(fm, allow_unicode=True, sort_keys=False, width=1000)
        (OUT / (file_stem(fm['path']) + '.md')).write_text(f'---\n{front}---\n\n{md}', encoding='utf-8')

        report.append(f'## `{fm["path"]}`')
        report.append('')
        report.append(f'- source: `{fm.get("source", "crawl")}` {fm["crawlFile"] or ""}')
        report.append(f'- words: {fm["wordCount"]}' + (' — **under 80, needs a decision**' if fm['wordCount'] < 80 else ''))
        report.append(f'- images kept: {len(ctx.images)}')
        report.extend(f'- {l}' for l in ctx.log)
        report.append('')
        if fm['wordCount'] < 80:
            thin.append(fm['path'])
        print(f'{fm["wordCount"]:5d}  {fm["path"]}')

    if not args.top:
        LOG.write_text('\n'.join(report), encoding='utf-8')
    if thin:
        print('\nUnder 80 words:', *thin, sep='\n  ')
    return 0


if __name__ == '__main__':
    sys.exit(main())
