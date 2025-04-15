import { FC } from 'react';

import { cn } from '@/utils';

import { HeadProps } from '../Table.types';
import { headVariants } from '../Table.variants';

export const Head: FC<HeadProps> = ({ children, className, ...delegated }) => (
  <thead
    className={cn(
      headVariants({
        className,
      }),
    )}
    {...delegated}
  >
    {children}
  </thead>
);
