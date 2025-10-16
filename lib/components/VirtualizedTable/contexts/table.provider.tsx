import { useQuery } from '@tanstack/react-query';
import {
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  Table,
  useReactTable,
} from '@tanstack/react-table';
import { PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { RowData } from '../VirtualizedTable.types';
import { DEFAULT_PAGE_SIZE } from '../constants';

import { TableContext } from './table.context';

type Props<TData extends RowData = RowData> = PropsWithChildren & {
  id: string;
  data: TData[];
  columns: ColumnDef<TData, string>[];
  totalItems: number;
  fetchData: (
    params: Record<string, string | number | string[] | number[] | undefined>,
  ) => Promise<{ data: TData[]; totalItemsCount?: number }>;
};

export const TableProvider = <TData extends RowData = RowData>({
  children,
  id,
  data: defaultData = [],
  columns = [],
  totalItems,
  fetchData,
}: Props<TData>) => {
  const [sortedData, setSortedData] = useState<SortingState>([]);
  const [page, setPage] = useState(0);
  const [termOfSearch, setTermOfSearch] = useState<string>();
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [totalItemsCount, setTotalItemsCount] = useState(totalItems);
  const totalPages = useMemo(
    () => Math.ceil(totalItemsCount / pageSize),
    [totalItemsCount, pageSize],
  );
  const [multiselectSelected, setMultiselectSelected] = useState<
    Record<string, string[]>
  >({});

  const { data, isLoading, isFetching } = useQuery({
    queryKey: [
      id,
      page,
      pageSize,
      termOfSearch,
      JSON.stringify(multiselectSelected),
    ],
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    initialData: defaultData,
    queryFn: () =>
      fetchData({
        page: Math.max(page + 1, 1),
        pageSize,
        termOfSearch,
        ...(Object.keys(multiselectSelected).length > 0
          ? multiselectSelected
          : {}),
      }).then(({ data, totalItemsCount }) => {
        if (totalItemsCount) {
          setTotalItemsCount(totalItemsCount);
        }

        return data;
      }),
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

  const handlePage = useCallback((newPage: number) => setPage(newPage), []);
  const onPageSize = useCallback(
    (newPageSize: number) => setPageSize(newPageSize),
    [],
  );

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
        totalItems: totalItemsCount,
        termOfSearch,
        page,
        multiselectSelected,
        pageSize,
        totalPages,
        handlePage,
        onPageSize,
        onChangeTermOfSearch,
        onSorting: setSortedData,
        onSelectMultiselect,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};
