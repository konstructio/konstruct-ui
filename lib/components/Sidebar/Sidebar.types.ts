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

export interface SidebarProps
  extends VariantProps<typeof wrapperSiderbarVariants>, PropsWithChildren {
  canResize?: boolean;
  dividerClassName?: string;
  maxWith?: number;
  minWith?: number;
  theme?: Theme;
  wrapperClassName?: string;
}

export type SidebarChildrenProps = {
  Footer: FC<FooterProps>;
  Logo: FC<LogoProps>;
  Navigation: FC<NavigationProps>;
  NavigationGroup: FC<NavigationGroupProps>;
  NavigationOption: FC<NavigationOptionProps>;
  NavigationSeparator: FC<NavigationSeparatorProps>;
};
