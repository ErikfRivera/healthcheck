// TEMPORARY smoke-test stub; replaced by the twelve real scan files.
import type { Scan } from './types';
const stub = (num: string, slug: string, title: string): Scan => ({
  num, slug, title, noun: `a ${title.toLowerCase()}`, aka: ['x'], modality: 'CT',
  price: 'From $1 · 1 minute', avg: '$2', copy: 'Copy.', metaDescription: 'Meta.', updated: '2026-11-06',
  answer: 'Answer.', takeaways: ['T [src:a]'],
  facts: { duration: '1', radiation: 'none', contrast: 'none', prep: 'none', results: '1', bestFor: 'x' },
  detects: [{ item: 'X', note: 'n [src:a]' }], limits: ['l'],
  guidelines: [{ body: 'B', year: '2020', position: 'p', sourceId: 'a' }], whoForSummary: 's', notFor: ['n'],
  radiation: 'r', procedure: ['p'], prep: ['p'], accuracy: ['a'],
  results: { title: 't', columns: ['a','b'], rows: [['1','2']], sourceId: 'a' },
  stats: [{ value: '1', label: 'l', sourceId: 'a' }], quotes: [{ text: 'q', speaker: 's', role: 'r', sourceId: 'a' }],
  cost: 'c', faqs: [{ q: 'q?', a: 'a' }], related: ['brain-mri'],
  sources: [{ id: 'a', title: 'T', publisher: 'P', url: 'https://example.com', date: '2020' }],
  schema: { type: 'ImagingTest', imagingTechnique: 'CT', bodyLocation: ['chest'], usedToDiagnose: ['x'] },
});
export const scans: Scan[] = [stub('01','full-body-mri','Full-body MRI'), stub('02','brain-mri','Brain MRI')];
