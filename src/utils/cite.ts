/**
 * Inline citations. Prose in the scan data may reference a source by its id
 * with `[src:id]`; the page renders it as a numbered superscript link to the
 * Sources list and the Markdown twin renders it as `[n]`. Unknown ids throw
 * at build time so a citation can never silently point at nothing.
 */

import type { Scan, Source } from '../data/scans/types';

const TOKEN = /\[src:([a-z0-9-]+)\]/g;

export function sourceIndex(scan: Pick<Scan, 'sources' | 'slug'>) {
  const index = new Map<string, number>();
  scan.sources.forEach((s, i) => index.set(s.id, i + 1));
  return (id: string): number => {
    const n = index.get(id);
    if (!n) throw new Error(`Scan "${scan.slug}" cites unknown source "${id}"`);
    return n;
  };
}

/** Every source id referenced anywhere in the scan, for a build-time check. */
export function citedIds(scan: Scan): Set<string> {
  const ids = new Set<string>();
  const scanText = (text: string) => {
    for (const m of text.matchAll(TOKEN)) ids.add(m[1]);
  };
  [
    scan.answer,
    scan.radiation,
    scan.cost,
    scan.whoForSummary,
    scan.results.note ?? '',
    ...Object.values(scan.facts),
    ...scan.takeaways,
    ...scan.accuracy,
    ...scan.limits,
    ...scan.notFor,
    ...scan.procedure,
    ...scan.prep,
    ...scan.detects.map((d) => d.note ?? ''),
  ].forEach(scanText);
  scan.faqs.forEach((f) => {
    scanText(f.a);
    f.sourceIds?.forEach((id) => ids.add(id));
  });
  scan.stats.forEach((s) => ids.add(s.sourceId));
  scan.quotes.forEach((q) => ids.add(q.sourceId));
  scan.guidelines.forEach((g) => ids.add(g.sourceId));
  ids.add(scan.results.sourceId);
  return ids;
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Prose → HTML with superscript citation links. The text is escaped. */
export function citeHtml(text: string, n: (id: string) => number): string {
  return escapeHtml(text).replace(
    TOKEN,
    (_, id) => `<sup class="cite"><a href="#src-${n(id)}">${n(id)}</a></sup>`,
  );
}

/** Prose → Markdown with bracketed citation numbers. */
export function citeMd(text: string, n: (id: string) => number): string {
  return text.replace(TOKEN, (_, id) => `[${n(id)}]`);
}

/** Prose with the citation tokens removed, for meta tags and JSON-LD. */
export function stripCites(text: string): string {
  return text.replace(TOKEN, '').replace(/\s+([.,;:])/g, '$1').replace(/\s{2,}/g, ' ').trim();
}

/** Sources that nothing cites, so a stale entry is caught at build time. */
export function uncitedSources(scan: Scan): Source[] {
  const used = citedIds(scan);
  return scan.sources.filter((s) => !used.has(s.id));
}
