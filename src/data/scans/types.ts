/**
 * The content model for one preventive scan. Every scan page, its Markdown
 * twin, its JSON-LD and its row on the /scans/ comparison page are rendered
 * from one object of this shape, so none of them can drift apart.
 *
 * Writing rules (see BRAND.md §1 and §6):
 * - Answer first. `answer` and every section lead with the direct answer.
 * - Every number and every quote carries a `sourceId` that resolves to an
 *   entry in `sources`. No unsourced statistics.
 * - Quotes are verbatim from the cited page. Never paraphrase inside quotes.
 * - Name the entity. Say "a coronary calcium scan", not "it", at the start of
 *   each section so passages stand alone when quoted out of context.
 */

export interface Source {
  /** Short handle referenced by stats, quotes, guidelines and FAQs. */
  id: string;
  title: string;
  publisher: string;
  url: string;
  /** Publication or last-reviewed date as printed on the page (YYYY or YYYY-MM-DD). */
  date: string;
}

export interface Stat {
  /** The figure, e.g. "20%" or "0.1 mSv". */
  value: string;
  /** What the figure is, in one plain sentence fragment. */
  label: string;
  sourceId: string;
}

export interface Quote {
  /** Verbatim text from the source page. */
  text: string;
  speaker: string;
  /** Credential or role, e.g. "U.S. Preventive Services Task Force" or "MD, cardiologist". */
  role: string;
  sourceId: string;
}

export interface Guideline {
  body: string;
  year: string;
  /** The position in plain words, close to the body's own wording. */
  position: string;
  /** Grade or class where the body uses one, e.g. "Grade B" or "Class IIa". */
  grade?: string;
  sourceId: string;
}

export interface Faq {
  q: string;
  a: string;
  sourceIds?: string[];
}

export interface ResultsTable {
  title: string;
  columns: string[];
  rows: string[][];
  note?: string;
  sourceId: string;
}

export type Modality = 'MRI' | 'CT' | 'Ultrasound' | 'X-ray' | 'Physical exam' | 'Blood test';

/** schema.org MedicalImagingTechnique values, for ImagingTest.imagingTechnique. */
export type ImagingTechnique = 'MRI' | 'CT' | 'Ultrasound' | 'XRay';

export interface Scan {
  /** Two-digit index, shown on the card and used as the filter key. */
  num: string;
  /** URL segment for the scan's page (`/scans/<slug>`). Stable — do not rename. */
  slug: string;
  title: string;
  /** The title with an article, for sentence templates: "a coronary calcium scan". */
  noun: string;
  /** Synonyms and clinical names people search for. Rendered visibly and as alternateName. */
  aka: string[];
  modality: Modality;
  /** PLACEHOLDER price and duration line on the card. */
  price: string;
  /** PLACEHOLDER estimated national average, shown struck through. */
  avg: string;
  /** Card copy on the homepage grid, one or two sentences. */
  copy: string;
  /** <meta name="description">, under 160 characters. */
  metaDescription: string;
  /** ISO date of the last substantive content review. Drives lastmod and dateModified. */
  updated: string;

  /** The direct answer to "What is <scan>?", two or three sentences. */
  answer: string;
  /** Key takeaways, four to six short bullets. */
  takeaways: string[];

  /** Short structured facts, shared by the facts table and the comparison page. */
  facts: {
    duration: string;
    radiation: string;
    contrast: string;
    prep: string;
    results: string;
    /** One-line answer to "who is this for", guideline-based. */
    bestFor: string;
  };

  detects: { item: string; note?: string }[];
  limits: string[];
  guidelines: Guideline[];
  /** Plain-language summary of the guideline table, one paragraph. */
  whoForSummary: string;
  notFor: string[];
  /** Paragraph on radiation dose and contrast, with figures. */
  radiation: string;
  /** What happens, step by step. */
  procedure: string[];
  prep: string[];
  /** Paragraphs on accuracy, false positives and incidental findings. */
  accuracy: string[];
  results: ResultsTable;
  stats: Stat[];
  quotes: Quote[];
  /** Paragraph on published self-pay prices, each figure sourced. */
  cost: string;
  faqs: Faq[];
  /** Slugs of related scans. */
  related: string[];
  sources: Source[];

  /** Hints for the JSON-LD. */
  schema: {
    type: 'ImagingTest' | 'BloodTest' | 'MedicalTest' | 'MedicalProcedure';
    imagingTechnique?: ImagingTechnique;
    bodyLocation: string[];
    /** Conditions the test screens for, as plain names. */
    usedToDiagnose: string[];
    /** MeSH or Wikidata URL for the test itself, for entity disambiguation. */
    sameAs?: string[];
  };
}
