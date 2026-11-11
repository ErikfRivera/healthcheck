/**
 * The Florida city MRI pages, in display order (largest metro searches
 * first). Each file holds one city's sourced content; see ../types.ts.
 */
import type { CityMri } from '../types';
import { fortMyers } from './fort-myers';
import { naples } from './naples';
import { sarasota } from './sarasota';

export const cities: CityMri[] = [fortMyers, sarasota, naples];
