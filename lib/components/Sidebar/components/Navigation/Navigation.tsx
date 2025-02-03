import { FC } from 'react';

import { useTheme } from '@/contexts';
import { cn } from '@/utils';

import { NavigationGroup } from '../NavigationGroup/NavigationGroup';
import { NavigationOption } from '../NavigationOption/NavigationOption';
import { NavigationSeparator } from '../NavigationSeparator/NavigationSeparator';
import { NavigationTitle } from '../NavigationTitle/NavigationTitle';

import { NavigationChildrenProps, NavigationProps } from './Navigation.types';
import { navigationVariants } from './Navigation.variants';

const Navigation: FC<NavigationProps> & NavigationChildrenProps = ({
  className,
  theme,
  children,
}) => {
  const { theme: contextTheme } = useTheme();

  return (
    <nav
      className={cn(
        navigationVariants({ theme: theme ?? contextTheme, className }),
      )}
    >
      {children}
    </nav>
  );
};

Navigation.NavigationGroup = NavigationGroup;
Navigation.NavigationOption = NavigationOption;
Navigation.NavigationSeparator = NavigationSeparator;
Navigation.NavigationTitle = NavigationTitle;

export { Navigation };
