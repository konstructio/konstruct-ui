import { flexRender } from '@tanstack/react-table';

import { Skeleton } from '@/components/VirtualizedTable/components/Skeleton/Skeleton';
import { cn } from '@/utils';

import { useTableContext } from '../../contexts';
import { RowData, RowDataWithMeta } from '../../VirtualizedTable.types';

import { BodyProps } from './Body.types';

export const Body = <TData extends RowData = RowData>({
  isLoading,
}: BodyProps<TData>) => {
  const { table, pageSize, tableFetching } = useTableContext<TData>();

  if (isLoading || tableFetching) {
    return <Skeleton numberOfRows={pageSize} table={table} />;
  }

  return (
    <tbody className="text-slate-800 text-sm font-normal relative">
      {table.getRowModel().rows.map(({ id, original, getVisibleCells }) => {
        const { meta = {} } = original as RowDataWithMeta;

        return (
          <tr
            key={id}
            className={cn(
              'border border-x-transparent border-t-gray-200 border-b-transparent',
              meta.className,
            )}
            data-row-id={id}
            {...(meta.attributes ?? {})}
          >
            {getVisibleCells().map(({ id, column, getContext }) => (
              <td
                key={id}
                className={cn(
                  'px-4 py-1 text-sm',
                  column.columnDef.meta?.className,
                )}
                {...(column.columnDef.meta?.attributes ?? {})}
              >
                {flexRender(column.columnDef.cell, getContext())}
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
};
