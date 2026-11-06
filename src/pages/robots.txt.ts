import type { APIRoute } from 'astro';

/**
 * Everyone may crawl. The AI search and user-fetch agents are named
 * explicitly so the intent survives any future per-bot rule: these are the
 * crawlers that decide whether the site can be cited in ChatGPT, Claude,
 * Perplexity, Copilot and Google's AI features. Training crawlers (GPTBot,
 * ClaudeBot, Google-Extended) are allowed deliberately — being in the
 * training data is how an assistant knows a brand without searching.
 */
const searchBots = [
  'Googlebot',
  'Bingbot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'DuckAssistBot',
  'Applebot',
];

const trainingBots = ['GPTBot', 'ClaudeBot', 'Google-Extended', 'CCBot', 'Applebot-Extended', 'meta-externalagent'];

export const GET: APIRoute = ({ site }) => {
  const group = (agents: string[]) => [...agents.map((a) => `User-agent: ${a}`), 'Allow: /', ''];
  const body = [
    '# AI search and answer engines',
    ...group(searchBots),
    '# AI training crawlers',
    ...group(trainingBots),
    '# Everyone else',
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${new URL('sitemap-index.xml', site)}`,
    '',
  ].join('\n');
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
