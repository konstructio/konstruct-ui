import { Column, flexRender } from '@tanstack/react-table';

import { cn } from '@/utils';

import { ChevronDown, ChevronUp } from '../../assets';
import { HIDE_BELOW_CLASS } from '../../constants';
import { useTableContext } from '../../contexts';
import { getPinnedCellProps } from '../../utils';
import { RowData } from '../../VirtualizedTable.types';

import { Props } from './Header.types';

export const Header = <TData extends RowData>({
  className,
  classNameArrows,
  classNameActiveArrows,
  classNameHeaderContent,
}: Props) => {
  const { table, headerContent, onSorting, pinnedWidths, getPinnedHeaderRef } =
    useTableContext<TData>();

  const handleAscSort = (column: Column<TData, unknown>) => {
    onSorting([{ id: column.id, desc: false }]);
  };

  const handleDescSort = (column: Column<TData, unknown>) => {
    onSorting([{ id: column.id, desc: true }]);
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

      {table.getHeaderGroups().map(({ id, headers }) => (
        <tr key={id} className="kvt-header-row">
          {headers.map(({ id, column, getContext }) => {
            const { hideBelow, headerClassName } = column.columnDef.meta ?? {};
            const isPinned = !!column.getIsPinned();
            const pinned = getPinnedCellProps(table, column, pinnedWidths);

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
                  !headerContent && 'first:rounded-tl-lg',
                  !headerContent && 'last:rounded-tr-lg',
                  'border-transparent',
                  'dark:border-t',
                  'dark:border-metal-700',
                  'dark:first:border-l',
                  'dark:last:border-r',
                  isPinned && 'bg-slate-100 dark:bg-metal-800',
                  pinned.className,
                  hideBelow && HIDE_BELOW_CLASS[hideBelow],
                  headerClassName,
                )}
                style={pinned.style}
              >
                <span className="flex items-center gap-2 w-full">
                  {flexRender(column.columnDef.header, getContext())}
                  {column.getCanSort() && (
                    <div
                      className={cn(
                        'flex flex-col text-slate-400 justify-center items-center gap-1',
                        classNameArrows,
                      )}
                      role="presentation"
                    >
                      <ChevronUp
                        className={cn(
                          'w-2 h-2 cursor-pointer',
                          {
                            'text-blue-600 dark:text-aurora-500':
                              column.getIsSorted() === 'asc',
                          },
                          classNameActiveArrows,
                        )}
                        onClick={() => handleAscSort(column)}
                      />

                      <ChevronDown
                        className={cn(
                          'w-2 h-2 cursor-pointer',
                          {
                            'text-blue-600 dark:text-aurora-500':
                              column.getIsSorted() === 'desc',
                          },
                          classNameActiveArrows,
                        )}
                        onClick={() => handleDescSort(column)}
                      />
                    </div>
                  )}
                </span>
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
};
