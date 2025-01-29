import { Slot } from '@radix-ui/react-slot';
import { FC } from 'react';

import { cn } from '../../../../utils';

import { HeaderProps } from './Header.types';

export const Header: FC<HeaderProps> = ({ children, asChild, className }) => {
  const Component = asChild ? Slot : 'div';

  return <Component className={cn(className)}>{children}</Component>;
};
