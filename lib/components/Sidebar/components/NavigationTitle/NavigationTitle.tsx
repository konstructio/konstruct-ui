import { FC } from 'react';

import { cn } from '@/utils';

import { NavigationTitleProps } from './NavigationTitle.types';
import { navigationTitleVariants } from './NavigationTitle.variants';

const NavigationTitle: FC<NavigationTitleProps> = ({
  title,
  className,
  isVisible = true,
}) => {
  if (!isVisible) {
    return null;
  }

  return (
    <h2 className={cn(navigationTitleVariants({ className }))}>{title}</h2>
  );
};

NavigationTitle.displayName = 'KonstructSidebarNavigationTitle';

export { NavigationTitle };
