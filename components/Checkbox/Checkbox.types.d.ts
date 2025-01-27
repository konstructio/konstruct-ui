import { InputHTMLAttributes } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { checkboxVariants } from './Checkbox.variants';
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'checked'>, VariantProps<typeof checkboxVariants> {
    ariaLabelledBy?: string;
    className?: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    id?: string;
    label?: string;
    labelClassName?: string;
    name?: string;
    onChange?: () => void;
}
