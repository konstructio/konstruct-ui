import { useQuery } from '@tanstack/react-query';
import {
  ColumnDef,
  ExpandedState,
  getCoreRowModel,
  getSortedRowModel,
  OnChangeFn,
  SortingState,
  Table,
  useReactTable,
} from '@tanstack/react-table';
import { ChevronRight } from 'lucide-react';
import { PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { cn } from '@/utils';

import {
  RowData,
  RowDataWithMeta,
  Props as TableProps,
} from '../VirtualizedTable.types';
import { DEFAULT_PAGE_SIZE } from '../constants';

import { TableContext } from './table.context';

type Props<TData extends RowData = RowData> = PropsWithChildren & {
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
  onExpandedChange?: OnChangeFn<ExpandedState>;
  fetchData?: (
    params: Record<string, string | number | string[] | number[] | undefined>,
  ) => Promise<{ data: TData[]; totalItemsCount?: number }>;
};

export const TableProvider = <TData extends RowData = RowData>({
  children,
  classNameExpandedCell,
  classNameExpandedRow,
  columns = [],
  data: defaultData = [],
  defaultExpanded,
  enableExpandedRow,
  expandedState,
  id,
  isPaginationEnabled,
  queryOptions = {},
  totalItems,
  fetchData,
  onExpandedChange,
}: Props<TData>) => {
  const [sortedData, setSortedData] = useState<SortingState>([]);
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);
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

  const getQueryKey = () => {
    const queryKey =
      typeof id === 'string' || typeof id === 'number' ? [id] : id;

    if (isPaginationEnabled) {
      queryKey.push(page, pageSize);
    }

    if (termOfSearch) {
      queryKey.push(termOfSearch);
    }

    Object.entries(multiselectSelected).forEach(([key, value]) => {
      queryKey.push(`${key}:${value.join(',')}`);
    });

    return queryKey;
  };

  const { data, isLoading, isFetching } = useQuery<TData[]>({
    queryKey: getQueryKey(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    initialData: defaultData,
    queryFn: async () => {
      if (fetchData) {
        return fetchData({
          page: Math.max(page + 1, 1),
          pageSize,
          termOfSearch,
          ...(Object.keys(multiselectSelected).length > 0
            ? multiselectSelected
            : {}),
        }).then(({ data, totalItemsCount }) => {
          setIsFirstLoad(false);

          if (totalItemsCount) {
            setTotalItemsCount(totalItemsCount);
          }

          return data;
        });
      }

      return defaultData ?? [];
    },

    ...queryOptions,
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

  // Expanded row state management
  const [internalExpanded, setInternalExpanded] = useState<ExpandedState>(
    defaultExpanded ?? {},
  );
  const isExpandedControlled = expandedState !== undefined;
  const currentExpanded = isExpandedControlled
    ? expandedState
    : internalExpanded;

  const handleExpandedChange: OnChangeFn<ExpandedState> = useCallback(
    (updater) => {
      const newValue =
        typeof updater === 'function' ? updater(currentExpanded) : updater;
      if (!isExpandedControlled) setInternalExpanded(newValue);
      onExpandedChange?.(updater);
    },
    [currentExpanded, isExpandedControlled, onExpandedChange],
  );

  // Auto-inject chevron column when expandable rows are enabled
  const expandColumn: ColumnDef<TData, string> | null = useMemo(() => {
    if (!enableExpandedRow) return null;

    return {
      id: '__expand',
      header: () => null,
      cell: ({ row }) => {
        const { meta } = row.original as RowDataWithMeta;

        if (!meta?.expandedRow) {
          return null;
        }

        console.log(row);

        return (
          <button
            className="hover:cursor-pointer"
            onClick={() => {
              console.log(row);
              row.toggleExpanded(true);
              console.log(row.getToggleSelectedHandler());
            }}
            aria-label={row.getIsExpanded() ? 'Collapse row' : 'Expand row'}
          >
            <ChevronRight
              className={cn('size-4 transition-transform', {
                'rotate-90': row.getIsExpanded(),
              })}
            />
          </button>
        );
      },
      enableSorting: false,
      meta: {
        headerClassName: 'w-10',
        className: 'w-10 px-2 flex items-center justify-center',
      },
    };
  }, [enableExpandedRow]);

  const mergedColumns = useMemo(() => {
    if (!expandColumn) return columns;

    return [expandColumn, ...columns];
  }, [columns, expandColumn]);

  const table = useReactTable<TData>({
    data,
    columns: mergedColumns,
    state: {
      sorting: sortedData,
      ...(enableExpandedRow ? { expanded: currentExpanded } : {}),
    },
    onSortingChange: setSortedData,
    ...(enableExpandedRow
      ? {
          onExpandedChange: handleExpandedChange,
          manualExpanding: true,
        }
      : {}),
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
        isFirstLoad,
        enableExpandedRow,
        classNameExpandedRow,
        classNameExpandedCell,
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
