import { ComponentRef, RefObject } from '../../../../node_modules/react';
import { SelectProps, Option } from '../Select.types';
type UseSelectParams = {
    ulRef: RefObject<ComponentRef<'ul'> | null>;
    inputRef?: RefObject<ComponentRef<'input'> | null>;
    disabled: boolean;
    internalValue?: Option;
    onBlur?: SelectProps['onBlur'];
};
export declare const useSelect: ({ ulRef, inputRef, disabled, internalValue, onBlur, }: UseSelectParams) => {
    wrapperRef: RefObject<HTMLDivElement | null>;
    wrapperInputRef: RefObject<HTMLDivElement | null>;
    handleOpen: () => void;
};
export {};
