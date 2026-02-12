import { VariantProps } from 'class-variance-authority';

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
export interface CounterProps extends VariantProps<typeof counterVariants> {
  /** Allow decrement button to be clicked */
  canDecrement?: boolean;
  /** Allow increment button to be clicked */
  canIncrement?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** CSS classes for decrement button */
  decrementButtonClassName?: string;
  /** CSS classes for increment button */
  incrementButtonClassName?: string;
  /** Initial value (deprecated, use value) */
  init?: number;
  /** Show required indicator */
  isRequired?: boolean;
  /** Label displayed above the counter */
  label?: string;
  /** Additional CSS classes for the label wrapper */
  labelWrapperClassName?: string;
  /** Maximum allowed value */
  max?: number;
  /** Minimum allowed value */
  min?: number;
  /** Form field name */
  name?: string;
  /** Theme override for this component */
  theme?: Theme;
  /** Current numeric value */
  value?: number;
  /** Callback when value changes */
  onChange?: ({ target: { value } }: { target: { value: number } }) => void;
}
