import type { Easing } from 'motion/react';

export const DEFAULT_DURATION_S = 2;

export const DEFAULT_DELAY_S = 0;

export const DEFAULT_EASING: Easing = 'easeOut';

export const DEFAULT_CHARACTER_DURATION_S = 0.35;

export const FALLBACK_FORMAT_OPTIONS: Intl.NumberFormatOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};
