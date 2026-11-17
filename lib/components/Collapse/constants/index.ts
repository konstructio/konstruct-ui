const EASE = [0.4, 0, 0.2, 1] as const;

const EASE_OUT = [0, 0, 0.2, 1] as const;

export const INSTANT_TRANSITION = { duration: 0 };

export const COLLAPSE_TRANSITION = {
  height: { duration: 0.35, ease: EASE },
  marginTop: { duration: 0.35, ease: EASE },
  opacity: { duration: 0.25, ease: EASE },
};

export const EXPAND_TRANSITION = {
  height: { duration: 0.35, ease: EASE_OUT },
  marginTop: { duration: 0.35, ease: EASE_OUT },
  opacity: { duration: 0.2, ease: EASE_OUT },
};
