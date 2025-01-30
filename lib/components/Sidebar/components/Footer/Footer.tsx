import { FC } from 'react';

import { useTheme } from '../../../../contexts';
import { cn } from '../../../../utils';

import { FooterProps } from './Footer.types';
import { footerVariants } from './Footer.variants';

export const Footer: FC<FooterProps> = ({ theme, className, children }) => {
  const { theme: contextTheme } = useTheme();

  return (
    <footer
      className={cn(
        footerVariants({ theme: theme ?? contextTheme, className }),
      )}
    >
      {children}
    </footer>
  );
};
