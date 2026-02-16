import { Slot } from '@radix-ui/react-slot';
import { FC } from 'react';

import { cn } from '../../../../utils';

import { Props } from './Header.types';

export const Header: FC<Props> = ({ children, asChild, className }) => {
  const Component = asChild ? Slot : 'div';

  return (
    <Component
      className={cn('border-zinc-200 dark:border-metal-700', className)}
    >
      {children}
    </Component>
  );
};
