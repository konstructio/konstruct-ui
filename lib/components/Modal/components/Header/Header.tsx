import { FC } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { HeaderProps } from './Header.types';

export const Header: FC<HeaderProps> = ({ children, asChild, className }) => {
  const Component = asChild ? Slot : 'div';

  return <Component className={className}>{children}</Component>;
};
