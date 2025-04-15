import { FC } from 'react';

import { cn } from '@/utils';

import { BodyProps } from '../Table.types';
import { bodyVariants } from '../Table.variants';

export const Body: FC<BodyProps> = ({ children, className, ...delegated }) => (
  <tbody
    className={cn(
      bodyVariants({
        className,
      }),
    )}
    {...delegated}
  >
    {children}
  </tbody>
);
