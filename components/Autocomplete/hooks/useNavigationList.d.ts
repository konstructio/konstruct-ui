import { RefObject } from '../../../../node_modules/react';
import { Option } from '../Autocomplete.types';
type UseNavigationListProps = {
    ulRef: RefObject<HTMLUListElement>;
    inputRef: RefObject<HTMLInputElement>;
    wrapperRef: RefObject<HTMLDivElement>;
    options: Option[];
};
export declare const useNavigationUlList: ({ ulRef, inputRef, wrapperRef, options, }: UseNavigationListProps) => void;
export {};
