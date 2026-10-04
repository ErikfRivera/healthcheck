#!/usr/bin/env python3
"""
Step 4: write vercel.json with a 301 for every backlinked target that is not
restored as a page or file.

    python3 legacy/scripts/redirects.py

Run after wayback.py and extract.py: whatever Step 2 recovered (a snapshot in
legacy/wayback/pages/ or a file under public/) is served, everything else
redirects. One rule per target, except the dead campaign folders, which get a
single wildcard each. Every destination is a restored page or `/`, so all
redirects are single-hop.

Vercel matches `source` against the request path; to be safe with paths that
contain spaces, curly apostrophes or `>`, both the raw and the percent-encoded
spelling get a rule.
"""

from __future__ import annotations

import csv
import json
import re
import sys
from pathlib import Path
from urllib.parse import quote, unquote, urlparse

sys.path.insert(0, str(Path(__file__).parent))
from extract import PATH_OVERRIDES, file_stem  # noqa: E402

ROOT = Path(__file__).resolve().parents[2]
LEGACY = ROOT / 'legacy'
PUBLIC = ROOT / 'public'
PAGES = LEGACY / 'wayback' / 'pages'

# Campaign microsites and the French site: one wildcard per folder, to `/`.
CAMPAIGN_FOLDERS = [
    '/fr', '/french', '/2013', '/contest', '/instylecontest', '/timetostartcontest',
    '/backtoschool', '/healthybeat14', '/AIR MILES',
]

# Old /en/*.html and /english/* URLs -> the restored English page on the same
# topic, matched by slug words; `/` where nothing matches.
ENGLISH_EQUIVALENTS = {
    '/en/home/home.html': '/',
    '/english/e_home.html': '/',
    '/en/healthy-recipes/recipes.html': '/',
    '/en/about-health-check/meat-alternatives.html': '/',
    '/en/about-health-check/restaurants.html': '/page/restaurant-overview',
    '/en/nutritional-information/nutrient-criteria-grocery.html': '/page/nutrient-criteria-grocery',
    '/en/join-health-check/nutrient-criteria-grocery.html': '/page/nutrient-criteria-grocery',
    '/en/join-health-check/nutrient-criteria-restaurant': '/page/nutrient-criteria-restaurants',
}

# Pages Step 2 could not recover: the restored page on the same topic, else `/`.
UNRECOVERED_PAGE_TARGETS = {
    '/page/program-criteria': '/page/program-criteria-3',  # same "Nutrient Criteria" page, renumbered by Drupal
    '/story/health-check-exitl': '/story/health-check-exit',  # typo in the linking page
    # Recovered but not restored (see wayback.py NOT_RESTORED): same topic page.
    '/product/original-non-hydrogenated-margarine-7-g-foodservice-item': '/page/products-overview',
}

# Hotlinked Health Check / HSF logos are not re-published (README decision 4).
BRANDING_IMAGES = {'/images/index_logo.jpg', '/images/stories/hc_icon_eng.gif'}

GROCERY_CRITERIA = '/page/nutrient-criteria-grocery-0'
RESTAURANT_CRITERIA = '/page/nutrient-criteria-restaurants'


# Criteria PDFs whose file name doesn't say grocery or restaurant, settled by
# the linking pages (Weighty Matters, Aug 2010: chocolate milk, fries, tomato
# products — the grocery program).
PDF_OVERRIDES = {
    '/sites/default/files/editor/HC10_Nutrient Criteriapdf_changes_Aug10.pdf': GROCERY_CRITERIA,
}


def pdf_destination(path: str) -> str:
    if path in PDF_OVERRIDES:
        return PDF_OVERRIDES[path]
    name = path.lower()
    if 'criteria' in name:
        if re.search(r'foodservice|restaurant', name):
            return RESTAURANT_CRITERIA
        if re.search(r'grocery|retail', name):
            return GROCERY_CRITERIA
    return '/'


def in_campaign_folder(path: str) -> bool:
    return any(path == f or path.startswith(f + '/') for f in CAMPAIGN_FOLDERS)


def escape_source(path: str) -> str:
    """Vercel compiles `source` with path-to-regexp, where ( ) : * + ? { } are
    syntax. Literal paths like `…retail_2009(2)_0.pdf` must escape them."""
    return re.sub(r'([():*+?{}])', r'\\\1', path)


def spellings(path: str) -> list[str]:
    """Every spelling of a literal path a request may arrive as: raw and
    percent-encoded (upper- and lower-case hex for non-ASCII), each with and
    without a trailing slash, since Vercel matches redirects strictly."""
    enc = quote(path, safe="/-._~!$&'()*+,;=:@")
    forms = [path, enc, re.sub(r'%[0-9A-F]{2}', lambda m: m.group(0).lower(), enc)]
    # A raw trailing space could be trimmed somewhere upstream and turn the rule
    # into a self-redirect on a live page; only the encoded form is safe.
    if path != path.rstrip():
        forms = [enc]
    out: list[str] = []
    for f in forms:
        for s in (f, f if f.endswith('/') else f + '/'):
            if s not in out:
                out.append(s)
    return [escape_source(s) for s in out]


def main() -> int:
    rows = list(csv.DictReader(open(LEGACY / 'targets.csv', encoding='utf-8')))
    targets = {t['path']: t for t in json.load(open(LEGACY / 'targets.json', encoding='utf-8'))}

    restored = {PATH_OVERRIDES.get(r['path'], r['path']) for r in rows if r['action'] == 'restore-page'}
    restored |= {r['path'] for r in rows if r['action'] == 'recover-page-from-wayback'
                 and (PAGES / (file_stem(r['path']) + '.html')).is_file()}

    rules: list[tuple[str, str, str]] = []  # (source path, destination, why)

    for r in rows:
        path, action = r['path'], r['action']
        if action == 'already-live':
            continue
        if path in PATH_OVERRIDES:
            rules.append((path, PATH_OVERRIDES[path], 'typo of a restored page'))
            continue
        if action == 'restore-page':
            continue
        if action == 'recover-page-from-wayback':
            if path in restored:
                continue
            dest = UNRECOVERED_PAGE_TARGETS.get(path, '/')
            rules.append((path, dest, 'not recoverable from Wayback'))
        elif action == 'recover-pdf-from-wayback':
            if (PUBLIC / path.lstrip('/')).is_file():
                continue
            rules.append((path, pdf_destination(path), 'PDF not recoverable from Wayback'))
        elif action in ('restore-image', 'recover-image-from-wayback'):
            if path in BRANDING_IMAGES:
                rules.append((path, '/', 'Health Check logo, not re-published'))
            elif not (PUBLIC / path.lstrip('/')).is_file():
                rules.append((path, '/', 'image not recoverable'))
        elif action == 'redirect-to-english-equivalent':
            rules.append((path, ENGLISH_EQUIVALENTS[path], 'old English URL'))
        elif action == 'redirect-home':
            bare = urlparse(path).path  # /prodsearch?… -> /prodsearch
            if in_campaign_folder(bare):
                continue
            rules.append((bare, '/', 'French, contest or search URL'))
        else:
            raise SystemExit(f'unhandled action {action} for {path}')

    # Ahrefs saw some targets with a trailing space or other junk appended;
    # send those spellings to the page they meant.
    for path, t in targets.items():
        rules_dest = None
        for raw in t.get('raw_targets', []):
            p = unquote(urlparse(raw).path)
            if p != path and p.rstrip() == path:
                canonical = PATH_OVERRIDES.get(path, path)
                if path not in restored:
                    rules_dest = next((d for s, d, _ in rules if s == path), '/')
                rules.append((p, rules_dest or canonical, 'trailing-space variant'))

    wildcards = []
    for folder in CAMPAIGN_FOLDERS:
        rules.append((folder, '/', 'campaign microsite / French site'))
        wildcards += [f + '/:path*' for f in dict.fromkeys([folder, quote(folder)])]

    # Every destination must be a 200: the homepage or a restored page.
    for src, dest, why in rules:
        if dest != '/' and dest not in restored:
            raise SystemExit(f'{src} -> {dest}: destination is not a restored page')

    redirects, seen = [], set()
    for src, dest, why in rules:
        for s in spellings(src):
            if s in seen:
                continue
            seen.add(s)
            redirects.append({'source': s, 'destination': quote(dest, safe='/'), 'statusCode': 301})
    # `:path*` matches the folder's contents; the folder itself is a literal rule above.
    for w in wildcards:
        redirects.append({'source': escape_source(w).replace('\\:path\\*', ':path*'), 'destination': '/', 'statusCode': 301})

    config = {
        '$schema': 'https://openapi.vercel.sh/vercel.json',
        'redirects': redirects,
    }
    (ROOT / 'vercel.json').write_text(json.dumps(config, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')
    print(f'{len(redirects)} redirects written to vercel.json')
    return 0


if __name__ == '__main__':
    sys.exit(main())
