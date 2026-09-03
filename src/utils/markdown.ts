/**
 * Renders the site's copy (src/data/site.ts) to Markdown for the agent-facing
 * mirrors: /index.md, /scans/<slug>.md and /llms.txt. Copy must never be
 * written here — import it from site.ts so the HTML and Markdown versions of
 * a page cannot drift apart.
 */

import {
  site,
  hero,
  stats,
  scans,
  steps,
  why,
  guarantees,
  faqs,
  footer,
  type Scan,
} from '../data/site';

/** One-sentence summary of the site, reused by llms.txt and page intros. */
export const siteSummary =
  'HealthCheck.org connects people with trusted imaging centers for preventive scans — full-body MRI, coronary calcium CT, DEXA and more — at upfront, comparable prices. No referral needed; results are read by board-certified radiologists.';

/**
 * Every page on the site with its Markdown twin, in one place so llms.txt and
 * the endpoints can't drift. Paths are site-relative; make them absolute with
 * `new URL(path, site)` at the call site.
 */
export const pages = [
  {
    path: '/',
    mdPath: '/index.md',
    title: 'Home',
    blurb: 'Scans offered, pricing model, how it works, guarantees, and FAQ.',
  },
  ...scans.map((scan) => ({
    path: `/scans/${scan.slug}/`,
    mdPath: `/scans/${scan.slug}.md`,
    title: scan.title,
    blurb: scan.copy,
  })),
] as const;

function scanBody(scan: Scan): string {
  const lines: string[] = [];
  if (site.showPricing) {
    lines.push(`${scan.price} — est. national average ~~${scan.avg}~~`, '');
  }
  lines.push(scan.copy);
  return lines.join('\n');
}

function scanSection(scan: Scan): string {
  return `### ${scan.title}\n\n${scanBody(scan)}`;
}

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
  return [
    `# ${scan.title} — ${site.name}`,
    '',
    scanBody(scan),
    '',
    '## How it works',
    '',
    steps.map((s) => `- **${s.title}.** ${s.copy}`).join('\n'),
    '',
    '## Guarantees',
    '',
    guarantees.map((g) => `- **${g.title}** ${g.copy}`).join('\n'),
    '',
    '## All scans',
    '',
    scans
      .filter((s) => s.slug !== scan.slug)
      .map((s) => `- [${s.title}](/scans/${s.slug}.md)`)
      .join('\n'),
    '',
    '---',
    '',
    footer.disclaimer,
    '',
  ].join('\n');
}

export function renderLlmsTxt(origin: URL | undefined): string {
  const abs = (path: string) => (origin ? new URL(path, origin).href : path);
  return [
    `# ${site.name}`,
    '',
    `> ${siteSummary}`,
    '',
    '## Pages',
    '',
    pages.map((p) => `- [${p.title}](${abs(p.mdPath)}): ${p.blurb}`).join('\n'),
    '',
    '## Notes',
    '',
    `- ${footer.disclaimer}`,
    '- All prices shown are "from" prices and vary by imaging center and location.',
    '',
  ].join('\n');
}
