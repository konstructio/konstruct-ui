import { FC } from 'react';

import { cn } from '@/utils';

import { Props } from './CalendarDivider.types';

export const CalendarDivider: FC<Props> = ({ className }) => (
  <div
    className={cn(
      'absolute',
      'left-0',
      'right-0',
      'top-14',
      'h-px',
      'bg-slate-200',
      'dark:bg-metal-700',
      className,
    )}
    aria-hidden="true"
  />
);

CalendarDivider.displayName = 'CalendarDivider';
