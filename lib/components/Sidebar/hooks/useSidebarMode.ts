import { useMediaQuery } from '@/hooks';

import { SidebarMode } from '../contexts/SidebarContext';

export type SidebarModeProp = SidebarMode | 'auto';

export const DEFAULT_EXPANDED_BREAKPOINT = 1024;
export const DEFAULT_DRAWER_BREAKPOINT = 640;

export const useSidebarMode = (
  mode: SidebarModeProp = 'auto',
  expandedBreakpoint = DEFAULT_EXPANDED_BREAKPOINT,
  drawerBreakpoint = DEFAULT_DRAWER_BREAKPOINT,
  initialMode?: SidebarMode,
): SidebarMode => {
  // `useMediaQuery` resolves to `false` during SSR / first paint. Probe all
  // three ranges explicitly so each resolved mode can be detected directly
  // — without this, the desktop case would be indistinguishable from SSR
  // and we'd incorrectly stick to the `initialMode` cookie value when the
  // viewport is actually large enough for `expanded`.
  // In the SSR / first-paint case (all queries false), fall back to the
  // consumer-provided `initialMode` (typically read from a cookie set on a
  // prior client visit) — otherwise default to `expanded`, the
  // desktop-first assumption.
  const isSmallViewport = useMediaQuery(
    `(max-width: ${drawerBreakpoint - 0.02}px)`,
  );
  const isCollapsedViewport = useMediaQuery(
    `(min-width: ${drawerBreakpoint}px) and (max-width: ${expandedBreakpoint - 0.02}px)`,
  );
  const isLargeViewport = useMediaQuery(`(min-width: ${expandedBreakpoint}px)`);

  if (mode !== 'auto') {
    return mode;
  }

  if (isSmallViewport) {
    return 'drawer';
  }

  if (isCollapsedViewport) {
    return 'collapsed';
  }

  if (isLargeViewport) {
    return 'expanded';
  }

  return initialMode ?? 'expanded';
};
