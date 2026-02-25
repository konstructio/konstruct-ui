import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
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
import { useCallback, useMemo, useState } from 'react';

import { cn } from '@/utils';

import { RowData, RowDataWithMeta } from '../VirtualizedTable.types';
import { DEFAULT_PAGE_SIZE } from '../constants';

import { TableContext } from './table.context';
import { Props } from './table.types';

export const TableProvider = <TData extends RowData = RowData>({
  children,
  classNameExpandedCell,
  classNameExpandedContent,
  classNameExpandedRow,
  classNameExpandedHeader,
  classNameActiveExpandedRow,
  classNameHoverRow,
  columns = [],
  data: defaultData = [],
  defaultExpanded,
  enableExpandedRow,
  enableHoverRow,
  expandedState,
  id,
  isPaginationEnabled,
  queryOptions = {},
  totalItems,
  fetchData,
  onExpandedChange,
}: Props<TData>) => {
  const [sortedData, setSortedData] = useState<SortingState>([]);
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(!!fetchData);
  const [page, setPage] = useState(0);
  const [termOfSearch, setTermOfSearch] = useState<string>();
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [internalTotalItemsCount, setInternalTotalItemsCount] =
    useState(totalItems);
  const totalItemsCount = fetchData ? internalTotalItemsCount : totalItems;
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

  const queryResult = useQuery<TData[]>({
    queryKey: getQueryKey(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    initialData: defaultData,
    enabled: !!fetchData,
    queryFn: async () =>
      fetchData!({
        page: Math.max(page + 1, 1),
        pageSize,
        termOfSearch,
        ...(Object.keys(multiselectSelected).length > 0
          ? multiselectSelected
          : {}),
      }).then(({ data, totalItemsCount }) => {
        setIsFirstLoad(false);

        if (totalItemsCount) {
          setInternalTotalItemsCount(totalItemsCount);
        }

        return data;
      }),

    ...queryOptions,
  });

  const data = fetchData ? queryResult.data : defaultData;
  const isLoading = fetchData ? queryResult.isLoading : false;
  const isFetching = fetchData ? queryResult.isFetching : false;

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

  const expandColumn: ColumnDef<TData, string> | null = useMemo(() => {
    if (!enableExpandedRow) return null;

    return {
      id: '__expand',
      header: () => <VisuallyHidden>Expand Column</VisuallyHidden>,
      cell: ({ row }) => {
        const { meta } = row.original as RowDataWithMeta;

        if (!meta?.expandedRow) {
          return null;
        }

        return (
          <button
            className="hover:cursor-pointer"
            onClick={() => row.toggleExpanded()}
            aria-label={row.getIsExpanded() ? 'Collapse row' : 'Expand row'}
          >
            <ChevronRight
              className={cn(
                'size-4 transition-transform text-slate-400 dark:text-metal-400',
                {
                  '-rotate-90': row.getIsExpanded(),
                },
              )}
            />
          </button>
        );
      },
      enableSorting: false,
      meta: {
        headerClassName: 'w-10',
        className: cn('w-10 px-1 text-center', classNameExpandedHeader),
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
        classNameExpandedContent,
        classNameActiveExpandedRow,
        enableHoverRow,
        classNameHoverRow,
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
