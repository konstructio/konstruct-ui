export type SidebarMode = 'expanded' | 'collapsed' | 'drawer';
export interface SidebarContextValue {
    mode: SidebarMode;
    isCollapsed: boolean;
    expandOnHover: boolean;
    animateOnHover: boolean;
    separatorClassName?: string;
}
export declare const SidebarContext: import('../../../../../node_modules/react').Context<SidebarContextValue>;
export declare const useSidebarContext: () => SidebarContextValue;
