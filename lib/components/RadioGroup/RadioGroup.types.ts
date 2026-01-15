import { ReactNode } from 'react';

import { Theme } from '@/domain/theme';

import { RadioProps } from '../Radio/Radio.types';

/**
 * Props for the RadioGroup component.
 *
 * @example
 * ```tsx
 * <RadioGroup
 *   name="plan"
 *   options={[
 *     { value: 'basic', label: 'Basic' },
 *     { value: 'pro', label: 'Pro' },
 *     { value: 'enterprise', label: 'Enterprise' },
 *   ]}
 *   defaultChecked="basic"
 *   onValueChange={(value) => setPlan(value)}
 * />
 * ```
 */
export interface RadioGroupProps {
  /** Merge props onto child element */
  asChild?: boolean;
  /** CSS classes for each radio option */
  className?: RadioProps['className'];
  /** Initially selected value */
  defaultChecked?: string;
  /** Layout direction (row or col) */
  direction?: 'row' | 'col';
  /** Label for the group */
  label?: string | ReactNode;
  /** Form field name (shared by all radios) */
  name: string;
  /** Array of radio options */
  options: Omit<RadioProps, 'name' | 'checked' | 'defaultChecked'>[];
  /** Theme override for this component */
  theme?: Theme;
  /** CSS classes for the wrapper */
  wrapperClassName?: string;
  /** Callback when selection changes */
  onValueChange?: (value: string) => void;
}
