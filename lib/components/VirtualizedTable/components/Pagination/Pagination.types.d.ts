export type Props = {
    showTotalItems?: boolean;
    showDropdownPagination?: boolean;
    showDotPagination?: boolean;
    showFormPagination?: boolean;
    pageSizes?: number[] | string[];
    classNamePagination?: string;
    isLoading?: boolean;
    isListPortal?: boolean;
    dropdownPaginationDirection?: 'auto' | 'up' | 'down';
};
