import { useQuery } from '@tanstack/react-query';
import {
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  Table,
  useReactTable,
} from '@tanstack/react-table';
import { PropsWithChildren, useCallback, useState } from 'react';

import { RowData } from '../VirtualizedTable.types';

import { TableContext } from './table.context';

type Props<TData extends RowData = RowData> = PropsWithChildren & {
  id: string;
  data: TData[];
  columns: ColumnDef<TData, string>[];
};

export const TableProvider = <TData extends RowData = RowData>({
  children,
  id,
  data: defaultData = [],
  columns = [],
}: Props<TData>) => {
  const [sortedData, setSortedData] = useState<SortingState>([]);
  const [page, setPage] = useState(0);
  const [termOfSearch, setTermOfSearch] = useState<string>();
  const [multiselectSelected, setMultiselectSelected] = useState<
    Record<string, string[]>
  >({});

  const { data, isLoading, isFetching } = useQuery({
    queryKey: [id, termOfSearch],
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    initialData: defaultData,
  });

  const onChangeTermOfSearch = useCallback((term: string) => {
    setTermOfSearch(term);
    setPage(0);
  }, []);

  const onSelectMultiselect = useCallback((key: string, selected: string[]) => {
    const newKey = key.toLowerCase().replace(/\s+/g, '_');

    setMultiselectSelected((prev) => ({
      ...prev,
      [newKey]: selected,
    }));
  }, []);

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
        totalItems: 300,
        termOfSearch,
        page,
        multiselectSelected,
        onChangeTermOfSearch,
        onSorting: setSortedData,
        onSelectMultiselect,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};
