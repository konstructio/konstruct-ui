import type { StepperIcons, StepSize, StepStatus } from '../../Stepper.types';

export type Props = {
  /** Additional CSS class for the content */
  className?: string;
  /** Custom icons for step statuses */
  icons?: StepperIcons;
  /** Step index (0-based) */
  index: number;
  /** Size of the indicator */
  size: StepSize;
  /** Status of the step */
  status: StepStatus;
};
