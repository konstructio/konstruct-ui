import { Column, flexRender } from '@tanstack/react-table';
import { useCallback } from 'react';

import { cn } from '@/utils';

import { ChevronDown, ChevronUp } from '../../assets';
import { useTableContext } from '../../contexts';
import { RowData } from '../../VirtualizedTable.types';

import { Props } from './Header.types';

export const Header = <TData extends RowData>({
  className,
  classNameArrows,
  classNameActiveArrows,
}: Props) => {
  const { table, onSorting } = useTableContext<TData>();

  const handleAscSort = useCallback(
    (column: Column<TData, unknown>) =>
      onSorting([{ id: column.id, desc: false }]),
    [onSorting],
  );

  const handleDescSort = useCallback(
    (column: Column<TData, unknown>) =>
      onSorting([{ id: column.id, desc: true }]),
    [onSorting],
  );

  return (
    <thead
      className={cn(
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
      {table.getHeaderGroups().map(({ id, headers }) => (
        <tr key={id}>
          {headers.map(({ id, column, getContext }) => (
            <th
              scope="col"
              key={id}
              className={cn(
                'px-4',
                'py-3',
                'text-left',
                'text-xs',
                'first:rounded-tl-lg',
                'last:rounded-tr-lg',
                'border-transparent',
                'dark:border-t',
                'dark:border-metal-700',
                'dark:first:border-l',
                'dark:last:border-r',
                column.columnDef.meta?.headerClassName,
              )}
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
          ))}
        </tr>
      ))}
    </thead>
  );
};
