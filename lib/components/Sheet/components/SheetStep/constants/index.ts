import type { StepCustom } from '../SheetStep.types';
import { directionOf } from '../utils';

export const STEP_OFFSET = '100%';

export const SPRING = { type: 'spring', stiffness: 380, damping: 38 } as const;

export const INSTANT = { duration: 0 } as const;

export const DRAG_RESISTANCE = 0.05;

// Forward, the new step slides in over the old one, which only drifts back a
// little; backward it is the old step that slides out over the new one. Both
// stay opaque, so the one on top covers the other instead of fading through.
export const PARALLAX_OFFSET = '-30%';

export const STEP_VARIANTS = {
  enter: (custom: StepCustom) =>
    directionOf(custom) > 0
      ? { x: STEP_OFFSET, opacity: 1, zIndex: 1 }
      : { x: PARALLAX_OFFSET, opacity: 1, zIndex: 0 },
  center: (custom: StepCustom) => ({
    x: 0,
    opacity: 1,
    zIndex: directionOf(custom) > 0 ? 1 : 0,
  }),
  exit: (custom: StepCustom) => {
    if (typeof custom === 'object' && custom.instant) {
      return { opacity: 0, transition: INSTANT };
    }

    return directionOf(custom) > 0
      ? { x: PARALLAX_OFFSET, opacity: 1, zIndex: 0 }
      : { x: STEP_OFFSET, opacity: 1, zIndex: 1 };
  },
};
