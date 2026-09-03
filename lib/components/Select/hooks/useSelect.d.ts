import { ComponentRef, RefObject } from '../../../../node_modules/react';
import { SelectProps, Option } from '../Select.types';
type UseSelectParams = {
    inputRef?: RefObject<ComponentRef<'input'> | null>;
    searchInputRef?: RefObject<ComponentRef<'input'> | null>;
    internalValue?: Option;
    listRef?: RefObject<HTMLElement | null>;
    onBlur?: SelectProps['onBlur'];
};
export declare const useSelect: ({ inputRef, searchInputRef, internalValue, listRef, onBlur, }: UseSelectParams) => {
    isInside: (node: Node | null) => boolean;
    wrapperRef: RefObject<HTMLDivElement | null>;
    wrapperInputRef: RefObject<HTMLDivElement | null>;
    handleOpen: () => void;
};
export {};
