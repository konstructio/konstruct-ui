import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes, ReactNode } from '../../../node_modules/react';
import { Theme } from '../../domain/theme';
import { inputVariants } from './Input.variants';
/**
 * Props for the Input component.
 *
 * @example
 * ```tsx
 * <Input label="Email" placeholder="Enter email" />
 * <Input label="Password" type="password" isRequired />
 * <Input error="Invalid email" helperText="We'll never share your email" />
 * ```
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
    /** Error message to display below the input */
    error?: string;
    /** Helper text displayed below the input when no error */
    helperText?: string;
    /** Additional CSS classes for the helper text */
    helperTextClassName?: string;
    /** Show required indicator (*) next to label */
    isRequired?: boolean;
    /** Show search icon inside the input */
    isSearch?: boolean;
    /** Label text or element displayed above the input */
    label?: string | ReactNode;
    /** Custom element rendered on the right side of the label (e.g. icon, button) */
    labelAction?: ReactNode;
    /** Additional CSS classes for the label */
    labelClassName?: string;
    /** Additional CSS classes for the label wrapper container */
    labelWrapperClassName?: string;
    /** Theme override for this component */
    theme?: Theme;
}
