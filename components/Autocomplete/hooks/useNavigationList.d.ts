import { ComponentRef, RefObject } from '../../../../node_modules/react';
import { Option } from '../Autocomplete.types';
type UseNavigationListProps = {
    ulRef: RefObject<ComponentRef<'ul'> | null>;
    inputRef: RefObject<ComponentRef<'input'> | null>;
    wrapperRef: RefObject<ComponentRef<'div'> | null>;
    options: Option[];
};
export declare const useNavigationUlList: ({ ulRef, inputRef, wrapperRef, options, }: UseNavigationListProps) => void;
export {};
