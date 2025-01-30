import { FC } from 'react';

import { useTheme } from '../../../../contexts';
import { cn } from '../../../../utils';

import { NavigationProps } from './Navigation.types';
import { navigationVariants } from './Navigation.variants';

export const Navigation: FC<NavigationProps> = ({
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
