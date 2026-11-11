/**
 * The content model for one "MRI in <city>" page under /fl/mri/<slug>/.
 * The HTML page, its Markdown twin, its JSON-LD and its row on the /fl/mri/
 * hub are all rendered from one object of this shape.
 *
 * These are local pages, and Google treats a page per city that differs only
 * in the place name as scaled content abuse. So each city must earn its page
 * with data that belongs to that city alone: its published self-pay prices,
 * its named imaging centers and hospitals, and its full-body MRI clinics.
 * Statewide material (referral rules, price-transparency rights) lives once
 * in florida.ts and is summarised, not copied, on each city page.
 *
 * The writing rules match the scan pages (types in ../scans/types.ts):
 * - Answer first. `answer` and every section lead with the direct answer.
 * - Every number and every quote carries a source, inline as `[src:id]` or as
 *   a `sourceId`, that resolves to `sources` (or to the shared Florida
 *   sources). The build fails on an unknown id or an unused source.
 * - Name the city in each passage ("MRI prices in Tampa…", not "Prices
 *   here…") so it stands alone when quoted out of context.
 * - HealthCheck has no partner network in these cities yet. Never imply
 *   that a listed center is a partner, and never list a price that the
 *   center or an aggregator has not published.
 */

import type { Faq, Quote, Source } from '../scans/types';

export type { Faq, Quote, Source };

export type ProviderType = 'Hospital outpatient' | 'Independent imaging center' | 'Full-body screening clinic';

export interface Provider {
  name: string;
  type: ProviderType;
  /** Street address or neighbourhood, as printed on the provider's page. */
  location: string;
  /** Equipment and services stated on the provider's page: "3T, wide-bore, open". */
  features: string;
  /** Published self-pay price, verbatim in substance, or omitted. */
  selfPayPrice?: string;
  sourceId: string;
}

export interface PricePoint {
  /** What the price covers: "MRI without contrast, any single region". */
  what: string;
  /** The figure: "$1,230 average; $400 to $3,100 range". */
  value: string;
  sourceId: string;
}

export interface Hospital {
  name: string;
  /** One sentence on the MRI services the system lists, with location. */
  note: string;
  sourceId: string;
}

export interface CityMri {
  /** URL segment under /fl/mri/. Stable — do not rename. */
  slug: string;
  city: string;
  county: string;
  /** Nearby cities the page also covers, searched for by name ("Cape Coral"). */
  nearby: string[];
  /** ISO date of the last substantive content review. Drives lastmod. */
  updated: string;
  /** <meta name="description">, under 160 characters. */
  metaDescription: string;
  /** Population line with its citation, e.g. "455,924 residents (2024 estimate) [src:census]". */
  population: string;

  /** The direct answer to "Where can I get an MRI in <city> and what does it cost?" */
  answer: string;
  /** Four to six short bullets, each sourced. */
  takeaways: string[];

  /**
   * The city's price range in one short line, for the /fl/mri/ comparison
   * table and the meta description: "$400 to $3,100 for MRI without
   * contrast [src:mdsave]". Must be read off `prices`, never computed anew.
   */
  priceRange: string;
  /** Published prices, shown as a table. */
  prices: PricePoint[];
  /** One paragraph reading the price table: the spread and why it exists. */
  priceSummary: string;

  /** One paragraph introducing the imaging-center table. */
  providersSummary: string;
  providers: Provider[];

  hospitals: Hospital[];

  /** One paragraph on open, wide-bore or stand-up MRI in the city, or omitted. */
  openMri?: string;
  /** One paragraph on full-body / preventive MRI clinics in the city. */
  fullBody: string;

  quotes: Quote[];
  faqs: Faq[];
  sources: Source[];
}

/** One question-headed section of the /fl/mri/ hub. */
export interface HubSection {
  heading: string;
  paragraphs: string[];
}

/**
 * The statewide content: the /fl/mri/ hub page, plus the two short passages
 * every city page carries (referrals and how to pay less). Those passages are
 * templated on the city name and cite the statewide `sources`.
 */
export interface FloridaMri {
  updated: string;
  metaDescription: string;
  headline: string;
  answer: string;
  takeaways: string[];
  prices: PricePoint[];
  priceHeading: string;
  priceSummary: string;
  sections: HubSection[];
  quotes: Quote[];
  faqs: Faq[];
  sources: Source[];
  city: {
    referral: (city: string) => string;
    payLess: (city: string) => string;
  };
}
