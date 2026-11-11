import type { APIRoute, GetStaticPaths } from 'astro';
import { cities } from '../../../data/locations';
import { renderCityMarkdown } from '../../../utils/markdown';

export const getStaticPaths: GetStaticPaths = () =>
  cities.map((city) => ({ params: { city: city.slug }, props: { city } }));

export const GET: APIRoute = ({ props }) =>
  new Response(renderCityMarkdown(props.city), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
