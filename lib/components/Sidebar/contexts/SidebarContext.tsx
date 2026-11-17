import { createContext, useContext } from 'react';

import type { SidebarContextValue } from './SidebarContext.types';

export type { SidebarContextValue, SidebarMode } from './SidebarContext.types';

export const SidebarContext = createContext<SidebarContextValue>({
  mode: 'expanded',
  isCollapsed: false,
  expandOnHover: false,
  animateOnHover: true,
  closeDrawer: () => {},
  canToggle: false,
  toggleMode: () => {},
});

export const useSidebarContext = (): SidebarContextValue => {
  return useContext(SidebarContext);
};
