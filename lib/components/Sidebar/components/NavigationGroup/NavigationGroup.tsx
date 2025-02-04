import { FC } from 'react';

import { cn } from '@/utils';

import { NavigationTitle } from '../NavigationTitle/NavigationTitle';

import { NavigationGroupProps } from './NavigationGroup.types';
import { navigationGroupsVariants } from './NavigationGroup.variants';
import { useTheme } from '@/contexts';

export const NavigationGroup: FC<NavigationGroupProps> = ({
  children,
  title,
  className,
  theme,
  titleClassName,
  isVisible = true,
  ...delegated
}) => {
  const { theme: contextTheme } = useTheme();

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {title ? (
        <NavigationTitle
          title={title}
          className={titleClassName}
          {...delegated}
        />
      ) : null}

      <ul
        className={cn(
          navigationGroupsVariants({ theme: theme ?? contextTheme, className }),
        )}
      >
        {children}
      </ul>
    </>
  );
};
