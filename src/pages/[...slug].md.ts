import type { APIRoute, GetStaticPaths } from 'astro';
import { getLegacyEntries, legacySlug } from '../utils/legacy';
import { renderLegacyMarkdown } from '../utils/markdown';

/** Markdown twin of each archived legacy page, at `<original path>.md`. */
export const getStaticPaths = (async () =>
  (await getLegacyEntries()).map((entry) => ({
    params: { slug: legacySlug(entry) },
    props: { entry },
  }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) =>
  new Response(renderLegacyMarkdown(props.entry), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
