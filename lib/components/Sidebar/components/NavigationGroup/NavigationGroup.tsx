import { FC } from 'react';

import { cn } from '@/utils';

import { NavigationTitle } from '../NavigationTitle/NavigationTitle';

import { NavigationGroupProps } from './NavigationGroup.types';
import { navigationGroupsVariants } from './NavigationGroup.variants';

const NavigationGroup: FC<NavigationGroupProps> = ({
  children,
  title,
  className,
  titleClassName,
  isVisible = true,
  ...delegated
}) => {
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

      <ul className={cn(navigationGroupsVariants({ className }))}>
        {children}
      </ul>
    </>
  );
};

NavigationGroup.displayName = 'KonstructSidebarNavigationGroup';

export { NavigationGroup };
