import { FC, PropsWithChildren } from '../../../../node_modules/react';
import { SelectProps, Option } from '../Select.types';
export declare const SelectProvider: FC<PropsWithChildren & {
    highlightSearch?: boolean;
    name?: string;
    value?: string;
    options: Option[];
    onChange?: SelectProps['onChange'];
    onBlur?: SelectProps['onBlur'];
}>;
