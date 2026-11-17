import type { HeaderCustom } from '../Sheet.types';
import { headerDirection } from '../utils';

export const SLIDE_TRANSITION = { duration: 0.2, ease: 'easeOut' } as const;

export const SPRING = { type: 'spring', stiffness: 380, damping: 38 } as const;

export const INSTANT = { duration: 0 } as const;

export const DRAG_RESISTANCE = 0.05;

// The header row (back control or plain title) crosses over on a step change
// the way the content does, with a shorter travel.
export const HEADER_VARIANTS = {
  enter: (custom: HeaderCustom) => ({
    opacity: 0,
    x: headerDirection(custom) > 0 ? TITLE_TRAVEL : -TITLE_TRAVEL,
  }),
  center: { opacity: 1, x: 0 },
  exit: (custom: HeaderCustom) => {
    if (typeof custom === 'object' && custom.instant) {
      return { opacity: 0, transition: INSTANT };
    }

    return {
      opacity: 0,
      x: headerDirection(custom) > 0 ? -TITLE_TRAVEL : TITLE_TRAVEL,
    };
  },
};

export const TITLE_CLASS =
  'text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-metal-400';

// How far behind the outgoing step the previous one waits, as a share of the
// panel width: the parallax of the iOS back gesture.
export const BACK_PARALLAX = 0.3;

// The title travels less than the content, like the iOS navigation bar.
export const TITLE_TRAVEL = 24;

// Chevron slot plus gap: how far the title sits right of where a first step's
// title stands, so a back swipe to the first step lands it in place.
export const CHEVRON_SLOT = 36;

// Soft bottom edge while the body grows over content it has not shown yet.
export const REVEAL_FADE = '96px';

export const REVEAL_SWEEP = { duration: 0.45, ease: 'easeOut' } as const;
