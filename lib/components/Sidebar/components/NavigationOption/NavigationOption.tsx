import { FC } from 'react';

import { cn } from '@/utils';

import { NavigationOptionProps } from './NavigationOption.types';
import { navigationOptionVariants } from './NavigationOption.variants';

export const NavigationOption: FC<NavigationOptionProps> = ({
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
