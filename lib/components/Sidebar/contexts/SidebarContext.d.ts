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
export declare const SidebarContext: import('../../../../../node_modules/react').Context<SidebarContextValue>;
export declare const useSidebarContext: () => SidebarContextValue;
