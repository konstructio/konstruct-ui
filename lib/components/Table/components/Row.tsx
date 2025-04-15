import { FC } from 'react';

import { cn } from '@/utils';

import { RowProps } from '../Table.types';
import { rowVariants } from '../Table.variants';

export const Row: FC<RowProps> = ({
  children,
  className,
  width,
  isSelected,
  onSelect,
  ...delegated
}) => (
  <tr
    style={{ width: width }}
    onClick={onSelect}
    className={cn(
      rowVariants({
        className,
        isSelected,
      }),
    )}
    {...delegated}
  >
    {children}
  </tr>
);
