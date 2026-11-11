// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { scans } from './src/data/scans/index.ts';
import { cities, floridaUpdated } from './src/data/locations/index.ts';

const site = 'https://www.healthcheck.org';

/**
 * Honest lastmod dates: each scan page carries the date of its last content
 * review, and the two pages that list the scans (home and /scans/) move with
 * the newest of them. The same goes for the Florida MRI city pages and their
 * /fl/mri/ hub. Archived legacy pages get no lastmod on purpose — they
 * are kept as they were.
 */
const newest = scans.map((s) => s.updated).sort().at(-1);
/** @type {Map<string, string | undefined>} */
const lastmod = new Map();
lastmod.set(`${site}/`, newest);
lastmod.set(`${site}/scans/`, newest);
for (const s of scans) lastmod.set(`${site}/scans/${s.slug}/`, s.updated);
// The Florida MRI hub moves with the newest of its own content and its cities.
lastmod.set(`${site}/fl/mri/`, floridaUpdated);
for (const c of cities) lastmod.set(`${site}/fl/mri/${c.slug}/`, c.updated);

export default defineConfig({
  site,
  // Restored legacy pages are linked both as /faq and /faq/; both must resolve.
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      serialize(item) {
        const date = lastmod.get(item.url);
        return date ? { ...item, lastmod: date } : item;
      },
    }),
  ],
});
