import { ColumnDef, ExpandedState, OnChangeFn } from '@tanstack/react-table';
import { PropsWithChildren, ReactNode } from 'react';

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
  classNameActiveExpandedRow?: string;
  enableHoverRow?: boolean;
  classNameHoverRow?: string;
  onExpandedChange?: OnChangeFn<ExpandedState>;
  renderExpandedRow?: (data: TData) => ReactNode;
  keepExpandColumnVisible?: boolean | Record<string, boolean>;
  getRowId?: (originalRow: TData, index: number) => string;
  fetchData?: (
    params: Record<string, string | number | string[] | number[] | undefined>,
  ) => Promise<{ data: TData[]; totalItemsCount?: number }>;
};
