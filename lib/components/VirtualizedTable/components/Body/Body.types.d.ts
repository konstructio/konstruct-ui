import { ReactNode } from '../../../../../../node_modules/react';
import { RowData } from '../../VirtualizedTable.types';
export type BodyProps<_TData extends RowData = RowData> = {
    isLoading?: boolean;
    showPagination?: boolean;
    emptyState?: ReactNode;
};
