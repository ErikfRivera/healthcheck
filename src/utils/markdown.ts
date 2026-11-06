/**
 * Renders the site's copy (src/data/site.ts) to Markdown for the agent-facing
 * mirrors: /index.md, /scans/<slug>.md and /llms.txt. Copy must never be
 * written here — import it from site.ts so the HTML and Markdown versions of
 * a page cannot drift apart.
 */

import {
  archive,
  legacyNotice,
  site,
  hero,
  stats,
  scans,
  scanPage,
  scansIndex,
  steps,
  why,
  guarantees,
  faqs,
  footer,
  type Scan,
} from '../data/site';
import { citeMd, sourceIndex, stripCites } from './cite';
import {
  getLegacyEntries,
  legacyHref,
  legacyMdPath,
  legacyMeta,
  sectionLabel,
  type LegacyEntry,
} from './legacy';

/** One-sentence summary of the site, reused by llms.txt and page intros. */
export const siteSummary =
  'HealthCheck.org connects people with trusted imaging centers for preventive scans — full-body MRI, coronary calcium CT, DEXA and more — at upfront, comparable prices. No referral needed; results are read by board-certified radiologists.';

interface Page {
  path: string;
  mdPath: string;
  title: string;
  blurb: string;
}

/**
 * The marketplace's own pages with their Markdown twins. Paths are
 * site-relative; make them absolute with `new URL(path, site)` at the call site.
 */
export const pages: readonly Page[] = [
  {
    path: '/',
    mdPath: '/index.md',
    title: 'Home',
    blurb: 'Scans offered, pricing model, how it works, guarantees, and FAQ.',
  },
  {
    path: scansIndex.path,
    mdPath: '/scans/index.md',
    title: scansIndex.title,
    blurb: scansIndex.metaDescription,
  },
  ...scans.map((scan) => ({
    path: `/scans/${scan.slug}/`,
    mdPath: `/scans/${scan.slug}.md`,
    title: scan.title,
    blurb: stripCites(scan.copy),
  })),
];

/** The restored legacy pages (src/content/legacy), as `pages` entries. */
export async function getLegacyPages(): Promise<Page[]> {
  return (await getLegacyEntries()).map((entry) => ({
    path: legacyHref(entry.data.path),
    mdPath: legacyHref(legacyMdPath(entry)),
    title: entry.data.heading,
    blurb: entry.data.description,
  }));
}

/**
 * Every page on the site with its Markdown twin, in one place so llms.txt and
 * the endpoints can't drift: the marketplace pages, then the legacy archive.
 */
export async function getPages(): Promise<Page[]> {
  return [...pages, ...(await getLegacyPages())];
}

function priceLine(scan: Scan): string[] {
  return site.showPricing ? [`${scan.price} — ${scanPage.avgLabel.toLowerCase()} ~~${scan.avg}~~`, ''] : [];
}

/** The homepage's per-scan summary, linking to the full page. */
function scanSection(scan: Scan): string {
  return [
    `### [${scan.title}](/scans/${scan.slug}.md)`,
    '',
    ...priceLine(scan),
    stripCites(scan.copy),
  ].join('\n');
}

const mdTable = (columns: readonly string[], rows: readonly (readonly string[])[]) =>
  [
    `| ${columns.join(' | ')} |`,
    `| ${columns.map(() => '---').join(' | ')} |`,
    ...rows.map((r) => `| ${r.map((c) => c.replace(/\|/g, '\\|')).join(' | ')} |`),
  ].join('\n');

export function renderHomeMarkdown(): string {
  return [
    `# ${site.name} — ${hero.headline.join(' ')}`,
    '',
    hero.body,
    '',
    hero.reassurance,
    '',
    '## By the numbers',
    '',
    stats.map((s) => `- **${s.value}** — ${s.label}`).join('\n'),
    '',
    '## Preventive scans',
    '',
    'Prices are "from" prices and vary by imaging center and location.',
    '',
    scans.map(scanSection).join('\n\n'),
    '',
    '## How it works',
    '',
    steps.map((s) => `- **${s.title}.** ${s.copy}`).join('\n'),
    '',
    `## ${why.kicker}`,
    '',
    `**${why.headline}** ${why.body}`,
    '',
    '## Guarantees',
    '',
    guarantees.map((g) => `- **${g.title}** ${g.copy}`).join('\n'),
    '',
    '## FAQ',
    '',
    faqs.map((f) => `### ${f.q}\n\n${f.a}`).join('\n\n'),
    '',
    '---',
    '',
    footer.disclaimer,
    '',
  ].join('\n');
}

export function renderScanMarkdown(scan: Scan): string {
  const n = sourceIndex(scan);
  const c = (text: string) => citeMd(text, n);
  const h = scanPage.headings;
  const noun = scan.noun;
  const facts = (Object.keys(scanPage.factLabels) as (keyof Scan['facts'])[]).map((key) => [
    scanPage.factLabels[key],
    c(scan.facts[key]),
  ]);

  return [
    `# ${scan.title}`,
    '',
    `*${scanPage.alsoCalled}: ${scan.aka.join(', ')}. ${scanPage.updatedLabel} ${scan.updated}.*`,
    '',
    ...priceLine(scan),
    scan.answer,
    '',
    `## ${scanPage.takeawaysLabel}`,
    '',
    scan.takeaways.map((t) => `- ${c(t)}`).join('\n'),
    '',
    `## ${scanPage.factsLabel}`,
    '',
    mdTable(['', ''], facts),
    '',
    `## ${h.detects(noun)}`,
    '',
    scan.detects.map((d) => `- **${d.item}.** ${d.note ? c(d.note) : ''}`.trimEnd()).join('\n'),
    '',
    `## ${h.limits(noun)}`,
    '',
    scan.limits.map((l) => `- ${c(l)}`).join('\n'),
    '',
    `## ${h.whoFor(noun)}`,
    '',
    c(scan.whoForSummary),
    '',
    mdTable(
      [...scanPage.guidelineColumns, 'Source'],
      scan.guidelines.map((g) => [g.body, g.year, g.position, g.grade ?? '—', `[${n(g.sourceId)}]`]),
    ),
    '',
    `## ${h.notFor(noun)}`,
    '',
    scan.notFor.map((l) => `- ${c(l)}`).join('\n'),
    '',
    `## ${h.radiation(noun)}`,
    '',
    c(scan.radiation),
    '',
    `## ${h.procedure(noun)}`,
    '',
    scan.procedure.map((l, i) => `${i + 1}. ${c(l)}`).join('\n'),
    '',
    `## ${h.prep(noun)}`,
    '',
    scan.prep.map((l) => `- ${c(l)}`).join('\n'),
    '',
    `## ${h.accuracy(noun)}`,
    '',
    scan.accuracy.map(c).join('\n\n'),
    '',
    `## ${h.results(noun)}`,
    '',
    `**${scan.results.title}** [${n(scan.results.sourceId)}]`,
    '',
    mdTable(scan.results.columns, scan.results.rows),
    ...(scan.results.note ? ['', c(scan.results.note)] : []),
    '',
    `## ${h.stats(noun)}`,
    '',
    scan.stats.map((st) => `- **${st.value}** — ${st.label} [${n(st.sourceId)}]`).join('\n'),
    '',
    `## ${h.quotes}`,
    '',
    scan.quotes
      .map((q) => `> "${q.text}"\n>\n> — ${q.speaker}, ${q.role} [${n(q.sourceId)}]`)
      .join('\n\n'),
    '',
    `## ${h.cost(noun)}`,
    '',
    c(scan.cost),
    ...(site.showPricing ? ['', scanPage.costNote] : []),
    '',
    `## ${h.faq(noun)}`,
    '',
    scan.faqs.map((f) => `### ${f.q}\n\n${c(f.a)}`).join('\n\n'),
    '',
    `## ${h.related}`,
    '',
    scan.related
      .map((slug) => scans.find((s) => s.slug === slug))
      .filter((s): s is Scan => Boolean(s))
      .map((s) => `- [${s.title}](/scans/${s.slug}.md): ${stripCites(s.copy)}`)
      .join('\n'),
    `- [${scansIndex.title}](/scans/index.md)`,
    '',
    `## ${h.sources}`,
    '',
    scan.sources.map((s, i) => `${i + 1}. [${s.title}](${s.url}). ${s.publisher}, ${s.date}.`).join('\n'),
    '',
    '---',
    '',
    footer.disclaimer,
    '',
  ].join('\n');
}

export function renderScansIndexMarkdown(): string {
  return [
    `# ${scansIndex.headline}`,
    '',
    scansIndex.answer,
    '',
    mdTable(
      scansIndex.columns,
      scans.map((s) => [
        `[${s.title}](/scans/${s.slug}.md)`,
        stripCites(s.copy),
        stripCites(s.facts.radiation),
        stripCites(s.facts.duration),
        stripCites(s.facts.bestFor),
      ]),
    ),
    '',
    '---',
    '',
    footer.disclaimer,
    '',
  ].join('\n');
}

export function renderLegacyMarkdown(entry: LegacyEntry): string {
  const meta = legacyMeta(entry);
  return [
    `# ${entry.data.heading}`,
    '',
    `*${sectionLabel(entry.data.section)}.* ${legacyNotice}`,
    '',
    ...(meta ? [meta, ''] : []),
    (entry.body ?? '').trim(),
    '',
    '---',
    '',
    footer.disclaimer,
    '',
  ].join('\n');
}

export async function renderLlmsTxt(origin: URL | undefined): Promise<string> {
  const abs = (path: string) => (origin ? new URL(path, origin).href : path);
  const legacy = await getLegacyPages();
  return [
    `# ${site.name}`,
    '',
    `> ${siteSummary}`,
    '',
    '## Pages',
    '',
    pages.map((p) => `- [${p.title}](${abs(p.mdPath)}): ${p.blurb}`).join('\n'),
    '',
    `## ${archive.index.headline}`,
    '',
    `> ${legacyNotice}`,
    '',
    legacy.map((p) => `- [${p.title}](${abs(p.mdPath)}): ${p.blurb}`).join('\n'),
    '',
    '## Notes',
    '',
    `- ${footer.disclaimer}`,
    '- All prices shown are "from" prices and vary by imaging center and location.',
    '',
  ].join('\n');
}
