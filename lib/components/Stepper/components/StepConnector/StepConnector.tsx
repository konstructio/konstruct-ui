import { memo, type FC } from 'react';

import { cn } from '@/utils';

import { stepConnectorVariants } from '../../Stepper.variants';

import type { Props } from './StepConnector.types';

const StepConnectorBase: FC<Props> = ({
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

export const StepConnector = memo(StepConnectorBase);
