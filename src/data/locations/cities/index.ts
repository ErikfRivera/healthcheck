/**
 * The Florida city MRI pages, in display order (largest metro searches
 * first). Each file holds one city's sourced content; see ../types.ts.
 */
import type { CityMri } from '../types';
import { fortMyers } from './fort-myers';
import { miami } from './miami';
import { fortLauderdale } from './fort-lauderdale';
import { bocaRaton } from './boca-raton';
import { orlando } from './orlando';
import { tampa } from './tampa';
import { stPetersburg } from './st-petersburg';
import { jacksonville } from './jacksonville';
import { tallahassee } from './tallahassee';
import { westPalmBeach } from './west-palm-beach';
import { naples } from './naples';
import { sarasota } from './sarasota';

export const cities: CityMri[] = [
  miami,
  orlando,
  tampa,
  jacksonville,
  fortLauderdale,
  stPetersburg,
  westPalmBeach,
  bocaRaton,
  fortMyers,
  tallahassee,
  sarasota,
  naples,
];
