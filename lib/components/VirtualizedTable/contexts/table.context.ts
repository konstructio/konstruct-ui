import { ColumnSort, SortingState, Table } from '@tanstack/react-table';
import { createContext, Dispatch, SetStateAction } from 'react';

import { RowData } from '../VirtualizedTable.types';
import { DEFAULT_PAGE_SIZE } from '../constants';

export type ContextType<TData extends RowData = RowData> = {
  sortedData: ColumnSort[];
  table: Table<TData>;
  pageSize: number;
  tableFetching?: boolean;
  tableLoading?: boolean;
  totalItems?: number;
  termOfSearch?: string;
  page: number;
  multiselectSelected?: Record<string, string[]>;
  totalPages: number;
  isFirstLoad: boolean;
  enableExpandedRow?: boolean;
  classNameExpandedRow?: string;
  classNameExpandedCell?: string;
  handlePage: (newPage: number) => void;
  onPageSize: (newPageSize: number) => void;
  onSorting: Dispatch<SetStateAction<SortingState>>;
  onChangeTermOfSearch: (term: string) => void;
  onSelectMultiselect: (key: string, selectedValues: string[]) => void;
};

export const TableContext = createContext<ContextType<RowData>>({
  sortedData: [],
  table: {} as Table<RowData>,
  tableFetching: false,
  tableLoading: false,
  totalItems: -Infinity,
  termOfSearch: '',
  page: 0,
  pageSize: DEFAULT_PAGE_SIZE,
  totalPages: Infinity,
  isFirstLoad: true,
  onSorting() {
    throw new Error('onSorting function is not implemented');
  },
  onChangeTermOfSearch() {
    throw new Error('onChangeTermOfSearch function is not implemented');
  },
  onSelectMultiselect() {
    throw new Error('onSelectMultiselect function is not implemented');
  },
  handlePage() {
    throw new Error('handlePage function is not implemented');
  },
  onPageSize() {
    throw new Error('onPageSize function is not implemented');
  },
});
