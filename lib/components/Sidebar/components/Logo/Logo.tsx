import { FC } from 'react';

import { cn } from '@/utils';

import { Props } from './Logo.types';
import { logoVariants } from './Logo.variants';

const Logo: FC<Props> = ({ children, className }) => (
  <header className={cn(logoVariants({ className }))}>{children}</header>
);

Logo.displayName = 'KonstructSidebarLogo';

export { Logo };
