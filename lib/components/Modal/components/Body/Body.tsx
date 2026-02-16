import { FC } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '../../../../utils';

import { Props } from './Body.types';

export const Body: FC<Props> = ({ children, asChild, className }) => {
  const Component = asChild ? Slot : 'div';

  return <Component className={cn('flex-1', className)}>{children}</Component>;
};
