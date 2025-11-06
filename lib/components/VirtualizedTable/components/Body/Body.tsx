import { flexRender } from '@tanstack/react-table';

import { Skeleton } from '@/components/Skeleton/Skeleton';
import { cn } from '@/utils';

import { useTableContext } from '../../contexts';
import { RowData, RowDataWithMeta } from '../../VirtualizedTable.types';

import { BodyProps } from './Body.types';

export const Body = <TData extends RowData = RowData>({
  isLoading,
}: BodyProps<TData>) => {
  const { table, pageSize } = useTableContext<TData>();

  return (
    <tbody className="text-slate-800 text-sm font-normal relative table-fixed">
      {isLoading ? (
        <Skeleton numberOfRows={pageSize} table={table} />
      ) : (
        table.getRowModel().rows.map(({ id, original, getVisibleCells }) => {
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
              {getVisibleCells().map(({ id, column, getContext }) => {
                console.log(column.columnDef);
                return (
                  <td
                    key={id}
                    className={cn(
                      'px-4 py-1 text-sm w-full',
                      column.columnDef.meta?.className,
                    )}
                    style={{ width: column.getSize() }}
                    {...(column.columnDef.meta?.attributes ?? {})}
                  >
                    {flexRender(column.columnDef.cell, getContext())}
                  </td>
                );
              })}
            </tr>
          );
        })
      )}
    </tbody>
  );
};
