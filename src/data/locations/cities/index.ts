/**
 * The Florida city MRI pages, in display order (largest metro searches
 * first). Each file holds one city's sourced content; see ../types.ts.
 */
import type { CityMri } from '../types';
import { fortMyers } from './fort-myers';
import { jacksonville } from './jacksonville';
import { tallahassee } from './tallahassee';
import { westPalmBeach } from './west-palm-beach';
import { naples } from './naples';
import { sarasota } from './sarasota';

export const cities: CityMri[] = [jacksonville, westPalmBeach, fortMyers, tallahassee, sarasota, naples];
