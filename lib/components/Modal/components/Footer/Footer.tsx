import { Slot } from '@radix-ui/react-slot';
import { FC } from 'react';

import { cn } from '../../../../utils';

import { FooterProps } from './Footer.types';

export const Footer: FC<FooterProps> = ({ children, asChild, className }) => {
  const Component = asChild ? Slot : 'div';

  return <Component className={cn(className)}>{children}</Component>;
};
