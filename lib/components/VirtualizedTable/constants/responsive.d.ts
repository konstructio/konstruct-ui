export type HideBelowBreakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export declare const HIDE_BELOW_CLASS: Record<HideBelowBreakpoint, string>;
export declare const SHOW_BELOW_CLASS: Record<HideBelowBreakpoint, string>;
export type ResponsiveTier = 'base' | HideBelowBreakpoint;
export declare const RESPONSIVE_TIERS: ResponsiveTier[];
export type ResponsiveEdgeClasses = {
    left: Record<ResponsiveTier, string>;
    right: Record<ResponsiveTier, string>;
};
export declare const BORDER_EDGE_CLASSES: ResponsiveEdgeClasses;
export declare const ROUNDED_TOP_EDGE_CLASSES: ResponsiveEdgeClasses;
export declare const ROUNDED_BOTTOM_EDGE_CLASSES: ResponsiveEdgeClasses;
export declare const MOBILE_FILTER_QUERY = "(max-width: 767.98px)";
