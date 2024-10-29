import { ElementRef, RefObject } from '../../../../node_modules/react';
type UseDropDownParams = {
    ulRef: RefObject<ElementRef<'ul'>>;
};
export declare const useDropdown: ({ ulRef }: UseDropDownParams) => {
    wrapperRef: RefObject<HTMLDivElement>;
    wrapperInputRef: RefObject<HTMLDivElement>;
    handleOpen: () => void;
    handleOpenIfClosed: () => void;
};
export {};
