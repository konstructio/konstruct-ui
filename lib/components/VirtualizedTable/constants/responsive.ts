export type HideBelowBreakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export const HIDE_BELOW_CLASS: Record<HideBelowBreakpoint, string> = {
  sm: 'max-sm:hidden',
  md: 'max-md:hidden',
  lg: 'max-lg:hidden',
  xl: 'max-xl:hidden',
  '2xl': 'max-2xl:hidden',
};

export const SHOW_BELOW_CLASS: Record<HideBelowBreakpoint, string> = {
  sm: 'sm:hidden',
  md: 'md:hidden',
  lg: 'lg:hidden',
  xl: 'xl:hidden',
  '2xl': '2xl:hidden',
};

export type ResponsiveTier = 'base' | HideBelowBreakpoint;

export const RESPONSIVE_TIERS: ResponsiveTier[] = [
  'base',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
];

export type ResponsiveEdgeClasses = {
  left: Record<ResponsiveTier, string>;
  right: Record<ResponsiveTier, string>;
};

export const BORDER_EDGE_CLASSES: ResponsiveEdgeClasses = {
  left: {
    base: 'max-sm:dark:border-l',
    sm: 'sm:max-md:dark:border-l',
    md: 'md:max-lg:dark:border-l',
    lg: 'lg:max-xl:dark:border-l',
    xl: 'xl:max-2xl:dark:border-l',
    '2xl': '2xl:dark:border-l',
  },
  right: {
    base: 'max-sm:dark:border-r',
    sm: 'sm:max-md:dark:border-r',
    md: 'md:max-lg:dark:border-r',
    lg: 'lg:max-xl:dark:border-r',
    xl: 'xl:max-2xl:dark:border-r',
    '2xl': '2xl:dark:border-r',
  },
};

export const ROUNDED_TOP_EDGE_CLASSES: ResponsiveEdgeClasses = {
  left: {
    base: 'max-sm:rounded-tl-lg',
    sm: 'sm:max-md:rounded-tl-lg',
    md: 'md:max-lg:rounded-tl-lg',
    lg: 'lg:max-xl:rounded-tl-lg',
    xl: 'xl:max-2xl:rounded-tl-lg',
    '2xl': '2xl:rounded-tl-lg',
  },
  right: {
    base: 'max-sm:rounded-tr-lg',
    sm: 'sm:max-md:rounded-tr-lg',
    md: 'md:max-lg:rounded-tr-lg',
    lg: 'lg:max-xl:rounded-tr-lg',
    xl: 'xl:max-2xl:rounded-tr-lg',
    '2xl': '2xl:rounded-tr-lg',
  },
};

export const ROUNDED_BOTTOM_EDGE_CLASSES: ResponsiveEdgeClasses = {
  left: {
    base: 'max-sm:rounded-bl-lg',
    sm: 'sm:max-md:rounded-bl-lg',
    md: 'md:max-lg:rounded-bl-lg',
    lg: 'lg:max-xl:rounded-bl-lg',
    xl: 'xl:max-2xl:rounded-bl-lg',
    '2xl': '2xl:rounded-bl-lg',
  },
  right: {
    base: 'max-sm:rounded-br-lg',
    sm: 'sm:max-md:rounded-br-lg',
    md: 'md:max-lg:rounded-br-lg',
    lg: 'lg:max-xl:rounded-br-lg',
    xl: 'xl:max-2xl:rounded-br-lg',
    '2xl': '2xl:rounded-br-lg',
  },
};

export const MOBILE_FILTER_QUERY = '(max-width: 767.98px)';
