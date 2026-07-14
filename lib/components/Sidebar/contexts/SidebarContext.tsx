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
  /**
   * Whether the sidebar can be toggled between `expanded` and `collapsed`.
   * `false` in `drawer` mode, where the drawer's own open/close controls
   * apply instead.
   */
  canToggle: boolean;
  /**
   * Toggles the sidebar between `expanded` and `collapsed`, overriding the
   * viewport-derived mode until the viewport crosses a breakpoint. No-op in
   * `drawer` mode.
   */
  toggleMode: () => void;
}

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
