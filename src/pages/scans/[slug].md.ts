import type { APIRoute, GetStaticPaths } from 'astro';
import { scans } from '../../data/site';
import { renderScanMarkdown } from '../../utils/markdown';

export const getStaticPaths: GetStaticPaths = () =>
  scans.map((scan) => ({ params: { slug: scan.slug }, props: { scan } }));

export const GET: APIRoute = ({ props }) =>
  new Response(renderScanMarkdown(props.scan), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
