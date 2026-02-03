import { ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';

import { Theme } from '@/domain/theme';

import { buttonGroupVariants } from './ButtonGroup.variants';

/**
 * Configuration for a single button option in the ButtonGroup.
 */
export type ButtonGroupOption = {
  /** Optional description displayed below the label */
  description?: string;
  /** Whether this specific option is disabled */
  disabled?: boolean;
  /** Optional icon to display before the label */
  icon?: ReactNode;
  /** The label text displayed for this option */
  label: string;
  /** The value associated with this option */
  value: string;
};

/**
 * Props for the ButtonGroup component.
 *
 * @example
 * ```tsx
 * // Simple button group
 * <ButtonGroup
 *   name="processor"
 *   options={[
 *     { value: 'cpu', label: 'CPU' },
 *     { value: 'gpu', label: 'GPU' },
 *   ]}
 *   defaultValue="cpu"
 *   onValueChange={(value) => setProcessor(value)}
 * />
 *
 * // With descriptions
 * <ButtonGroup
 *   name="instance-type"
 *   options={[
 *     { value: 'standard', label: 'Standard', description: 'Balanced compute resources' },
 *     { value: 'spot', label: 'Spot', description: 'Cost-effective for flexible workloads' },
 *   ]}
 *   onValueChange={setInstanceType}
 * />
 * ```
 */
export type Props = VariantProps<typeof buttonGroupVariants> & {
  /** CSS classes for the button group container */
  className?: string;
  /** CSS classes for the content wrapper inside each item */
  contentClassName?: string;
  /** Initially selected value (uncontrolled mode) */
  defaultValue?: string;
  /** CSS classes for description text */
  descriptionClassName?: string;
  /** Animation duration in seconds (default: 0.3) */
  duration?: number;
  /** Error message to display */
  error?: string;
  /** CSS classes for error message */
  errorClassName?: string;
  /** Helper text displayed below the button group */
  helperText?: string;
  /** CSS classes for helper text */
  helperTextClassName?: string;
  /** Whether the field is required */
  isRequired?: boolean;
  /** CSS classes for individual button items */
  itemClassName?: string;
  /** CSS classes for the label text inside items */
  itemLabelClassName?: string;
  /** Label displayed above the button group */
  label?: string | ReactNode;
  /** CSS classes for the label */
  labelClassName?: string;
  /** Form field name (required for form submission) */
  name: string;
  /** Array of button options */
  options: ButtonGroupOption[];
  /** CSS classes for the animated pill */
  pillClassName?: string;
  /** CSS classes for the required asterisk */
  requiredClassName?: string;
  /** Theme override for this component */
  theme?: Theme;
  /** Currently selected value (controlled mode) */
  value?: string;
  /** CSS classes for the outer wrapper */
  wrapperClassName?: string;
  /** Callback when selection changes */
  onValueChange?: (value: string) => void;
};
