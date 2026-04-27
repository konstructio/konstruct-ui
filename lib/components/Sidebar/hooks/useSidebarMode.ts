import { useMediaQuery } from '@/hooks';

import { SidebarMode } from '../contexts/SidebarContext';

export type SidebarModeProp = SidebarMode | 'auto';

export const DEFAULT_EXPANDED_BREAKPOINT = 1024;
export const DEFAULT_DRAWER_BREAKPOINT = 640;

export const useSidebarMode = (
  mode: SidebarModeProp = 'auto',
  expandedBreakpoint = DEFAULT_EXPANDED_BREAKPOINT,
  drawerBreakpoint = DEFAULT_DRAWER_BREAKPOINT,
): SidebarMode => {
  const isLargeViewport = useMediaQuery(`(min-width: ${expandedBreakpoint}px)`);
  const isSmallViewport = useMediaQuery(
    `(max-width: ${drawerBreakpoint - 0.02}px)`,
  );

  if (mode !== 'auto') {
    return mode;
  }

  if (isSmallViewport) {
    return 'drawer';
  }

  if (isLargeViewport) {
    return 'expanded';
  }

  return 'collapsed';
};
