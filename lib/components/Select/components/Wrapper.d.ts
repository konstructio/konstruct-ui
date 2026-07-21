import { ComponentRef, ForwardRefExoticComponent, RefAttributes } from '../../../../node_modules/react';
import { SelectProps } from '../Select.types';
export declare const Wrapper: ForwardRefExoticComponent<Omit<SelectProps, 'options'> & {
    groupedOptions: SelectProps['options'];
} & RefAttributes<ComponentRef<'input'>>>;
