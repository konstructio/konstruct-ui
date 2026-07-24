import { FC } from 'react';

import { cn } from '@/utils';

import { useSidebarContext } from '../../contexts';

import { Props } from './Logo.types';
import { logoVariants } from './Logo.variants';

const Logo: FC<Props> = ({ children, className, showOnCollapse = false }) => {
  const { closeDrawer } = useSidebarContext();

  return (
    <header
      data-konstruct-sidebar-logo=""
      data-hide-on-collapse={showOnCollapse ? undefined : ''}
      className={cn(logoVariants({ showOnCollapse, className }))}
      onClick={() => closeDrawer()}
    >
      {children}
    </header>
  );
};

Logo.displayName = 'KonstructSidebarLogo';

export { Logo };
