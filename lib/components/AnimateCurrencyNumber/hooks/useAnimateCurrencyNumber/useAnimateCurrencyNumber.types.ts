import type { Easing } from 'motion/react';

export type UseAnimateCurrencyNumberOptions = {
  delaySeconds: number;
  disabled: boolean;
  durationSeconds: number;
  easing: Easing;
  from?: number;
  onCountEnd?: (target: number) => void;
  onCountStart?: (target: number) => void;
};
