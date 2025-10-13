import { flexRender } from '@tanstack/react-table';
import { FC } from 'react';

import { useTableContext } from '../../contexts';

export const Body: FC = () => {
  const { table } = useTableContext();

  return (
    <tbody className="text-slate-800 text-sm font-normal relative">
      {table.getRowModel().rows.map(({ id, getVisibleCells }) => (
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
      ))}
    </tbody>
  );
};
