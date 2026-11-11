import { flexRender } from '@tanstack/react-table';
import { Fragment } from 'react';

import { Skeleton } from '@/components/VirtualizedTable/components/Skeleton/Skeleton';
import { cn } from '@/utils';

import {
  BORDER_EDGE_CLASSES,
  HIDE_BELOW_CLASS,
  ROUNDED_BOTTOM_EDGE_CLASSES,
} from '../../constants';
import { useTableContext } from '../../contexts';
import { useCollapsingRows, useDisplayedColumnCount } from '../../hooks';
import {
  getPinnedCellProps,
  getResponsiveEdgeClasses,
  isPaginationBarVisible,
} from '../../utils';
import { RowData, RowDataWithMeta } from '../../VirtualizedTable.types';
import { ExpandableRow } from '../ExpandableRow/ExpandableRow';

import { BodyProps } from './Body.types';

export const Body = <TData extends RowData = RowData>({
  isLoading,
  showPagination,
  emptyState,
  errorState,
}: BodyProps<TData>) => {
  const {
    table,
    pageSize,
    totalItems = -Infinity,
    tableLoading,
    tableError,
    enableExpandedRow,
    classNameExpandedRow,
    classNameExpandedCell,
    classNameExpandedContent,
    enableHoverRow,
    classNameHoverRow,
    classNameActiveExpandedRow,
    renderExpandedRow,
    isBorderOnAdjacentCell,
    isExpandColumnVisible,
    pinnedWidths,
  } = useTableContext<TData>();
  const [stateBodyRef, displayedColumnCount] = useDisplayedColumnCount();
  const rows = table.getRowModel().rows ?? [];
  const { collapsingIds, handleCollapseEnd } = useCollapsingRows(
    enableExpandedRow
      ? rows.filter((row) => row.getIsExpanded()).map(({ id }) => id)
      : [],
  );

  if (isLoading || tableLoading) {
    return <Skeleton numberOfRows={pageSize} table={table} />;
  }

  const hasPaginationBar = showPagination && isPaginationBarVisible(totalItems);
  const isErrorContent = rows.length === 0 && !!tableError && !!errorState;

  const stateContent = (() => {
    if (rows.length > 0) {
      return null;
    }

    if (tableError && errorState) {
      return typeof errorState === 'function'
        ? errorState(tableError)
        : errorState;
    }

    return emptyState ?? null;
  })();

  if (stateContent) {
    const colSpan =
      displayedColumnCount ?? table.getVisibleLeafColumns().length;

    return (
      <tbody
        ref={stateBodyRef}
        className={cn(
          'kvt-body',
          'text-slate-800',
          'text-sm',
          'font-normal',
          'relative',
          'dark:border-x',
        )}
      >
        <tr
          className={cn(
            isErrorContent ? 'kvt-error-row' : 'kvt-empty-row',
            'border-b',
            'border-b-gray-200',
            'dark:border-b-metal-700',
            'bg-transparent',
          )}
          data-empty-row
          data-error-row={isErrorContent ? true : undefined}
        >
          <td
            colSpan={colSpan}
            className={cn(
              'p-0',
              'bg-white',
              'dark:bg-metal-900',
              'dark:border',
              'dark:border-metal-700',
              'rounded-b-lg',
            )}
          >
            <div className="flex items-center justify-center">
              {stateContent}
            </div>
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody
      className={cn(
        'kvt-body',
        'text-slate-800',
        'text-sm',
        'font-normal',
        'relative',
        'dark:border-x',
      )}
    >
      {rows.map((row, rowIndex) => {
        const { id, original, getVisibleCells } = row;
        const { meta = {} } = original as RowDataWithMeta;

        const columns = getVisibleCells();
        const isExpanded = enableExpandedRow && row.getIsExpanded();
        const isCollapsing = !isExpanded && collapsingIds.has(id);
        const hasExpandedContent = !!meta.expandedRow || !!renderExpandedRow;
        const hideBelows = columns.map(
          ({ column }) => column.columnDef.meta?.hideBelow,
        );
        const isResponsive =
          hideBelows.some(Boolean) && columns[0]?.column.id !== '__expand';
        const hasRoundedBottom =
          rowIndex === rows.length - 1 &&
          !hasPaginationBar &&
          !isExpanded &&
          !isCollapsing;
        // null means the expand column is mid-animation: don't apply rounded-bl-lg
        const firstDataColumnIndex: number | null = (() => {
          if (columns[0]?.column.id !== '__expand' || isExpandColumnVisible) {
            return 0;
          }

          if (isBorderOnAdjacentCell) {
            return 1;
          }

          return null;
        })();

        return (
          <Fragment key={id}>
            <tr
              className={cn(
                'kvt-row',
                { 'group/row': enableHoverRow },
                'border-b',
                'border-b-gray-200',
                'dark:text-metal-50',
                'dark:border-b-metal-700',
                'bg-transparent',
                meta.className,
              )}
              data-row-id={id}
              {...(meta.attributes ?? {})}
            >
              {columns.map(({ id, column, getContext }, columnIndex) => {
                const classNameFromMeta =
                  typeof column.columnDef.meta?.className === 'function'
                    ? column.columnDef.meta?.className(original)
                    : column.columnDef.meta?.className;
                const { hideBelow } = column.columnDef.meta ?? {};
                const pinned = getPinnedCellProps(table, column, pinnedWidths);

                return (
                  <td
                    key={id}
                    style={pinned.style}
                    className={cn(
                      'kvt-cell',
                      'px-4',
                      'py-1',
                      'text-sm',
                      'bg-white',
                      'dark:bg-metal-900',
                      'dark:border-t',
                      'dark:border-metal-700',
                      !isResponsive && 'dark:first:border-l',
                      !isResponsive && 'dark:last:border-r',
                      isResponsive &&
                        getResponsiveEdgeClasses(
                          hideBelows,
                          columnIndex,
                          BORDER_EDGE_CLASSES,
                        ),
                      isResponsive &&
                        hasRoundedBottom &&
                        getResponsiveEdgeClasses(
                          hideBelows,
                          columnIndex,
                          ROUNDED_BOTTOM_EDGE_CLASSES,
                        ),
                      '[tr[data-actions-open]_&]:bg-zinc-100',
                      'dark:[tr[data-actions-open]_&]:bg-metal-800',
                      {
                        'group-hover/row:bg-zinc-100 dark:group-hover/row:bg-metal-800':
                          enableHoverRow,
                        [cn(
                          'bg-zinc-100 dark:bg-metal-800',
                          classNameActiveExpandedRow,
                        )]: !!isExpanded,
                      },
                      classNameHoverRow,
                      pinned.className,
                      hideBelow && HIDE_BELOW_CLASS[hideBelow],
                      classNameFromMeta,
                      {
                        'rounded-bl-lg':
                          !isResponsive &&
                          rowIndex === rows.length - 1 &&
                          firstDataColumnIndex !== null &&
                          columnIndex === firstDataColumnIndex &&
                          !hasPaginationBar &&
                          !isExpanded &&
                          !isCollapsing,
                        'rounded-br-lg':
                          !isResponsive &&
                          rowIndex === rows.length - 1 &&
                          columnIndex === columns.length - 1 &&
                          !hasPaginationBar &&
                          !isExpanded &&
                          !isCollapsing,
                        'dark:border-b': hasRoundedBottom,
                      },
                    )}
                    data-expanded={isExpanded ? true : undefined}
                    {...(column.columnDef.meta?.attributes ?? {})}
                  >
                    {flexRender(column.columnDef.cell, getContext())}
                  </td>
                );
              })}
            </tr>

            {hasExpandedContent && (
              <ExpandableRow
                classNameExpandedCell={classNameExpandedCell}
                classNameExpandedContent={classNameExpandedContent}
                classNameExpandedRow={classNameExpandedRow}
                colSpan={columns.length}
                id={id}
                isExpanded={!!isExpanded}
                isCollapsing={isCollapsing}
                onCollapseEnd={handleCollapseEnd}
                isLastRow={rowIndex === rows.length - 1 && !hasPaginationBar}
              >
                {meta.expandedRow ?? renderExpandedRow?.(original)}
              </ExpandableRow>
            )}
          </Fragment>
        );
      })}
    </tbody>
  );
};
