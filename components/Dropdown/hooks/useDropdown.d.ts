import { ComponentRef, RefObject } from '../../../../node_modules/react';
type UseDropDownParams = {
    ulRef: RefObject<ComponentRef<'ul'> | null>;
};
export declare const useDropdown: ({ ulRef }: UseDropDownParams) => {
    wrapperRef: RefObject<HTMLDivElement | null>;
    wrapperInputRef: RefObject<HTMLDivElement | null>;
    handleOpen: () => void;
    handleOpenIfClosed: () => void;
};
export {};
