import { VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

import { Theme } from '@/domain/theme';

import { counterVariants } from './Counter.variants';

/**
 * Props for the Counter (NumberInput) component.
 *
 * @example
 * ```tsx
 * <Counter
 *   label="Quantity"
 *   value={quantity}
 *   min={1}
 *   max={10}
 *   onChange={({ target }) => setQuantity(target.value)}
 * />
 * ```
 */
export interface Props extends VariantProps<typeof counterVariants> {
  /** Allow decrement button to be clicked */
  canDecrement?: boolean;
  /** Allow increment button to be clicked */
  canIncrement?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** CSS classes for decrement button */
  decrementButtonClassName?: string;
  /** Accessible label of the decrement button */
  decrementLabel?: string;
  /** Disable the whole control */
  disabled?: boolean;
  /** Allow typing values directly into the input. Defaults to false (read-only) */
  editable?: boolean;
  /** Error message displayed below the control */
  error?: string;
  /** Additional CSS classes for the error message */
  errorClassName?: string;
  /** Stretch the control to the width of its container */
  fullWidth?: boolean;
  /** Helper text displayed below the control when there is no error */
  helperText?: string;
  /** Additional CSS classes for the helper text */
  helperTextClassName?: string;
  /** CSS classes for increment button */
  incrementButtonClassName?: string;
  /** Accessible label of the increment button */
  incrementLabel?: string;
  /** Initial value (deprecated, use value) */
  init?: number;
  /** Show required indicator */
  isRequired?: boolean;
  /** Label displayed above the counter */
  label?: string;
  /** Content displayed at the right end of the label row */
  labelAction?: ReactNode;
  /** Additional CSS classes for the label wrapper */
  labelWrapperClassName?: string;
  /** Maximum allowed value */
  max?: number;
  /** Minimum allowed value */
  min?: number;
  /** Form field name */
  name?: string;
  /** Amount added or subtracted by the buttons. Defaults to 1 */
  step?: number;
  /** Theme override for this component */
  theme?: Theme;
  /** Unit displayed inside the field, after the value */
  unit?: ReactNode;
  /** Current numeric value */
  value?: number;
  /** Callback when value changes */
  onChange?: ({ target: { value } }: { target: { value: number } }) => void;
}

/** @deprecated Use Props instead */
export type CounterProps = Props;
