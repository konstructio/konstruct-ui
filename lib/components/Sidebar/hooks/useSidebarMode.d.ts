import { SidebarMode } from '../contexts/SidebarContext';
export type SidebarModeProp = SidebarMode | 'auto';
export declare const DEFAULT_EXPANDED_BREAKPOINT = 1024;
export declare const DEFAULT_DRAWER_BREAKPOINT = 640;
export declare const useSidebarMode: (mode?: SidebarModeProp, expandedBreakpoint?: number, drawerBreakpoint?: number) => SidebarMode;
