import { flexRender } from '@tanstack/react-table';
import { Fragment } from 'react';

import { Skeleton } from '@/components/VirtualizedTable/components/Skeleton/Skeleton';
import { cn } from '@/utils';

import { useTableContext } from '../../contexts';
import { RowData, RowDataWithMeta } from '../../VirtualizedTable.types';
import { ExpandableRow } from '../ExpandableRow/ExpandableRow';

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
    classNameExpandedContent,
    enableHoverRow,
    classNameHoverRow,
    classNameActiveExpandedRow,
    renderExpandedRow,
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
        const hasExpandedContent = !!meta.expandedRow || !!renderExpandedRow;

        return (
          <Fragment key={id}>
            <tr
              className={cn(
                { 'group/row': enableHoverRow },
                'border-b',
                'border-b-gray-200',
                'dark:text-metal-50',
                'dark:border-b-metal-700',
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
                      {
                        'group-hover/row:bg-zinc-100 dark:group-hover/row:bg-metal-800':
                          enableHoverRow,
                        [cn(
                          'bg-zinc-100 dark:bg-metal-800',
                          classNameActiveExpandedRow,
                        )]: !!isExpanded,
                      },
                      classNameHoverRow,
                      classNameFromMeta,
                      {
                        'first:rounded-bl-lg':
                          rowIndex === rows.length - 1 &&
                          columnIndex === 0 &&
                          !showPagination &&
                          !isExpanded,
                        'last:rounded-br-lg':
                          rowIndex === rows.length - 1 &&
                          columnIndex === columns.length - 1 &&
                          !showPagination &&
                          !isExpanded,
                        'dark:[tr:last-child_&]:border-b': !showPagination,
                      },
                    )}
                    data-expanded={isExpanded ? true : undefined}
                    {...(column.columnDef.meta?.attributes ?? {})}
                  >
                    {flexRender(column.columnDef.cell, getContext())}
                  </td>
                );
              })}
            </tr>

            {hasExpandedContent && (
              <ExpandableRow
                classNameExpandedCell={classNameExpandedCell}
                classNameExpandedContent={classNameExpandedContent}
                classNameExpandedRow={classNameExpandedRow}
                colSpan={columns.length}
                id={id}
                isExpanded={!!isExpanded}
                isLastRow={rowIndex === rows.length - 1 && !showPagination}
              >
                {meta.expandedRow ?? renderExpandedRow?.(original)}
              </ExpandableRow>
            )}
          </Fragment>
        );
      })}
    </tbody>
  );
};
