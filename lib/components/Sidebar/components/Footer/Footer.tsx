import { FC } from 'react';

import { cn } from '@/utils';

import { Props } from './Footer.types';
import { footerVariants } from './Footer.variants';

const Footer: FC<Props> = ({ className, children }) => (
  <footer className={cn(footerVariants({ className }))}>{children}</footer>
);

Footer.displayName = 'KonstructSidebarFooter';

export { Footer };
