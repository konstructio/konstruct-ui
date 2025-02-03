import { FC } from 'react';

import { ThemeProvider } from '@/contexts';

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
  <ThemeProvider>
    <Wrapper {...props} />
  </ThemeProvider>
);

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
