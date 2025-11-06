import { EllipsisVertical } from 'lucide-react';

import { Button } from '@/components/Button/Button';

import { SkeletonProps } from './Skeleton.types';
import { cn } from '@/utils';

export const Skeleton = <T,>({ numberOfRows, table }: SkeletonProps<T>) => (
  <tbody className="text-slate-800 text-sm font-normal relative">
    {Array.from({ length: numberOfRows }).map((_, rowIndex) => (
      <tr
        key={`skeleton-row-${rowIndex}`}
        className="border border-x-transparent border-t-gray-200 border-b-transparent"
      >
        {table.getAllColumns().map((column) =>
          column.id !== 'actions' ? (
            <td
              key={`skeleton-${column.id}`}
              className={cn('px-4 py-1', column.columnDef.meta?.className)}
            >
              <div className="animate-in fade-in-0">
                <div className="bg-gray-200 animate-pulse rounded h-5 w-full" />
              </div>
            </td>
          ) : (
            <td
              key={`skeleton-${column.id}`}
              className={cn('px-4 py-1', column.columnDef.meta?.className)}
            >
              <Button
                variant="text"
                shape="circle"
                size="large"
                disabled
                aria-hidden="true"
              >
                <EllipsisVertical className="w-5 h-5 text-slate-400" />
              </Button>
            </td>
          ),
        )}
      </tr>
    ))}
  </tbody>
);
