import type { APIRoute } from 'astro';
import { renderLlmsTxt } from '../utils/markdown';

export const GET: APIRoute = async ({ site }) =>
  new Response(await renderLlmsTxt(site), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
