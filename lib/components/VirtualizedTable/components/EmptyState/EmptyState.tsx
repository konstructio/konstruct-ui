import { FC } from 'react';

import { Typography } from '@/components/Typography/Typography';
import { cn } from '@/utils';

import { Props } from './EmptyState.types';

export const EmptyState: FC<Props> = ({
  action,
  className,
  description,
  image,
  title,
}) => (
  <div
    className={cn(
      'flex flex-col items-center gap-4 px-4 py-20 text-center',
      className,
    )}
  >
    {image && <div className="flex items-center justify-center">{image}</div>}

    <Typography
      variant="subtitle3"
      component="h2"
      className="text-slate-800 dark:text-metal-50"
    >
      {title}
    </Typography>

    {description && (
      <Typography
        variant="body2"
        component="p"
        className="flex flex-wrap items-center justify-center gap-1 text-slate-500 dark:text-metal-300"
      >
        {description}
      </Typography>
    )}

    {action && <div className="pt-2">{action}</div>}
  </div>
);

EmptyState.displayName = 'KonstructVirtualizedTableEmptyState';
