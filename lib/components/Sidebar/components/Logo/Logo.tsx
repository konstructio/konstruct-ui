import { FC } from 'react';

import { cn } from '@/utils';

import { useSidebarContext } from '../../contexts';

import { Props } from './Logo.types';
import { logoVariants } from './Logo.variants';

const Logo: FC<Props> = ({ children, className }) => {
  const { closeDrawer } = useSidebarContext();

  return (
    <header
      className={cn(logoVariants({ className }))}
      onClick={() => closeDrawer()}
    >
      {children}
    </header>
  );
};

Logo.displayName = 'KonstructSidebarLogo';

export { Logo };
