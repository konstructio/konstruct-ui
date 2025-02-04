import { FC } from 'react';

import { useTheme } from '@/contexts';
import { cn } from '@/utils';

import { NavigationOptionProps } from './NavigationOption.types';
import { navigationOptionVariants } from './NavigationOption.variants';

export const NavigationOption: FC<NavigationOptionProps> = ({
  children,
  className,
  theme,
  isVisible = true,
  isActive,
  ...delegated
}) => {
  const { theme: contextTheme } = useTheme();

  if (!isVisible) {
    return null;
  }

  return (
    <li
      {...delegated}
      role="option"
      className={cn(
        navigationOptionVariants({
          theme: theme ?? contextTheme,
          className,
          isActive,
        }),
      )}
    >
      {children}
    </li>
  );
};
