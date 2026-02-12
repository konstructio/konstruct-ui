import { SliderProps as SliderPropsBase } from '@radix-ui/react-slider';
import { VariantProps } from 'class-variance-authority';
import { Theme } from '../../domain/theme';
import { rangeVariants } from './Range.variants';
/**
 * Props for the Range component.
 * A dual-thumb slider for selecting a value range.
 *
 * @example
 * ```tsx
 * <Range
 *   label="Price Range"
 *   min={0}
 *   max={1000}
 *   defaultValue={[100, 500]}
 *   showValue
 *   size="md"
 * />
 * ```
 */
export interface RangeProps extends VariantProps<typeof rangeVariants> {
    /** Additional CSS classes */
    className?: string;
    /** Initial range values [min, max] */
    defaultValue?: SliderPropsBase['defaultValue'];
    /** Label displayed above the range slider */
    label?: string;
    /** Additional CSS classes for the label wrapper */
    labelWrapperClassName?: string;
    /** Maximum value for the range */
    max?: SliderPropsBase['max'];
    /** Minimum value for the range */
    min?: SliderPropsBase['min'];
    /** Form field name for the hidden input */
    name?: string;
    /** Whether to display the current range values */
    showValue?: boolean;
    /** Size of the slider track and thumbs */
    size?: 'sm' | 'md' | 'lg';
    /** Theme override for this component */
    theme?: Theme;
}
