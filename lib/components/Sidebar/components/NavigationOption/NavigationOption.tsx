import { FC } from 'react';

import { cn } from '@/utils';

import { Props } from './NavigationOption.types';
import { navigationOptionVariants } from './NavigationOption.variants';

const NavigationOption: FC<Props> = ({
  children,
  className,
  isVisible = true,
  isActive,
  ...delegated
}) => {
  if (!isVisible) {
    return null;
  }

  return (
    <li
      {...delegated}
      role="option"
      className={cn(
        navigationOptionVariants({
          className,
          isActive,
        }),
      )}
    >
      {children}
    </li>
  );
};

NavigationOption.displayName = 'KonstructSidebarNavigationOption';

export { NavigationOption };
