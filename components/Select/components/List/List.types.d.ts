import { ComponentRef, RefObject } from '../../../../../node_modules/react';
import { SelectProps } from '../../Select.types';
export type ListProps = Pick<SelectProps, 'name' | 'options' | 'theme' | 'additionalOptions'> & {
    className?: string;
    inputRef?: RefObject<ComponentRef<'input'> | null>;
    isLoading: boolean;
    itemClassName?: string;
    searchable?: boolean;
    listItemSecondRowClassName?: string;
    wrapperInputRef: RefObject<ComponentRef<'div'> | null>;
    isInfiniteScrollEnabled: SelectProps['isInfiniteScrollEnabled'];
    onFetchMoreOptions?: SelectProps['onFetchMoreOptions'];
    noOptionsText?: SelectProps['noOptionsText'];
};
