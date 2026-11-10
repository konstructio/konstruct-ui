import { Column, flexRender } from '@tanstack/react-table';

import { cn } from '@/utils';

import { ChevronDown, ChevronUp } from '../../assets';
import {
  BORDER_EDGE_CLASSES,
  HIDE_BELOW_CLASS,
  ROUNDED_TOP_EDGE_CLASSES,
} from '../../constants';
import { useTableContext } from '../../contexts';
import { getPinnedCellProps, getResponsiveEdgeClasses } from '../../utils';
import { RowData } from '../../VirtualizedTable.types';

import { Props } from './Header.types';

const ARIA_SORT = {
  asc: 'ascending',
  desc: 'descending',
  none: 'none',
} as const;

export const Header = <TData extends RowData>({
  className,
  classNameArrows,
  classNameActiveArrows,
  classNameHeaderContent,
}: Props) => {
  const { table, headerContent, onSorting, pinnedWidths, getPinnedHeaderRef } =
    useTableContext<TData>();

  const handleToggleSort = (column: Column<TData, unknown>) => {
    onSorting([{ id: column.id, desc: column.getIsSorted() === 'asc' }]);
  };

  return (
    <thead
      className={cn(
        'kvt-header',
        'font-semibold',
        'uppercase',
        'text-slate-500',
        'text-xs',
        'not-italic',
        'bg-slate-100',
        'overflow-hidden',
        'dark:text-slate-300',
        'dark:bg-metal-800',
        className,
      )}
    >
      {headerContent && (
        <tr data-header-content>
          <th
            colSpan={table.getVisibleLeafColumns().length}
            className={cn(
              'kvt-header-content',
              'px-6',
              'py-4',
              'text-left',
              'text-sm',
              'font-normal',
              'normal-case',
              'text-slate-800',
              'bg-white',
              'rounded-tl-lg',
              'rounded-tr-lg',
              'border-b',
              'border-b-gray-200',
              'dark:border-b-0',
              'dark:text-metal-50',
              'dark:bg-metal-900',
              'dark:border-t',
              'dark:border-x',
              'dark:border-metal-700',
              classNameHeaderContent,
            )}
          >
            {headerContent}
          </th>
        </tr>
      )}

      {table.getHeaderGroups().map(({ id, headers }) => {
        const hideBelows = headers.map(
          ({ column }) => column.columnDef.meta?.hideBelow,
        );
        const isResponsive = hideBelows.some(Boolean);

        return (
          <tr key={id} className="kvt-header-row">
            {headers.map(({ id, column, getContext }, columnIndex) => {
              const { hideBelow, headerClassName } =
                column.columnDef.meta ?? {};
              const isPinned = !!column.getIsPinned();
              const pinned = getPinnedCellProps(table, column, pinnedWidths);
              const canSort = column.getCanSort();
              const sortDirection = column.getIsSorted();
              const label = flexRender(column.columnDef.header, getContext());

              return (
                <th
                  scope="col"
                  key={id}
                  ref={isPinned ? getPinnedHeaderRef(column.id) : undefined}
                  className={cn(
                    'kvt-header-cell',
                    'px-4',
                    'py-3',
                    'text-left',
                    'text-xs',
                    !headerContent && !isResponsive && 'first:rounded-tl-lg',
                    !headerContent && !isResponsive && 'last:rounded-tr-lg',
                    !headerContent &&
                      isResponsive &&
                      getResponsiveEdgeClasses(
                        hideBelows,
                        columnIndex,
                        ROUNDED_TOP_EDGE_CLASSES,
                      ),
                    'border-transparent',
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
                    isPinned && 'z-1 bg-slate-100 dark:bg-metal-800',
                    pinned.className,
                    hideBelow && HIDE_BELOW_CLASS[hideBelow],
                    headerClassName,
                  )}
                  style={pinned.style}
                  aria-sort={
                    canSort ? ARIA_SORT[sortDirection || 'none'] : undefined
                  }
                >
                  {canSort ? (
                    <button
                      type="button"
                      className={cn(
                        // Sized to the label and arrows, so the focus ring
                        // hugs them; inline so it follows the cell's alignment.
                        'relative inline-flex max-w-full items-center gap-2 text-left align-middle',
                        'cursor-pointer rounded-xs outline-none [text-transform:inherit]',
                        'tap-target touch-hit-area',
                        'focus-visible:ring-1 focus-visible:ring-aurora-500',
                      )}
                      onClick={() => handleToggleSort(column)}
                    >
                      {label}
                      <span
                        className={cn(
                          'flex flex-col text-slate-400 justify-center items-center gap-1',
                          classNameArrows,
                        )}
                      >
                        <ChevronUp
                          className={cn(
                            'w-2 h-2',
                            {
                              'text-blue-600 dark:text-aurora-500':
                                sortDirection === 'asc',
                            },
                            classNameActiveArrows,
                          )}
                        />

                        <ChevronDown
                          className={cn(
                            'w-2 h-2',
                            {
                              'text-blue-600 dark:text-aurora-500':
                                sortDirection === 'desc',
                            },
                            classNameActiveArrows,
                          )}
                        />
                      </span>
                    </button>
                  ) : (
                    <span className="flex items-center gap-2 w-full">
                      {label}
                    </span>
                  )}
                </th>
              );
            })}
          </tr>
        );
      })}
    </thead>
  );
};
