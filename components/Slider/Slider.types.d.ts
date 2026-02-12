import { SliderProps as SliderPropsBase } from '@radix-ui/react-slider';
import { VariantProps } from 'class-variance-authority';
import { Theme } from '../../domain/theme';
import { sliderVariants } from './Slider.variants';
/**
 * Props for the Slider component.
 * A single-thumb slider for selecting a single value.
 *
 * @example
 * ```tsx
 * <Slider
 *   label="Volume"
 *   min={0}
 *   max={100}
 *   defaultValue={[50]}
 *   showValue
 *   size="md"
 * />
 * ```
 */
export interface SliderProps extends VariantProps<typeof sliderVariants> {
    /** Additional CSS classes */
    className?: string;
    /** Initial value as single-element array */
    defaultValue?: SliderPropsBase['defaultValue'];
    /** Label displayed above the slider */
    label?: string;
    /** Additional CSS classes for the label wrapper */
    labelWrapperClassName?: string;
    /** Maximum value for the slider */
    max?: SliderPropsBase['max'];
    /** Minimum value for the slider */
    min?: SliderPropsBase['min'];
    /** Form field name for the hidden input */
    name?: string;
    /** Whether to display the current value */
    showValue?: boolean;
    /** Size of the slider track and thumb */
    size?: 'sm' | 'md' | 'lg';
    /** Theme override for this component */
    theme?: Theme;
}
