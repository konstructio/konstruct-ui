import { ComponentRef, RefObject } from '../../../../node_modules/react';
type UseNavigationListProps = {
    ulRef: RefObject<ComponentRef<'ul'> | null>;
    wrapperRef: RefObject<ComponentRef<'div'> | null>;
    wrapperInputRef: RefObject<ComponentRef<'div'> | null>;
};
export declare const useNavigationUlList: ({ ulRef, wrapperRef, wrapperInputRef, }: UseNavigationListProps) => void;
export {};
