export type HideBelowBreakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export const HIDE_BELOW_CLASS: Record<HideBelowBreakpoint, string> = {
  sm: 'max-sm:hidden',
  md: 'max-md:hidden',
  lg: 'max-lg:hidden',
  xl: 'max-xl:hidden',
  '2xl': 'max-2xl:hidden',
};
