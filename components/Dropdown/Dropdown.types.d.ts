import { ReactNode } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { dropdownVariants } from './Dropdown.variants';
export type Option = {
    label: string | ReactNode;
    leftIcon?: ReactNode | string;
    value: string;
};
export interface DropdownProps extends VariantProps<typeof dropdownVariants> {
    defaultValue?: string;
    label?: string;
    name?: string;
    options: Option[];
    placeholder?: string;
}