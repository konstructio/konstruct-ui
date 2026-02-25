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
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

import { cn } from '@/utils';

import { RowData, RowDataWithMeta } from '../VirtualizedTable.types';
import { DEFAULT_PAGE_SIZE } from '../constants';

import { VirtualizedTableEvent, VirtualizedTableEventDetail } from '../events';

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

  useEffect(() => {
    if (!enableExpandedRow) return;

    const tableId = Array.isArray(id) ? id.join(',') : String(id);
    const controller = new AbortController();

    const handleExpand = (e: Event) => {
      const { detail } = e as CustomEvent<VirtualizedTableEventDetail>;

      if (detail.tableId !== tableId) return;

      handleExpandedChange((prev) => {
        if (typeof prev === 'boolean') return { [detail.rowId]: true };

        return { ...prev, [detail.rowId]: true };
      });
    };

    const handleCollapse = (e: Event) => {
      const { detail } = e as CustomEvent<VirtualizedTableEventDetail>;

      if (detail.tableId !== tableId) return;

      handleExpandedChange((prev) => {
        if (typeof prev === 'boolean') return {};

        const next = { ...prev };
        delete next[detail.rowId];

        return next;
      });
    };

    const handleToggle = (e: Event) => {
      const { detail } = e as CustomEvent<VirtualizedTableEventDetail>;

      if (detail.tableId !== tableId) return;

      handleExpandedChange((prev) => {
        if (typeof prev === 'boolean') return { [detail.rowId]: !prev };

        const isExpanded = !!prev[detail.rowId];
        const next = { ...prev };

        if (isExpanded) {
          delete next[detail.rowId];
        } else {
          next[detail.rowId] = true;
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

  const hasStaticExpandedContent = useMemo(
    () => data.some((row) => !!(row as RowDataWithMeta).meta?.expandedRow),
    [data],
  );

  const currentRowIds = useMemo(
    () =>
      isFetching
        ? []
        : data.map((row, index) =>
            getRowId ? getRowId(row, index) : String(index),
          ),
    [data, getRowId, isFetching],
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
            '!border-0 !rounded-none [&+th]:rounded-tl-lg dark:[&+th]:border-l',
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
        renderExpandedRow: renderExpandedRow as
          | ((data: RowData) => ReactNode)
          | undefined,
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
