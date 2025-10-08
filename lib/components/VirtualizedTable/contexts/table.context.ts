import { ColumnSort, SortingState, Table } from '@tanstack/react-table';
import { createContext, Dispatch, SetStateAction } from 'react';

import { RowData } from '../VirtualizedTable.types';

export type ContextType<TData extends RowData = RowData> = {
  sortedData: ColumnSort[];
  table: Table<TData>;
  tableFetching?: boolean;
  tableLoading?: boolean;
  totalItems?: number;
  onSorting: Dispatch<SetStateAction<SortingState>>;
};

export const TableContext = createContext<ContextType<RowData>>({
  sortedData: [],
  table: {} as Table<RowData>,
  tableFetching: false,
  tableLoading: false,
  totalItems: 0,
  onSorting() {
    throw new Error('onSorting function is not implemented');
  },
});
