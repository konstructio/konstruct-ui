import type { FC } from 'react';

import { cn } from '@/utils';

import { stepConnectorVariants } from '../../Stepper.variants';

import type { Props } from './StepConnector.types';

export const StepConnector: FC<Props> = ({
  className,
  orientation,
  size,
  status,
  variant,
}) => (
  <div
    className={cn(
      stepConnectorVariants({
        orientation,
        size,
        status,
        variant,
      }),
      className,
    )}
    role="presentation"
    aria-hidden="true"
  />
);
