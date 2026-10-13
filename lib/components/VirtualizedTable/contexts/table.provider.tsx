import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useQuery, type NotifyOnChangeProps } from '@tanstack/react-query';
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
import {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { cn } from '@/utils';

import { RowData, RowDataWithMeta } from '../VirtualizedTable.types';
import { DEFAULT_PAGE_SIZE } from '../constants';
import { getTableId } from '../utils';

import {
  VirtualizedTableEvent,
  VirtualizedTableEventDetail,
  VirtualizedTableRefreshEventDetail,
} from '../events';

import { TableContext } from './table.context';
import { Props } from './table.types';

// The provider reads these result props; consumer notifyOnChangeProps must
// keep including them or a fetch resolving to structurally-equal data never
// re-renders the table and the skeleton stays stuck.
const INTERNAL_NOTIFY_PROPS = [
  'data',
  'error',
  'isError',
  'isLoading',
  'isFetching',
  'dataUpdatedAt',
] satisfies NotifyOnChangeProps;

const EMPTY_DATA: RowData[] = [];

const mergeNotifyOnChangeProps = (
  consumerNotify?: NotifyOnChangeProps,
): NotifyOnChangeProps | undefined => {
  if (consumerNotify === undefined || consumerNotify === 'all') {
    return consumerNotify;
  }

  if (typeof consumerNotify === 'function') {
    return () => {
      const resolved = consumerNotify();

      if (resolved === undefined || resolved === 'all') {
        return resolved;
      }

      return [...new Set([...resolved, ...INTERNAL_NOTIFY_PROPS])];
    };
  }

  return [...new Set([...consumerNotify, ...INTERNAL_NOTIFY_PROPS])];
};

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
  headerContent,
  id,
  isPaginationEnabled,
  queryOptions = {},
  totalItems,
  getRowId,
  fetchData,
  onExpandedChange,
  renderExpandedRow,
  keepExpandColumnVisible,
}: Props<TData>) => {
  const [sortedData, setSortedData] = useState<SortingState>([]);
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(!!fetchData);
  const [page, setPage] = useState(0);
  const [termOfSearch, setTermOfSearch] = useState<string>();
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [internalTotalItemsCount, setInternalTotalItemsCount] =
    useState(totalItems);
  const totalItemsCount = fetchData ? internalTotalItemsCount : totalItems;
  const totalPages = Math.ceil(totalItemsCount / pageSize);
  const [multiselectSelected, setMultiselectSelected] = useState<
    Record<string, string[]>
  >({});
  const [dateFilters, setDateFilters] = useState<
    Record<string, string | undefined>
  >({});
  const [dateRangeFilters, setDateRangeFilters] = useState<
    Record<string, { from?: string; to?: string } | undefined>
  >({});
  const [timeFilters, setTimeFilters] = useState<
    Record<string, string | undefined>
  >({});

  const getQueryKey = () => {
    const queryKey: (string | number)[] =
      typeof id === 'string' || typeof id === 'number' ? [id] : [...id];

    if (isPaginationEnabled) {
      queryKey.push(page, pageSize);
    }

    if (termOfSearch) {
      queryKey.push(termOfSearch);
    }

    Object.entries(multiselectSelected).forEach(([key, value]) => {
      queryKey.push(`${key}:${value.join(',')}`);
    });

    Object.entries(dateFilters).forEach(([key, value]) => {
      if (value) queryKey.push(`${key}:${value}`);
    });

    Object.entries(dateRangeFilters).forEach(([key, value]) => {
      if (value) queryKey.push(`${key}:${value.from ?? ''}-${value.to ?? ''}`);
    });

    Object.entries(timeFilters).forEach(([key, value]) => {
      if (value) queryKey.push(`${key}:${value}`);
    });

    return queryKey;
  };

  const {
    notifyOnChangeProps: consumerNotifyOnChangeProps,
    ...restQueryOptions
  } = queryOptions;
  const lastFetchMetaRef = useRef<{ totalItemsCount?: number }>({});
  const hasSeededInitialDataRef = useRef(false);

  const queryResult = useQuery<TData[]>({
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    ...restQueryOptions,
    notifyOnChangeProps: mergeNotifyOnChangeProps(consumerNotifyOnChangeProps),
    queryKey: getQueryKey(),
    enabled: (query) => {
      if (!fetchData) {
        return false;
      }

      const { enabled } = restQueryOptions;

      return typeof enabled === 'function'
        ? !!enabled(query)
        : (enabled ?? true);
    },
    // Seed only the first cache entry: seeding every key with [] keeps the
    // query in 'success' from the start and isLoading permanently false.
    initialData: () => {
      if (hasSeededInitialDataRef.current || defaultData.length === 0) {
        return undefined;
      }

      hasSeededInitialDataRef.current = true;

      return defaultData;
    },
    queryFn: async ({ signal }) => {
      const { data, totalItemsCount } = await fetchData!(
        {
          page: Math.max(page + 1, 1),
          pageSize,
          termOfSearch,
          ...(Object.keys(multiselectSelected).length > 0
            ? multiselectSelected
            : {}),
          ...(Object.keys(dateFilters).length > 0 ? dateFilters : {}),
          ...(Object.keys(dateRangeFilters).length > 0 ? dateRangeFilters : {}),
          ...(Object.keys(timeFilters).length > 0 ? timeFilters : {}),
        },
        signal,
      );

      lastFetchMetaRef.current = { totalItemsCount };

      return data;
    },
  });

  const [isManualRefreshing, setIsManualRefreshing] = useState(false);
  const pendingManualRefetchesRef = useRef(0);
  const isMountedRef = useRef(true);
  const refetchRef = useRef(queryResult.refetch);
  refetchRef.current = queryResult.refetch;

  const data = fetchData
    ? (queryResult.data ?? (EMPTY_DATA as TData[]))
    : defaultData;
  const isLoading = fetchData ? queryResult.isLoading : false;
  const isFetching = fetchData ? queryResult.isFetching : false;
  const tableError = fetchData ? queryResult.error : null;
  const hasHeaderContent = !!headerContent;

  // dataUpdatedAt changes on every successful fetch even when structural
  // sharing keeps the same data reference.
  useEffect(() => {
    if (!fetchData || queryResult.dataUpdatedAt === 0) {
      return;
    }

    setIsFirstLoad(false);

    const { totalItemsCount } = lastFetchMetaRef.current;

    if (totalItemsCount) {
      setInternalTotalItemsCount(totalItemsCount);
    }
  }, [fetchData, queryResult.dataUpdatedAt]);

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

  const onSelectDateFilter = useCallback((key: string, date?: Date) => {
    const newKey = key.toLowerCase().replace(/\s+/g, '_');

    setDateFilters((prev) => ({
      ...prev,
      [newKey]: date?.toISOString(),
    }));
    setPage(0);
  }, []);

  const onSelectDateRangeFilter = useCallback(
    (key: string, range?: { from?: Date; to?: Date }) => {
      const newKey = key.toLowerCase().replace(/\s+/g, '_');

      setDateRangeFilters((prev) => ({
        ...prev,
        [newKey]: range
          ? { from: range.from?.toISOString(), to: range.to?.toISOString() }
          : undefined,
      }));
      setPage(0);
    },
    [],
  );

  const onSelectTimeFilter = useCallback((key: string, time?: Date) => {
    const newKey = key.toLowerCase().replace(/\s+/g, '_');

    setTimeFilters((prev) => ({
      ...prev,
      [newKey]: time?.toISOString(),
    }));
    setPage(0);
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

  useEffect(() => {
    if (!enableExpandedRow) return;

    const tableId = getTableId(id);
    const controller = new AbortController();

    const handleExpand = (e: Event) => {
      const { detail } = e as CustomEvent<VirtualizedTableEventDetail>;
      const { rowId } = detail;

      if (detail.tableId !== tableId || !rowId) {
        return;
      }

      handleExpandedChange((prev) => {
        if (typeof prev === 'boolean') {
          return { [rowId]: true };
        }

        return { ...prev, [rowId]: true };
      });
    };

    const handleCollapse = (e: Event) => {
      const { detail } = e as CustomEvent<VirtualizedTableEventDetail>;
      const { rowId } = detail;

      if (detail.tableId !== tableId || !rowId) {
        return;
      }

      handleExpandedChange((prev) => {
        if (typeof prev === 'boolean') {
          return {};
        }

        const next = { ...prev };
        delete next[rowId];

        return next;
      });
    };

    const handleToggle = (e: Event) => {
      const { detail } = e as CustomEvent<VirtualizedTableEventDetail>;
      const { rowId } = detail;

      if (detail.tableId !== tableId || !rowId) {
        return;
      }

      handleExpandedChange((prev) => {
        if (typeof prev === 'boolean') {
          return { [rowId]: !prev };
        }

        const isExpanded = !!prev[rowId];
        const next = { ...prev };

        if (isExpanded) {
          delete next[rowId];
        } else {
          next[rowId] = true;
        }

        return next;
      });
    };

    document.addEventListener(VirtualizedTableEvent.EXPAND_ROW, handleExpand, {
      signal: controller.signal,
    });
    document.addEventListener(
      VirtualizedTableEvent.COLLAPSE_ROW,
      handleCollapse,
      { signal: controller.signal },
    );
    document.addEventListener(VirtualizedTableEvent.TOGGLE_ROW, handleToggle, {
      signal: controller.signal,
    });

    return () => controller.abort();
  }, [enableExpandedRow, id, handleExpandedChange]);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!fetchData) {
      return;
    }

    const tableId = getTableId(id);
    const controller = new AbortController();

    const handleRefresh = (e: Event) => {
      const { detail } = e as CustomEvent<VirtualizedTableRefreshEventDetail>;

      if (detail.tableId !== undefined && detail.tableId !== tableId) {
        return;
      }

      pendingManualRefetchesRef.current += 1;
      setIsManualRefreshing(true);

      refetchRef.current().finally(() => {
        pendingManualRefetchesRef.current -= 1;

        if (pendingManualRefetchesRef.current === 0 && isMountedRef.current) {
          setIsManualRefreshing(false);
        }
      });
    };

    document.addEventListener(VirtualizedTableEvent.REFRESH, handleRefresh, {
      signal: controller.signal,
    });

    return () => controller.abort();
  }, [fetchData, id]);

  const hasStaticExpandedContent = useMemo(
    () => data.some((row) => !!(row as RowDataWithMeta).meta?.expandedRow),
    [data],
  );

  const currentRowIds = useMemo(
    () =>
      data.map((row, index) =>
        getRowId ? getRowId(row, index) : String(index),
      ),
    [data, getRowId],
  );

  const hasAnyExpanded = useMemo(() => {
    if (typeof currentExpanded === 'boolean') return currentExpanded;

    return currentRowIds.some((id) => !!currentExpanded[id]);
  }, [currentExpanded, currentRowIds]);

  const hasKeepVisible = useMemo(() => {
    if (typeof keepExpandColumnVisible === 'boolean')
      return keepExpandColumnVisible;
    if (typeof keepExpandColumnVisible === 'object')
      return currentRowIds.some((id) => !!keepExpandColumnVisible[id]);

    return false;
  }, [keepExpandColumnVisible, currentRowIds]);

  const shouldExpandColumn =
    hasStaticExpandedContent ||
    (renderExpandedRow && (hasAnyExpanded || hasKeepVisible));

  // Delay expand by one frame so the browser registers the w-0 state
  // before transitioning to w-10, ensuring the CSS animation fires.
  // Collapse is immediate (CSS transition handles the animation).
  const [isExpandColumnVisible, setIsExpandColumnVisible] =
    useState(!!shouldExpandColumn);

  useEffect(() => {
    if (shouldExpandColumn) {
      const frame = requestAnimationFrame(() => setIsExpandColumnVisible(true));

      return () => cancelAnimationFrame(frame);
    } else {
      setIsExpandColumnVisible(false);
    }
  }, [shouldExpandColumn]);

  // On collapse: defer border swap so the expand cell keeps its border
  // while the width animates to 0. On expand: swap immediately.
  const [isBorderOnAdjacentCell, setIsBorderOnAdjacentCell] = useState(
    !isExpandColumnVisible,
  );

  useEffect(() => {
    if (isExpandColumnVisible) {
      setIsBorderOnAdjacentCell(false);
    } else {
      const timer = setTimeout(() => setIsBorderOnAdjacentCell(true), 300);

      return () => clearTimeout(timer);
    }
  }, [isExpandColumnVisible]);

  const expandColumn: ColumnDef<TData, string> | null = useMemo(() => {
    if (!enableExpandedRow) return null;
    if (!hasStaticExpandedContent && !renderExpandedRow) return null;

    return {
      id: '__expand',
      header: () => <VisuallyHidden>Expand Column</VisuallyHidden>,
      cell: ({ row }) => {
        const { meta } = row.original as RowDataWithMeta;
        const isRowKeptVisible =
          typeof keepExpandColumnVisible === 'object' &&
          !!keepExpandColumnVisible[row.id];

        if (!meta?.expandedRow && !row.getIsExpanded() && !isRowKeptVisible) {
          return null;
        }

        return (
          <button
            type="button"
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
        headerClassName: cn(
          'transition-[width,max-width,padding] duration-300 ease-in-out overflow-hidden',
          // Width: immediate change, CSS transition handles animation
          isExpandColumnVisible ? 'w-10 max-w-10 px-2' : 'w-0 max-w-0 !p-0',
          // Border/radius: deferred on collapse so border stays during exit
          isBorderOnAdjacentCell &&
            cn(
              '!border-0 !rounded-none dark:[&+th]:border-l',
              !hasHeaderContent && '[&+th]:rounded-tl-lg',
            ),
        ),
        className: cn(
          'transition-[width,max-width,padding] duration-300 ease-in-out overflow-hidden',
          isExpandColumnVisible
            ? cn('w-10 max-w-10 px-1 text-center', classNameExpandedHeader)
            : 'w-0 max-w-0 !p-0',
          isBorderOnAdjacentCell && '!border-0 dark:[&+td]:border-l',
        ),
      },
    };
  }, [
    enableExpandedRow,
    hasStaticExpandedContent,
    hasHeaderContent,
    renderExpandedRow,
    isExpandColumnVisible,
    isBorderOnAdjacentCell,
    keepExpandColumnVisible,
  ]);

  const mergedColumns = useMemo(() => {
    if (!expandColumn) return columns;

    return [expandColumn, ...columns];
  }, [columns, expandColumn]);

  const table = useReactTable<TData>({
    data,
    columns: mergedColumns,
    ...(getRowId ? { getRowId } : {}),
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
        classNameActiveExpandedRow,
        classNameExpandedCell,
        classNameExpandedContent,
        classNameExpandedRow,
        classNameHoverRow,
        enableExpandedRow,
        enableHoverRow,
        isBorderOnAdjacentCell,
        isExpandColumnVisible,
        isFirstLoad,
        multiselectSelected,
        dateFilters,
        dateRangeFilters,
        timeFilters,
        page,
        pageSize,
        sortedData,
        table: table as unknown as Table<RowData>,
        tableId: getTableId(id),
        tableFetching: isFetching,
        tableLoading: isLoading || isManualRefreshing,
        tableError,
        headerContent,
        termOfSearch,
        totalItems: totalItemsCount,
        totalPages,
        handlePage,
        onChangeTermOfSearch,
        onPageSize,
        onSelectMultiselect,
        onSelectDateFilter,
        onSelectDateRangeFilter,
        onSelectTimeFilter,
        onSorting: setSortedData,
        renderExpandedRow: renderExpandedRow as
          ((data: RowData) => ReactNode) | undefined,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};
