import type { VariantProps } from 'class-variance-authority';

import type { Theme } from '@/domain/theme';

import type {
  Step,
  StepperClassNames,
  StepperIcons,
  StepSize,
  StepStatus,
  StepVariant,
} from '../../Stepper.types';
import type { stepIndicatorVariants } from '../../Stepper.variants';

export type Props = VariantProps<typeof stepIndicatorVariants> & {
  /** Custom class names */
  classNames?: StepperClassNames;
  /** Whether the step is clickable */
  clickable: boolean;
  /** Custom icons for step statuses */
  icons?: StepperIcons;
  /** Step index (0-based) */
  index: number;
  /** Whether this is the last step */
  isLast: boolean;
  /** Status of the next step (for connector coloring) */
  nextStepStatus?: StepStatus;
  /** Orientation of the stepper */
  orientation: 'vertical' | 'horizontal';
  /** Show connector lines */
  showConnector: boolean;
  /** Size of the step indicator */
  size: StepSize;
  /** Step data */
  step: Step;
  /** Theme override */
  theme?: Theme;
  /** Layout variant */
  variant: StepVariant;
  /** Callback when step is clicked */
  onClick?: () => void;
};
