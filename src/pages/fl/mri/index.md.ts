import type { APIRoute } from 'astro';
import { renderFloridaMarkdown } from '../../../utils/markdown';

export const GET: APIRoute = () =>
  new Response(renderFloridaMarkdown(), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
