import type { APIRoute } from 'astro';
import { renderScansIndexMarkdown } from '../../utils/markdown';

export const GET: APIRoute = () =>
  new Response(renderScansIndexMarkdown(), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
