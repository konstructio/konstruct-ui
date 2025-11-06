import { EllipsisVertical } from 'lucide-react';

import { SkeletonProps } from './Skeleton.types';
import { Button } from '..';

export const Skeleton = <T,>({ numberOfRows, table }: SkeletonProps<T>) =>
  Array.from({ length: numberOfRows }).map((_, rowIndex) => (
    <tr
      key={`skeleton-row-${rowIndex}`}
      className="border border-x-transparent border-t-gray-200 border-b-transparent table w-full table-fixed"
    >
      {table.getAllColumns().map((column) =>
        column.id !== 'actions' ? (
          <td
            key={`skeleton-${column.id}`}
            className="px-4"
            style={{ width: column.getSize() }}
          >
            <div className="bg-gray-200 animate-pulse rounded h-5" />
          </td>
        ) : (
          <td
            key={`skeleton-${column.id}`}
            className=""
            style={{ width: column.getSize() }}
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
  ));
