import { Column, flexRender } from '@tanstack/react-table';
import { useCallback } from 'react';

import { cn } from '@/utils';

import { ChevronDown, ChevronUp } from '../../assets';
import { useTableContext } from '../../contexts';
import { RowData } from '../../VirtualizedTable.types';

export const Header = <TData extends RowData>() => {
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
    <thead className="font-semibold uppercase text-slate-500 text-xs not-italic bg-slate-100 w-full relative block overflow-hidden [clip-path:inset(-1px_-1px_0px_-1px_round_8px_8px_0px_0px)]">
      {table.getHeaderGroups().map(({ id, headers }) => (
        <tr key={id} className="table w-full table-fixed">
          {headers.map(({ id, column, getContext }) => (
            <th
              scope="col"
              key={id}
              className="px-4 py-3 text-left text-xs"
              style={{ width: column.columnDef.size }}
            >
              <span className="flex items-center gap-2 w-full">
                {flexRender(column.columnDef.header, getContext())}
                {column.getCanSort() && (
                  <div
                    className="flex flex-col text-slate-400 justify-center items-center gap-1"
                    role="presentation"
                  >
                    <ChevronUp
                      className={cn('w-2 h-2 cursor-pointer', {
                        'text-blue-600': column.getIsSorted() === 'asc',
                      })}
                      onClick={() => handleAscSort(column)}
                    />

                    <ChevronDown
                      className={cn('w-2 h-2 cursor-pointer', {
                        'text-blue-600': column.getIsSorted() === 'desc',
                      })}
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
