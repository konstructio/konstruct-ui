import { FC } from 'react';

import { NavigationTitleProps } from './NavigationTitle.types';
import { useTheme } from '@/contexts';
import { cn } from '@/utils';
import { navigationTitleVariants } from './NavigationTitle.variants';

export const NavigationTitle: FC<NavigationTitleProps> = ({
  title,
  className,
  theme,
  isVisible = true,
}) => {
  const { theme: contextTheme } = useTheme();

  if (!isVisible) {
    return null;
  }

  return (
    <h2
      className={cn(
        navigationTitleVariants({ theme: theme ?? contextTheme, className }),
      )}
    >
      {title}
    </h2>
  );
};
