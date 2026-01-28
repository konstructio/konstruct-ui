import type { ReactNode } from 'react';

import type { VariantProps } from 'class-variance-authority';

import type { Theme } from '@/domain/theme';

import type { stepperVariants } from './Stepper.variants';

export type StepStatus = 'completed' | 'active' | 'pending' | 'error';

export type StepSize = 'sm' | 'md' | 'lg';

export type StepVariant = 'inline' | 'stacked' | 'horizontal';

export type Step = {
  /** Optional description for the step */
  description?: string;
  /** Whether this step is disabled (not clickable) */
  disabled?: boolean;
  /** Unique identifier for the step */
  id: string | number;
  /** Label displayed for the step (can be a string or ReactNode) */
  label?: ReactNode;
  /** Callback when this specific step is clicked */
  onClick?: () => void;
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
  /** Class for the content inside the indicator (number, icon) */
  indicatorContent?: string;
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

export type StepperIcons = {
  /** Custom icon for completed status */
  completed?: ReactNode;
  /** Custom icon for error status */
  error?: ReactNode;
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
  /** Custom icons for step statuses */
  icons?: StepperIcons;
  /** Show connector lines between steps */
  showConnector?: boolean;
  /** Size of the step indicators */
  size?: StepSize;
  /** Array of steps to display */
  steps: Step[];
  /** Theme override for this component */
  theme?: Theme;
  /** Layout variant: 'inline' (text beside indicator) or 'stacked' (text below indicator) */
  variant?: StepVariant;
  /** Callback when a step is clicked */
  onStepClick?: (step: Step, index: number) => void;
};
