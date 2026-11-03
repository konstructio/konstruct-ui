import { HideBelowBreakpoint, ResponsiveEdgeClasses } from '../../constants';
/**
 * `first:`/`last:` cannot skip cells hidden by `hideBelow`, so the outer
 * edges go on the first and last column visible at each breakpoint instead.
 */
export declare const getResponsiveEdgeClasses: (hideBelows: (HideBelowBreakpoint | undefined)[], columnIndex: number, edgeClasses: ResponsiveEdgeClasses) => string[];
