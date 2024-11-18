import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes } from '../../../node_modules/react';
import { radioVariants } from './Radio.variants';
export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>, VariantProps<typeof radioVariants> {
    checked?: boolean;
    color?: string;
    defaultChecked?: boolean;
    label?: string;
    name: string;
    value: string;
    onChange?: (value: string) => void;
}
