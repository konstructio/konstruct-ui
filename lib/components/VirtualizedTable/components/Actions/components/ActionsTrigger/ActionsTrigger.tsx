import { EllipsisVertical } from 'lucide-react';
import { forwardRef } from 'react';

import { Button } from '@/components/Button/Button';
import { cn } from '@/utils';

import { actionsTriggerVariants } from '../../Actions.variants';

import { Props } from './ActionsTrigger.types';

export const ActionsTrigger = forwardRef<HTMLButtonElement, Props>(
  ({ className, iconClassName, isOpen = false, ...delegated }, ref) => (
    <Button
      ref={ref}
      type="button"
      variant="link"
      shape="circle"
      size="large"
      className={cn(
        actionsTriggerVariants({ isOpen }),
        'pointer-coarse:min-h-11 pointer-coarse:min-w-11',
        className,
      )}
      {...delegated}
    >
      <EllipsisVertical
        aria-hidden="true"
        className={cn('w-7 h-7', iconClassName)}
      />
      <span className="sr-only">Show Actions</span>
    </Button>
  ),
);

ActionsTrigger.displayName = 'KonstructVirtualizedTableActionsTrigger';
