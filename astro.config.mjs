// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.healthcheck.org',
  // Restored legacy pages are linked both as /faq and /faq/; both must resolve.
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
