'use client';
import { FC } from 'react';

import {
  Footer,
  Logo,
  Navigation,
  NavigationGroup,
  NavigationOption,
  NavigationSeparator,
  Wrapper,
} from './components';
import { SidebarChildrenProps, SidebarProps } from './Sidebar.types';

/**
 * A compound component for building application sidebars.
 * Includes sub-components for logo, navigation, groups, options, and footer.
 *
 * @example
 * ```tsx
 * <Sidebar canResize minWith={200} maxWith={400} theme="dark">
 *   <Sidebar.Logo>
 *     <img src="/logo.svg" alt="Logo" />
 *   </Sidebar.Logo>
 *   <Sidebar.Navigation>
 *     <Sidebar.NavigationGroup label="Menu">
 *       <Sidebar.NavigationOption href="/" icon={<Home />}>
 *         Home
 *       </Sidebar.NavigationOption>
 *     </Sidebar.NavigationGroup>
 *   </Sidebar.Navigation>
 *   <Sidebar.Footer>Version 1.0</Sidebar.Footer>
 * </Sidebar>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-sidebar--docs Storybook}
 */
const Sidebar: FC<SidebarProps> & SidebarChildrenProps = (props) => (
  <Wrapper {...props} />
);

Sidebar.displayName = 'KonstructSidebar';

Sidebar.Footer = Footer;
Sidebar.Logo = Logo;
Sidebar.Navigation = Navigation;
Sidebar.NavigationGroup = NavigationGroup;
Sidebar.NavigationOption = NavigationOption;
Sidebar.NavigationSeparator = NavigationSeparator;

export {
  Footer,
  Logo,
  Navigation,
  NavigationGroup,
  NavigationOption,
  NavigationSeparator,
  Sidebar,
};
