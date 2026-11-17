export type HideBelowBreakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type ResponsiveTier = 'base' | HideBelowBreakpoint;

export type ResponsiveEdgeClasses = {
  left: Record<ResponsiveTier, string>;
  right: Record<ResponsiveTier, string>;
};
