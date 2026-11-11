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
  mriCityPage,
  mriFloridaHub,
  type Scan,
} from '../data/site';
import {
  florida,
  cities,
  cityPath,
  cityMdPath,
  citySources,
  floridaSources,
  floridaUpdated,
  sharedPassages,
  type CityMri,
} from '../data/locations';
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
  {
    path: mriFloridaHub.path,
    mdPath: '/fl/mri/index.md',
    title: mriFloridaHub.title,
    blurb: florida.metaDescription,
  },
  ...cities.map((city) => ({
    path: cityPath(city),
    mdPath: cityMdPath(city),
    title: mriCityPage.title(city.city),
    blurb: city.metaDescription,
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

const sourcesMd = (sources: readonly { title: string; url: string; publisher: string; date: string }[]) =>
  sources.map((s, i) => `${i + 1}. [${s.title}](${s.url}). ${s.publisher}, ${s.date}.`).join('\n');

const quotesMd = (
  quotes: readonly { text: string; speaker: string; role: string; sourceId: string }[],
  n: (id: string) => number,
) => quotes.map((q) => `> "${q.text}"\n>\n> — ${q.speaker}, ${q.role} [${n(q.sourceId)}]`).join('\n\n');

export function renderCityMarkdown(city: CityMri): string {
  const sources = citySources(city);
  const n = sourceIndex({ sources, slug: city.slug });
  const c = (text: string) => citeMd(text, n);
  const h = mriCityPage.headings;
  const name = city.city;
  const shared = sharedPassages(city);
  return [
    `# ${mriCityPage.title(name)}`,
    '',
    `*${city.county}.${city.nearby.length ? ` ${mriCityPage.alsoCovers}: ${city.nearby.join(', ')}.` : ''} ${mriCityPage.updatedLabel} ${city.updated}. ${c(city.population)}*`,
    '',
    c(city.answer),
    '',
    `## ${mriCityPage.takeawaysLabel}`,
    '',
    city.takeaways.map((t) => `- ${c(t)}`).join('\n'),
    '',
    `## ${h.cost(name)}`,
    '',
    c(city.priceSummary),
    '',
    mdTable(
      mriCityPage.priceColumns,
      city.prices.map((p) => [p.what, p.value, `[${n(p.sourceId)}]`]),
    ),
    '',
    `## ${h.where(name)}`,
    '',
    c(city.providersSummary),
    '',
    mdTable(
      [...mriCityPage.providerColumns, 'Source'],
      city.providers.map((p) => [
        p.name,
        p.type,
        p.location,
        p.features,
        p.selfPayPrice ?? mriCityPage.noPrice,
        `[${n(p.sourceId)}]`,
      ]),
    ),
    '',
    mriCityPage.providerNote,
    '',
    `## ${h.hospitals(name)}`,
    '',
    city.hospitals.map((ho) => `- **${ho.name}.** ${c(ho.note)} [${n(ho.sourceId)}]`).join('\n'),
    '',
    ...(city.openMri ? [`## ${h.open(name)}`, '', c(city.openMri), ''] : []),
    `## ${h.fullBody(name)}`,
    '',
    c(city.fullBody),
    '',
    `[${mriCityPage.fullBodyLink}](/scans/full-body-mri.md)`,
    '',
    `## ${h.referral(name)}`,
    '',
    c(shared.referral),
    '',
    `## ${h.payLess(name)}`,
    '',
    c(shared.payLess),
    '',
    ...(city.quotes.length ? [`## ${h.quotes}`, '', quotesMd(city.quotes, n), ''] : []),
    `## ${h.faq(name)}`,
    '',
    city.faqs.map((f) => `### ${f.q}\n\n${c(f.a)}`).join('\n\n'),
    '',
    `## ${h.otherCities}`,
    '',
    cities
      .filter((o) => o.slug !== city.slug)
      .map((o) => `- [${mriCityPage.title(o.city)}](${cityMdPath(o)})`)
      .join('\n'),
    `- [${mriFloridaHub.title}](/fl/mri/index.md)`,
    '',
    `## ${h.sources}`,
    '',
    sourcesMd(sources),
    '',
    '---',
    '',
    footer.disclaimer,
    '',
  ].join('\n');
}

export function renderFloridaMarkdown(): string {
  const sources = floridaSources();
  const n = sourceIndex({ sources, slug: 'fl-mri' });
  const c = (text: string) => citeMd(text, n);
  return [
    `# ${florida.headline}`,
    '',
    `*${mriCityPage.updatedLabel} ${floridaUpdated}.*`,
    '',
    c(florida.answer),
    '',
    `## ${mriCityPage.takeawaysLabel}`,
    '',
    florida.takeaways.map((t) => `- ${c(t)}`).join('\n'),
    '',
    `## ${mriFloridaHub.cityTableCaption}`,
    '',
    mdTable(
      mriFloridaHub.cityColumns,
      cities.map((city) => [
        `[${mriCityPage.title(city.city)}](${cityMdPath(city)})`,
        city.county,
        stripCites(city.priceRange),
        String(city.providers.length),
      ]),
    ),
    '',
    `## ${florida.priceHeading}`,
    '',
    c(florida.priceSummary),
    '',
    mdTable(
      mriCityPage.priceColumns,
      florida.prices.map((p) => [p.what, p.value, `[${n(p.sourceId)}]`]),
    ),
    '',
    ...florida.sections.flatMap((s) => [`## ${s.heading}`, '', s.paragraphs.map(c).join('\n\n'), '']),
    ...(florida.quotes.length ? [`## ${mriFloridaHub.quotesHeading}`, '', quotesMd(florida.quotes, n), ''] : []),
    `## ${mriCityPage.headings.faq('Florida')}`,
    '',
    florida.faqs.map((f) => `### ${f.q}\n\n${c(f.a)}`).join('\n\n'),
    '',
    `## ${mriCityPage.headings.sources}`,
    '',
    sourcesMd(sources),
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
