import { EllipsisVertical } from 'lucide-react';

import { Button } from '@/components/Button/Button';

import { useTableContext } from '../../contexts';

import { SkeletonProps } from './Skeleton.types';
import { cn } from '@/utils';

export const Skeleton = <T,>({ numberOfRows, table }: SkeletonProps<T>) => {
  const { tableFetching, tableLoading } = useTableContext();
  const rows = Array.from({ length: numberOfRows });

  return (
    <tbody className="text-slate-800 text-sm font-normal relative">
      {rows.map((_, rowIndex) => {
        const columns = table.getAllColumns();

        return (
          <tr
            key={`skeleton-row-${rowIndex}`}
            className="border-b border-b-gray-200 bg-transparent last:border-b-transparent"
          >
            {columns.map((column, columnIndex) => {
              if (column.id !== 'actions') {
                return (
                  <td
                    key={`skeleton-${column.id}`}
                    className={cn(
                      'px-4 py-1 bg-white',
                      column.columnDef.meta?.className,
                      {
                        '[tr:last-child_&:first-of-type]:rounded-bl-lg':
                          rowIndex === rows.length - 1 && columnIndex === 0,
                        '[tr:last-child_&:last-of-type]:rounded-br-lg':
                          rowIndex === rows.length - 1 &&
                          columnIndex === columns.length - 1,
                      },
                    )}
                  >
                    <div className="animate-in fade-in-0">
                      <div className="bg-gray-200 animate-pulse rounded h-5 w-full" />
                    </div>
                  </td>
                );
              }

              return (
                <td
                  key={`skeleton-${column.id}`}
                  className={cn(
                    'px-4 py-1 bg-white',
                    column.columnDef.meta?.className,
                    {
                      '[tr:last-child_&:first-of-type]:rounded-bl-lg':
                        rowIndex === rows.length - 1 && columnIndex === 0,
                      '[tr:last-child_&:last-of-type]:rounded-br-lg':
                        rowIndex === rows.length - 1 &&
                        columnIndex === columns.length - 1,
                    },
                  )}
                >
                  <Button
                    variant="text"
                    shape="circle"
                    size="large"
                    disabled
                    aria-hidden="true"
                  >
                    <EllipsisVertical
                      className={cn('w-5 h-5 text-slate-400', {
                        'text-gray-300 animate-pulse':
                          tableFetching || tableLoading,
                      })}
                    />
                  </Button>
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
