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
  extends VariantProps<typeof wrapperSiderbarVariants>,
    PropsWithChildren {
  wrapperClassName?: string;
  minWith?: number;
  maxWith?: number;
  canResize?: boolean;
  theme?: Theme;
}

export type SidebarChildrenProps = {
  Footer: FC<FooterProps>;
  Logo: FC<LogoProps>;
  Navigation: FC<NavigationProps>;
  NavigationGroup: FC<NavigationGroupProps>;
  NavigationOption: FC<NavigationOptionProps>;
  NavigationSeparator: FC<NavigationSeparatorProps>;
};
