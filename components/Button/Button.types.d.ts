import { VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, Ref } from '../../../node_modules/react';
import { Theme } from '../../domain/theme';
import { buttonVariants } from './Button.variants';
/**
 * Props for the Button component.
 *
 * @example
 * ```tsx
 * <Button variant="primary">Click me</Button>
 * <Button variant="secondary" disabled>Disabled</Button>
 * <Button variant="danger" shape="circle"><TrashIcon /></Button>
 * ```
 */
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>, VariantProps<typeof buttonVariants> {
    /** Ref to the underlying button element */
    ref?: Ref<HTMLButtonElement>;
    /** Merge props onto child element instead of rendering a button */
    asChild?: boolean;
    /** Whether the button is disabled */
    disabled?: boolean;
    /** Theme override for this component */
    theme?: Theme;
}
