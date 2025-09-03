import { FC } from 'react';

import { cn } from '@/utils';

import { NavigationGroup } from '../NavigationGroup/NavigationGroup';
import { NavigationOption } from '../NavigationOption/NavigationOption';
import { NavigationSeparator } from '../NavigationSeparator/NavigationSeparator';
import { NavigationTitle } from '../NavigationTitle/NavigationTitle';

import { NavigationChildrenProps, NavigationProps } from './Navigation.types';
import { navigationVariants } from './Navigation.variants';

const Navigation: FC<NavigationProps> & NavigationChildrenProps = ({
  className,
  children,
}) => <nav className={cn(navigationVariants({ className }))}>{children}</nav>;

Navigation.displayName = 'KonstructSidebarNavigation';

Navigation.NavigationGroup = NavigationGroup;
Navigation.NavigationOption = NavigationOption;
Navigation.NavigationSeparator = NavigationSeparator;
Navigation.NavigationTitle = NavigationTitle;

export { Navigation };
