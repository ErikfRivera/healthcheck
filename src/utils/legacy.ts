/**
 * Helpers for the archive of restored legacy pages (src/content/legacy).
 *
 * Each entry's `path` is its original URL from the old site, decoded, and is
 * the only thing routing looks at. These helpers turn it into Astro route
 * params, hrefs, and Markdown-twin paths, and refuse any path that would
 * shadow a route the marketplace owns.
 */

import { getCollection, type CollectionEntry } from 'astro:content';
import { archive, type LegacySection } from '../data/site';

export type LegacyEntry = CollectionEntry<'legacy'>;

/** Routes the catch-all must never generate. */
const RESERVED = [
  /^\/$/,
  /^\/scans(\/|$)/,
  /^\/archive$/,
  /^\/(robots\.txt|llms\.txt|index\.md|index\.html\.md|sitemap[^/]*\.xml)$/,
  /^\/(favicon\.svg|og\.png)$/,
];

export async function getLegacyEntries(): Promise<LegacyEntry[]> {
  const entries = await getCollection('legacy');
  const seen = new Set<string>();
  for (const e of entries) {
    const p = e.data.path;
    if (RESERVED.some((re) => re.test(p))) {
      throw new Error(`Legacy page ${e.id} would shadow a site route: ${p}`);
    }
    if (p.endsWith('/') || p.endsWith('.md')) {
      throw new Error(`Legacy path must not end in "/" or ".md": ${p}`);
    }
    if (seen.has(p)) throw new Error(`Duplicate legacy path: ${p}`);
    seen.add(p);
  }
  return entries.sort((a, b) => a.data.heading.localeCompare(b.data.heading));
}

/** Rest-param value for `[...slug]` routes: the path without its leading slash. */
export const legacySlug = (entry: LegacyEntry) => entry.data.path.slice(1);

/** Percent-encoded href for a legacy path (encodes the curly apostrophes). */
export const legacyHref = (path: string) => encodeURI(path);

/** The page's Markdown twin, `<path>.md`. */
export const legacyMdPath = (entry: LegacyEntry) => `${entry.data.path}.md`;

export const sectionLabel = (section: LegacySection) =>
  `${archive.kicker} · ${archive.sectionLabels[section]}`;

/** The muted line under the heading's notice: press date or blog byline. */
export const legacyMeta = (entry: LegacyEntry) =>
  entry.data.date ? `${archive.releasedLabel} ${entry.data.date}` : entry.data.byline;

/** Entries grouped in the archive index's section order, empty sections dropped. */
export function groupBySection(entries: LegacyEntry[]) {
  return (Object.keys(archive.sectionHeadings) as LegacySection[])
    .map((section) => ({
      section,
      heading: archive.sectionHeadings[section],
      entries: entries.filter((e) => e.data.section === section),
    }))
    .filter((g) => g.entries.length > 0);
}
