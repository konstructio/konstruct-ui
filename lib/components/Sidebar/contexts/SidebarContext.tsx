import { createContext, useContext } from 'react';

export type SidebarMode = 'expanded' | 'collapsed' | 'drawer';

export interface SidebarContextValue {
  mode: SidebarMode;
  isCollapsed: boolean;
  expandOnHover: boolean;
  animateOnHover: boolean;
}

export const SidebarContext = createContext<SidebarContextValue>({
  mode: 'expanded',
  isCollapsed: false,
  expandOnHover: false,
  animateOnHover: true,
});

export const useSidebarContext = (): SidebarContextValue => {
  return useContext(SidebarContext);
};
