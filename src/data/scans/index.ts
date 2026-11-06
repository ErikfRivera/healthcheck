/**
 * The twelve scans, in display order. Each file holds one scan's full,
 * sourced content; see types.ts for the shape and the writing rules.
 * Keep the total divisible by 4 (BRAND.md §7).
 */
import type { Scan } from './types';
import { fullBodyMri } from './full-body-mri';
import { brainMri } from './brain-mri';
import { coronaryCalciumCt } from './coronary-calcium-ct';
import { lowDoseLungCt } from './low-dose-lung-ct';
import { cardiacMri } from './cardiac-mri';
import { ctAngiography } from './ct-angiography';
import { dexaScan } from './dexa-scan';
import { abdominalUltrasound } from './abdominal-ultrasound';
import { thyroidUltrasound } from './thyroid-ultrasound';
import { skinCancerScreening } from './skin-cancer-screening';
import { comprehensiveBloodPanel } from './comprehensive-blood-panel';
import { multiCancerBloodTest } from './multi-cancer-blood-test';

export const scans: Scan[] = [
  fullBodyMri,
  brainMri,
  coronaryCalciumCt,
  lowDoseLungCt,
  cardiacMri,
  ctAngiography,
  dexaScan,
  abdominalUltrasound,
  thyroidUltrasound,
  skinCancerScreening,
  comprehensiveBloodPanel,
  multiCancerBloodTest,
];
