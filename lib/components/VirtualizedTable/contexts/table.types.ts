import { ColumnDef, ExpandedState, OnChangeFn } from '@tanstack/react-table';
import { PropsWithChildren } from 'react';

import { RowData, Props as TableProps } from '../VirtualizedTable.types';

export type Props<TData extends RowData = RowData> = PropsWithChildren & {
  id: string | string[] | number | number[];
  data: TData[];
  columns: ColumnDef<TData, string>[];
  totalItems: number;
  queryOptions?: TableProps<TData>['queryOptions'];
  isPaginationEnabled?: boolean;
  enableExpandedRow?: boolean;
  expandedState?: ExpandedState;
  defaultExpanded?: ExpandedState;
  classNameExpandedRow?: string;
  classNameExpandedCell?: string;
  classNameExpandedContent?: string;
  classNameExpandedHeader?: string;
  onExpandedChange?: OnChangeFn<ExpandedState>;
  fetchData?: (
    params: Record<string, string | number | string[] | number[] | undefined>,
  ) => Promise<{ data: TData[]; totalItemsCount?: number }>;
};
