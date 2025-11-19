import { flexRender } from '@tanstack/react-table';

import { Skeleton } from '@/components/VirtualizedTable/components/Skeleton/Skeleton';
import { cn } from '@/utils';

import { useTableContext } from '../../contexts';
import { RowData, RowDataWithMeta } from '../../VirtualizedTable.types';

import { BodyProps } from './Body.types';

export const Body = <TData extends RowData = RowData>({
  isLoading,
  showPagination,
}: BodyProps<TData>) => {
  const { table, pageSize, tableFetching } = useTableContext<TData>();

  if (isLoading || tableFetching) {
    return <Skeleton numberOfRows={pageSize} table={table} />;
  }

  const rows = table.getRowModel().rows ?? [];

  return (
    <tbody className="text-slate-800 text-sm font-normal relative">
      {rows.map(({ id, original, getVisibleCells }, rowIndex) => {
        const { meta = {} } = original as RowDataWithMeta;

        const columns = getVisibleCells();

        return (
          <tr
            key={id}
            className={cn(
              'border-b border-b-gray-200 last:border-b-transparent bg-transparent',
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
                    'px-4 py-1 text-sm bg-white',
                    classNameFromMeta,
                    {
                      '[tr:last-child_&:first-of-type]:rounded-bl-lg':
                        (rowIndex === rows.length - 1 && columnIndex === 0) ||
                        !showPagination,
                      '[tr:last-child_&:last-of-type]:rounded-br-lg':
                        (rowIndex === rows.length - 1 &&
                          columnIndex === columns.length - 1) ||
                        !showPagination,
                    },
                  )}
                  {...(column.columnDef.meta?.attributes ?? {})}
                >
                  {flexRender(column.columnDef.cell, getContext())}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
