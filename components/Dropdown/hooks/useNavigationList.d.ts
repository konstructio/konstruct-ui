import { RefObject } from '../../../../node_modules/react';
type UseNavigationListProps = {
    ulRef: RefObject<HTMLUListElement>;
    wrapperRef: RefObject<HTMLDivElement>;
    wrapperInputRef: RefObject<HTMLDivElement>;
};
export declare const useNavigationUlList: ({ ulRef, wrapperRef, wrapperInputRef, }: UseNavigationListProps) => void;
export {};
