import {
  HideBelowBreakpoint,
  RESPONSIVE_TIERS,
  ResponsiveEdgeClasses,
} from '../../constants';

const isVisibleAtTier = (
  hideBelow: HideBelowBreakpoint | undefined,
  tierIndex: number,
): boolean => {
  return !hideBelow || RESPONSIVE_TIERS.indexOf(hideBelow) <= tierIndex;
};

/**
 * `first:`/`last:` cannot skip cells hidden by `hideBelow`, so the outer
 * edges go on the first and last column visible at each breakpoint instead.
 */
export const getResponsiveEdgeClasses = (
  hideBelows: (HideBelowBreakpoint | undefined)[],
  columnIndex: number,
  edgeClasses: ResponsiveEdgeClasses,
): string[] => {
  return RESPONSIVE_TIERS.flatMap((tier, tierIndex) => {
    const visibleIndexes = hideBelows.flatMap((hideBelow, index) =>
      isVisibleAtTier(hideBelow, tierIndex) ? [index] : [],
    );
    const classes: string[] = [];

    if (visibleIndexes[0] === columnIndex) {
      classes.push(edgeClasses.left[tier]);
    }

    if (visibleIndexes.at(-1) === columnIndex) {
      classes.push(edgeClasses.right[tier]);
    }

    return classes;
  });
};
