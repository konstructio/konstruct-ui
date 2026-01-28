import { ComponentRef, RefObject } from '../../../../../node_modules/react';
import { Option } from '../../Select.types';
export type ListItemProps = Option & {
    isEmpty?: boolean;
    className?: string;
    listItemSecondRowClassName?: string;
    isClickable: boolean;
    inputRef?: RefObject<ComponentRef<'input'> | null>;
};
