import { VariantProps } from 'class-variance-authority';
import { FC, PropsWithChildren } from '../../../../node_modules/react';
import { Theme } from '../../../domain/theme';
import { SidebarModeProp } from './hooks/useSidebarMode';
import { wrapperSiderbarVariants } from './Sidebar.variants';
import { FooterProps, LabelProps, LogoProps, NavigationGroupProps, NavigationOptionProps, NavigationProps, NavigationSeparatorProps } from './components';
/**
 * Props for the Sidebar component.
 * A compound component for building application sidebars with navigation.
 *
 * @example
 * ```tsx
 * <Sidebar canResize minWith={200} maxWith={400}>
 *   <Sidebar.Logo>
 *     <img src="/logo.svg" alt="Logo" />
 *   </Sidebar.Logo>
 *   <Sidebar.Navigation>
 *     <Sidebar.NavigationGroup label="Main">
 *       <Sidebar.NavigationOption href="/dashboard" icon={<Home />}>
 *         Dashboard
 *       </Sidebar.NavigationOption>
 *       <Sidebar.NavigationOption href="/settings" icon={<Settings />}>
 *         Settings
 *       </Sidebar.NavigationOption>
 *     </Sidebar.NavigationGroup>
 *   </Sidebar.Navigation>
 *   <Sidebar.Footer>v1.0.0</Sidebar.Footer>
 * </Sidebar>
 * ```
 */
export interface Props extends Omit<VariantProps<typeof wrapperSiderbarVariants>, 'mode'>, PropsWithChildren {
    /** Whether the sidebar can be resized by dragging (only in expanded mode) */
    canResize?: boolean;
    /** Additional CSS classes for the divider */
    dividerClassName?: string;
    /**
     * Viewport width in pixels below which the sidebar switches to `drawer` mode in `auto` mode (defaults to 640).
     */
    drawerBreakpoint?: number;
    /**
     * Maximum width in pixels for the drawer panel in `drawer` mode (defaults to 280).
     * The drawer width is `min(viewport, drawerMaxWidth)`, so on viewports narrower than
     * the cap it shrinks to fit instead of overflowing.
     */
    drawerMaxWidth?: number;
    /**
     * Viewport width in pixels at or above which the sidebar switches to `expanded` mode in `auto` mode (defaults to 1024).
     */
    expandedBreakpoint?: number;
    /**
     * When true, animates the hover-expand width transition with `motion`. Only takes effect
     * together with `expandOnHover`. Defaults to `true`.
     */
    animateOnHover?: boolean;
    /**
     * When true and the sidebar is in `collapsed` mode, hovering a navigation option
     * expands only that option (animated width) to reveal its label. The expanded
     * option overlays content to its right and does not push siblings. Defaults to `true`.
     */
    expandOnHover?: boolean;
    /** Initial width in pixels when entering expanded mode (defaults to 256, clamped to [minWith, maxWith]) */
    initialWidth?: number;
    /** Maximum width when resizing in pixels (defaults to 300) */
    maxWith?: number;
    /** Minimum width when resizing in pixels (defaults to 240) */
    minWith?: number;
    /** Additional CSS classes for the auto-injected separator between groups in collapsed mode */
    separatorClassName?: string;
    /** Additional CSS classes for the hamburger trigger button rendered in drawer mode */
    triggerClassName?: string;
    /**
     * Controls the responsive mode of the sidebar.
     * - `auto` (default): derives the mode from the viewport width
     *   (`>=1024px` expanded, `640-1023px` collapsed, `<640px` drawer).
     * - `expanded`, `collapsed`, `drawer`: force a specific mode
     *   (useful for testing, stories, or manual control).
     */
    mode?: SidebarModeProp;
    /** Theme override for this component */
    theme?: Theme;
    /** Additional CSS classes for the wrapper */
    wrapperClassName?: string;
}
/** @deprecated Use Props instead */
export type SidebarProps = Props;
/**
 * Sidebar compound component type with sub-components.
 */
export type SidebarChildrenProps = {
    Footer: FC<FooterProps>;
    Label: FC<LabelProps>;
    Logo: FC<LogoProps>;
    Navigation: FC<NavigationProps>;
    NavigationGroup: FC<NavigationGroupProps>;
    NavigationOption: FC<NavigationOptionProps>;
    NavigationSeparator: FC<NavigationSeparatorProps>;
};
