import { FC } from 'react';

import { cn } from '@/utils';

import { FooterProps } from './Footer.types';
import { footerVariants } from './Footer.variants';

export const Footer: FC<FooterProps> = ({ className, children }) => (
  <footer className={cn(footerVariants({ className }))}>{children}</footer>
);
