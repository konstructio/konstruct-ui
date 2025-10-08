import { useQuery } from '@tanstack/react-query';
import {
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  Table,
  useReactTable,
} from '@tanstack/react-table';
import { PropsWithChildren, useState } from 'react';

import { RowData } from '../VirtualizedTable.types';

import { TableContext } from './table.context';

type Props<TData extends RowData = RowData> = PropsWithChildren & {
  data: TData[];
  columns: ColumnDef<TData, string>[];
};

export const TableProvider = <TData extends RowData = RowData>({
  children,
  data: defaultData = [],
  columns = [],
}: Props<TData>) => {
  const [sortedData, setSortedData] = useState<SortingState>([]);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['accounts'],
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    initialData: defaultData,
  });

  const table = useReactTable<TData>({
    data,
    columns,
    state: {
      sorting: sortedData,
    },
    onSortingChange: setSortedData,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <TableContext.Provider
      value={{
        sortedData,
        table: table as unknown as Table<RowData>,
        tableFetching: isFetching,
        tableLoading: isLoading,
        onSorting: setSortedData,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};
