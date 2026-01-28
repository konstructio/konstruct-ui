import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes, ReactNode } from '../../../node_modules/react';
import { Theme } from '../../domain/theme';
import { radioVariants } from './Radio.variants';
/**
 * Props for the Radio component.
 *
 * @example
 * ```tsx
 * <Radio
 *   name="plan"
 *   value="basic"
 *   label="Basic Plan"
 *   checked={selected === 'basic'}
 *   onChange={(value) => setSelected(value)}
 * />
 * ```
 */
export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'disabled'>, VariantProps<typeof radioVariants> {
    /** Whether the radio is checked */
    checked?: boolean;
    /** Initial checked state (uncontrolled) */
    defaultChecked?: boolean;
    /** Whether the radio is disabled */
    disabled?: boolean;
    /** Label text or element */
    label?: string | ReactNode;
    /** CSS classes for the label text */
    labelTextClassName?: string;
    /** Form field name (groups radios together) */
    name: string;
    /** Description text below the label */
    description?: string | ReactNode;
    /** CSS classes for the description */
    descriptionClassName?: string;
    /** Value submitted when selected */
    value: string;
    /** CSS classes for the wrapper */
    wrapperClassName?: string;
    /** Theme override for this component */
    theme?: Theme;
    /** Callback when selected */
    onChange?: (value: string) => void;
}
