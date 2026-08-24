import { ComponentRef, ForwardRefExoticComponent, RefAttributes } from '../../../../node_modules/react';
import { SelectProps } from '../Select.types';
export declare const Wrapper: ForwardRefExoticComponent<Omit<SelectProps, 'options'> & {
    groupedOptions: SelectProps['options'];
    fieldId: string;
    describedBy?: string;
} & RefAttributes<ComponentRef<'input'>>>;
