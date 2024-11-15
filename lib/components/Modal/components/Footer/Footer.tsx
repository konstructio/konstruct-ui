import { FC } from 'react';

import { FooterProps } from './Footer.types';
import { Slot } from '@radix-ui/react-slot';

export const Footer: FC<FooterProps> = ({ children, asChild, className }) => {
  const Component = asChild ? Slot : 'div';

  return <Component className={className}>{children}</Component>;
};
