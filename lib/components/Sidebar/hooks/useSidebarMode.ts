import { useMediaQuery } from '@/hooks';

import { SidebarMode } from '../contexts/SidebarContext';

export type SidebarModeProp = SidebarMode | 'auto';

export const useSidebarMode = (mode: SidebarModeProp = 'auto'): SidebarMode => {
  const isLargeViewport = useMediaQuery('(min-width: 1024px)');
  const isSmallViewport = useMediaQuery('(max-width: 639.98px)');

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
