import { ColumnSort, SortingState, Table } from '@tanstack/react-table';
import { createContext, Dispatch, SetStateAction } from 'react';

import { RowData } from '../VirtualizedTable.types';

export type ContextType<TData extends RowData = RowData> = {
  sortedData: ColumnSort[];
  table: Table<TData>;
  tableFetching?: boolean;
  tableLoading?: boolean;
  totalItems?: number;
  termOfSearch?: string;
  page: number;
  multiselectSelected?: Record<string, string[]>;
  onSorting: Dispatch<SetStateAction<SortingState>>;
  onChangeTermOfSearch: (term: string) => void;
  onSelectMultiselect: (key: string, selectedValues: string[]) => void;
};

export const TableContext = createContext<ContextType<RowData>>({
  sortedData: [],
  table: {} as Table<RowData>,
  tableFetching: false,
  tableLoading: false,
  totalItems: 0,
  termOfSearch: '',
  page: 0,
  onSorting() {
    throw new Error('onSorting function is not implemented');
  },
  onChangeTermOfSearch() {
    throw new Error('onChangeTermOfSearch function is not implemented');
  },
  onSelectMultiselect() {
    throw new Error('onSelectMultiselect function is not implemented');
  },
});
