import { CellContext } from '@tanstack/react-table';
import { RowData } from '../../VirtualizedTable.types';
export type Props<TData extends RowData> = CellContext<TData, string> & {
    value?: string;
};
