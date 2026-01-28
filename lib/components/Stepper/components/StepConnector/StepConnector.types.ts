import type { StepSize, StepStatus, StepVariant } from '../../Stepper.types';

export type Props = {
  /** Additional CSS class */
  className?: string;
  /** Orientation of the connector */
  orientation: 'vertical' | 'horizontal';
  /** Size of the connector */
  size: StepSize;
  /** Status of the step */
  status: StepStatus;
  /** Layout variant */
  variant: StepVariant;
};
