import { TagProps } from '../../Tag/Tag.types';
export declare const useTagSelect: () => {
    isOpen: boolean;
    selectedTag: TagProps | null;
    value: string;
    wrapperRef: import('../../../../node_modules/react').RefObject<HTMLDivElement | null>;
    handleClickTag: (tag: TagProps) => void;
    handleOpenDropdown: () => void;
};
