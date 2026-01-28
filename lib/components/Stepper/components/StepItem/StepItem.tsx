import type { FC } from 'react';

import { HorizontalStepItem } from '../HorizontalStepItem/HorizontalStepItem';
import { VerticalStepItem } from '../VerticalStepItem/VerticalStepItem';

import type { Props } from './StepItem.types';

export const StepItem: FC<Props> = (props) => {
  // Horizontal variant always uses horizontal layout
  if (props.orientation === 'horizontal' || props.variant === 'horizontal') {
    return <HorizontalStepItem {...props} />;
  }

  return <VerticalStepItem {...props} />;
};
