import { createContext, useContext } from 'react';

export type SidebarMode = 'expanded' | 'collapsed' | 'drawer';

export interface SidebarContextValue {
  mode: SidebarMode;
  isCollapsed: boolean;
}

export const SidebarContext = createContext<SidebarContextValue>({
  mode: 'expanded',
  isCollapsed: false,
});

export const useSidebarContext = (): SidebarContextValue => {
  return useContext(SidebarContext);
};
