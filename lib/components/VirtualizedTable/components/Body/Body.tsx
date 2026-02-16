import { flexRender } from '@tanstack/react-table';
import { Fragment } from 'react';

import { Skeleton } from '@/components/VirtualizedTable/components/Skeleton/Skeleton';
import { cn } from '@/utils';

import { useTableContext } from '../../contexts';
import { RowData, RowDataWithMeta } from '../../VirtualizedTable.types';

import { BodyProps } from './Body.types';

export const Body = <TData extends RowData = RowData>({
  isLoading,
  showPagination,
}: BodyProps<TData>) => {
  const {
    table,
    pageSize,
    tableFetching,
    enableExpandedRow,
    classNameExpandedRow,
    classNameExpandedCell,
  } = useTableContext<TData>();

  if (isLoading || tableFetching) {
    return <Skeleton numberOfRows={pageSize} table={table} />;
  }

  const rows = table.getRowModel().rows ?? [];

  return (
    <tbody
      className={cn(
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
        const hasExpandedContent = !!meta.expandedRow;

        return (
          <Fragment key={id}>
            <tr
              className={cn(
                'border-b',
                'border-b-gray-200',
                'dark:text-metal-50',
                'dark:border-b-metal-700',
                {
                  'last:border-b-transparent': !isExpanded,
                },
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

                return (
                  <td
                    key={id}
                    className={cn(
                      'px-4',
                      'py-1',
                      'text-sm',
                      'bg-white',
                      'dark:bg-metal-900',
                      'dark:border-t',
                      'dark:border-metal-700',
                      'dark:first:border-l',
                      'dark:last:border-r',
                      classNameFromMeta,
                      {
                        'first:rounded-bl-lg':
                          rowIndex === rows.length - 1 &&
                          columnIndex === 0 &&
                          !showPagination,
                        'last:rounded-br-lg':
                          rowIndex === rows.length - 1 &&
                          columnIndex === columns.length - 1 &&
                          !showPagination,
                        'dark:[tr:last-child_&]:border-b': !showPagination,
                      },
                    )}
                    {...(column.columnDef.meta?.attributes ?? {})}
                  >
                    {flexRender(column.columnDef.cell, getContext())}
                  </td>
                );
              })}
            </tr>

            {isExpanded && hasExpandedContent && (
              <tr
                className={cn(
                  'border-b',
                  'border-b-gray-200',
                  'dark:border-b-metal-700',
                  classNameExpandedRow,
                )}
                data-expanded-row-id={id}
              >
                <td
                  colSpan={columns.length}
                  className={cn(
                    'px-4 py-3',
                    'bg-white dark:bg-metal-900',
                    classNameExpandedCell,
                  )}
                >
                  {meta.expandedRow}
                </td>
              </tr>
            )}
          </Fragment>
        );
      })}
    </tbody>
  );
};
