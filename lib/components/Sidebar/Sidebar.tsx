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
