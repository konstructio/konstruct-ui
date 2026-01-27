import type { VariantProps } from 'class-variance-authority';

import type { Theme } from '@/domain/theme';

import type {
  stepIndicatorVariants,
  stepperVariants,
} from './Stepper.variants';

export type StepStatus = 'completed' | 'active' | 'pending' | 'error';

export type StepSize = 'small' | 'default' | 'large';

export type Step = {
  /** Optional description for the step */
  description?: string;
  /** Unique identifier for the step */
  id: string | number;
  /** Label displayed for the step */
  label: string;
  /** Status of the step */
  status?: StepStatus;
};

export type StepperClassNames = {
  /** Class for the connector line */
  connector?: string;
  /** Class for the step content wrapper (contains label + description) */
  content?: string;
  /** Class for the step description */
  description?: string;
  /** Class for the step indicator circle */
  indicator?: string;
  /** Class for each li item element */
  item?: string;
  /** Class for the step label */
  label?: string;
  /** Class for the ol list element */
  list?: string;
  /** Class for the root nav element */
  root?: string;
  /** Class for the step wrapper (contains indicator + content) */
  stepWrapper?: string;
};

export type StepperProps = VariantProps<typeof stepperVariants> & {
  /** Additional CSS classes for the wrapper */
  className?: string;
  /** Custom class names for each element */
  classNames?: StepperClassNames;
  /** Whether steps are clickable */
  clickable?: boolean;
  /** Index of the current active step (0-based). When provided, step statuses are auto-calculated. */
  currentStep?: number;
  /** Show connector lines between steps */
  showConnector?: boolean;
  /** Size of the step indicators */
  size?: StepSize;
  /** Array of steps to display */
  steps: Step[];
  /** Theme override for this component */
  theme?: Theme;
  /** Callback when a step is clicked */
  onStepClick?: (step: Step, index: number) => void;
};

export type StepItemProps = VariantProps<typeof stepIndicatorVariants> & {
  /** Custom class names */
  classNames?: StepperClassNames;
  /** Whether the step is clickable */
  clickable: boolean;
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
  /** Callback when step is clicked */
  onClick?: () => void;
};

export type StepIndicatorContentProps = {
  /** Step index (0-based) */
  index: number;
  /** Status of the step */
  status: StepStatus;
};

export type StepConnectorProps = {
  /** Additional CSS class */
  className?: string;
  /** Orientation of the connector */
  orientation: 'vertical' | 'horizontal';
  /** Size of the connector */
  size: StepSize;
  /** Status of the step */
  status: StepStatus;
};
