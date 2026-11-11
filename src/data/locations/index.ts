/**
 * The Florida MRI pages: the statewide hub content and one object per city.
 * See types.ts for the shape and the rules that keep each city page unique.
 */
import type { CityMri, Source } from './types';
import { idsIn } from '../../utils/cite';
import { florida } from './florida';
import { cities } from './cities/index';

export { florida, cities };
export type { CityMri, FloridaMri, Provider, PricePoint, Hospital, ProviderType } from './types';

export const cityPath = (city: Pick<CityMri, 'slug'>) => `/fl/mri/${city.slug}/`;
export const cityMdPath = (city: Pick<CityMri, 'slug'>) => `/fl/mri/${city.slug}.md`;

/** The statewide passages as they read on one city's page. */
export function sharedPassages(city: CityMri) {
  return {
    referral: florida.city.referral(city.city),
    payLess: florida.city.payLess(city.city),
  };
}

/** Every source id the city's own content cites. */
function cityOwnIds(city: CityMri): Set<string> {
  return idsIn(
    [
      city.population,
      city.answer,
      city.priceRange,
      city.priceSummary,
      city.providersSummary,
      city.openMri ?? '',
      city.fullBody,
      ...city.takeaways,
      ...city.hospitals.map((h) => h.note),
      ...city.faqs.map((f) => f.a),
    ],
    [
      ...city.prices.map((p) => p.sourceId),
      ...city.providers.map((p) => p.sourceId),
      ...city.hospitals.map((h) => h.sourceId),
      ...city.quotes.map((q) => q.sourceId),
      ...city.faqs.flatMap((f) => f.sourceIds ?? []),
    ],
  );
}

/**
 * The numbered source list for a city page: the city's own sources, then the
 * statewide sources its shared passages cite. Throws at build time on a city
 * source nothing cites, or on an id that collides with a statewide one.
 */
export function citySources(city: CityMri): Source[] {
  const own = cityOwnIds(city);
  const unused = city.sources.filter((s) => !own.has(s.id));
  if (unused.length) {
    throw new Error(`City "${city.slug}" lists sources nothing cites: ${unused.map((s) => s.id).join(', ')}`);
  }
  const ownIds = new Set(city.sources.map((s) => s.id));
  const clash = florida.sources.filter((s) => ownIds.has(s.id));
  if (clash.length) {
    throw new Error(`City "${city.slug}" reuses statewide source ids: ${clash.map((s) => s.id).join(', ')}`);
  }
  const shared = sharedPassages(city);
  const sharedIds = idsIn([shared.referral, shared.payLess]);
  return [...city.sources, ...florida.sources.filter((s) => sharedIds.has(s.id))];
}

/** The hub's numbered source list. Throws at build time on a source the hub's own content never cites. */
export function floridaSources(): Source[] {
  const used = idsIn(
    [
      florida.answer,
      florida.priceSummary,
      ...florida.takeaways,
      ...florida.sections.flatMap((s) => s.paragraphs),
      ...florida.faqs.map((f) => f.a),
    ],
    [
      ...florida.prices.map((p) => p.sourceId),
      ...florida.quotes.map((q) => q.sourceId),
      ...florida.faqs.flatMap((f) => f.sourceIds ?? []),
    ],
  );
  const unused = florida.sources.filter((s) => !used.has(s.id));
  if (unused.length) {
    throw new Error(`Florida hub lists sources nothing cites: ${unused.map((s) => s.id).join(', ')}`);
  }
  return florida.sources;
}

/** Newest content date across the hub and every city, for the hub's lastmod. */
export const floridaUpdated = [florida.updated, ...cities.map((c) => c.updated)].sort().at(-1)!;
