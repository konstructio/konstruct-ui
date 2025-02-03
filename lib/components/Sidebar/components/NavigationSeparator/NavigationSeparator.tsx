import { FC } from 'react';

import { useTheme } from '@/contexts';
import { cn } from '@/utils';

import { NavigationSeparatorProps } from './NavigationSeparator.types';
import { navigationSeparatorVariant } from './NavigationSeparator.variants';

export const NavigationSeparator: FC<NavigationSeparatorProps> = ({
  className,
  theme,
}) => {
  const { theme: contextTheme } = useTheme();

  return (
    <div
      className={cn(
        navigationSeparatorVariant({ className, theme: theme ?? contextTheme }),
      )}
    />
  );
};
