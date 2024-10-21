import { VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes } from '../../../node_modules/react';
import { buttonVariants } from './Button.variants';
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    disabled?: boolean;
}
