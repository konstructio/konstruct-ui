import { flexRender } from '@tanstack/react-table';
import { FunctionComponent } from 'react';

import { useTableContext } from '../../contexts';
import { BodyProps } from './Body.types';
import { Skeleton } from '@/components/Skeleton/Skeleton';

export const Body: FunctionComponent<BodyProps> = ({ isLoading }) => {
  const { table, pageSize } = useTableContext();

  return (
    <tbody className="text-slate-800 text-sm font-normal relative">
      {isLoading ? (
        <Skeleton numberOfRows={pageSize} table={table} />
      ) : (
        table.getRowModel().rows.map(({ id, getVisibleCells }) => (
          <tr
            key={id}
            className="border border-x-transparent border-t-gray-200 border-b-transparent table w-full table-fixed"
          >
            {getVisibleCells().map(({ id, column, getContext }) => (
              <td
                key={id}
                className="px-4 py-1 text-sm"
                style={{ width: column.getSize() }}
              >
                {flexRender(column.columnDef.cell, getContext())}
              </td>
            ))}
          </tr>
        ))
      )}
    </tbody>
  );
};
