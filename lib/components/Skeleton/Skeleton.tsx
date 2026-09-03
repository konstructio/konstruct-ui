import { FC } from 'react';

import { cn } from '@/utils';

import { Props } from './Skeleton.types';
import { skeletonVariants } from './Skeleton.variants';

/**
 * Pulsing placeholder blocks shown while content loads.
 *
 * @example
 * ```tsx
 * <Skeleton shape="text" count={3} label="Loading activity" />
 * <Skeleton shape="circle" />
 * <Skeleton className="h-8 w-40" />
 * ```
 */
const Skeleton: FC<Props> = ({
  className,
  count = 1,
  label = 'Loading',
  shape,
  theme,
  wrapperClassName,
}) => (
  <div
    role="status"
    aria-label={label}
    aria-busy="true"
    data-theme={theme}
    className={cn('flex w-full flex-col gap-2', wrapperClassName)}
  >
    {Array.from({ length: count }, (_, index) => (
      <span
        key={index}
        aria-hidden="true"
        className={cn(skeletonVariants({ shape }), className)}
      />
    ))}
  </div>
);

Skeleton.displayName = 'KonstructSkeleton';

export { Skeleton };
