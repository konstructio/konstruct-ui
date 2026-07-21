import { ComponentRef, RefObject } from '../../../../node_modules/react';
import { Option } from '../Select.types';
type UseNavigationListProps = {
    inputRef?: RefObject<ComponentRef<'input'> | null>;
    searchable?: boolean;
    ulRef: RefObject<ComponentRef<'ul'> | null>;
    wrapperInputRef: RefObject<ComponentRef<'div'> | null>;
    filteredOptions: Option[];
};
export declare const useNavigationUlList: ({ searchable, ulRef, wrapperInputRef, filteredOptions, }: UseNavigationListProps) => void;
export {};
