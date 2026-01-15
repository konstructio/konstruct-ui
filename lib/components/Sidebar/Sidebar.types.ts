import { VariantProps } from 'class-variance-authority';
import { FC, PropsWithChildren } from 'react';

import { Theme } from '@/domain/theme';

import { wrapperSiderbarVariants } from './Sidebar.variants';
import {
  FooterProps,
  LogoProps,
  NavigationGroupProps,
  NavigationOptionProps,
  NavigationProps,
  NavigationSeparatorProps,
} from './components';

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
export interface SidebarProps
  extends VariantProps<typeof wrapperSiderbarVariants>, PropsWithChildren {
  /** Whether the sidebar can be resized by dragging */
  canResize?: boolean;
  /** Additional CSS classes for the divider */
  dividerClassName?: string;
  /** Maximum width when resizing (in pixels) */
  maxWith?: number;
  /** Minimum width when resizing (in pixels) */
  minWith?: number;
  /** Theme override for this component */
  theme?: Theme;
  /** Additional CSS classes for the wrapper */
  wrapperClassName?: string;
}

/**
 * Sidebar compound component type with sub-components.
 */
export type SidebarChildrenProps = {
  Footer: FC<FooterProps>;
  Logo: FC<LogoProps>;
  Navigation: FC<NavigationProps>;
  NavigationGroup: FC<NavigationGroupProps>;
  NavigationOption: FC<NavigationOptionProps>;
  NavigationSeparator: FC<NavigationSeparatorProps>;
};
