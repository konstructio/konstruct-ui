import { ChangeEvent, ComponentRef, RefObject } from '../../../../node_modules/react';
import { Option } from '../Autocomplete.types';
type UseAutocompleteProps = {
    options: Option[];
    inputRef: RefObject<ComponentRef<'input'> | null>;
    wrapperRef: RefObject<ComponentRef<'div'> | null>;
    onChange(value: string): void;
};
export declare const useAutocomplete: ({ options, inputRef, wrapperRef, onChange, }: UseAutocompleteProps) => {
    inputRef: RefObject<HTMLInputElement | null>;
    newOptions: Option[];
    showOptions: boolean;
    value: string;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleSelectValue: (value: string) => void;
};
export {};
