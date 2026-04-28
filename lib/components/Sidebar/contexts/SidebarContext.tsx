import { createContext, useContext } from 'react';

export type SidebarMode = 'expanded' | 'collapsed' | 'drawer';

export interface SidebarContextValue {
  mode: SidebarMode;
  isCollapsed: boolean;
  expandOnHover: boolean;
  animateOnHover: boolean;
  separatorClassName?: string;
  /**
   * Closes the drawer when the Sidebar is in `drawer` mode. No-op in
   * `expanded` or `collapsed` modes. Useful for closing the drawer on
   * navigation events (e.g. when the user clicks a link).
   */
  closeDrawer: () => void;
}

export const SidebarContext = createContext<SidebarContextValue>({
  mode: 'expanded',
  isCollapsed: false,
  expandOnHover: false,
  animateOnHover: true,
  closeDrawer: () => {},
});

export const useSidebarContext = (): SidebarContextValue => {
  return useContext(SidebarContext);
};
