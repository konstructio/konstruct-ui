import { FC } from 'react';

import { cn } from '@/utils';

import { LogoProps } from './Logo.types';
import { logoVariants } from './Logo.variants';

export const Logo: FC<LogoProps> = ({ children, className }) => (
  <header className={cn(logoVariants({ className }))}>{children}</header>
);
