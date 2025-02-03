import { FC } from 'react';

import { useTheme } from '@/contexts';
import { cn } from '@/utils';

import { LogoProps } from './Logo.types';
import { logoVariants } from './Logo.variants';

export const Logo: FC<LogoProps> = ({ children, theme, className }) => {
  const { theme: contextTheme } = useTheme();

  return (
    <header
      className={cn(logoVariants({ theme: theme ?? contextTheme, className }))}
    >
      {children}
    </header>
  );
};
