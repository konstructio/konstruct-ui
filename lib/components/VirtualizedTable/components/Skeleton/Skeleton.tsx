import { EllipsisVertical } from 'lucide-react';

import { Button } from '@/components/Button/Button';

import {
  BORDER_EDGE_CLASSES,
  HIDE_BELOW_CLASS,
  ROUNDED_BOTTOM_EDGE_CLASSES,
} from '../../constants';
import { useTableContext } from '../../contexts';
import { getPinnedCellProps, getResponsiveEdgeClasses } from '../../utils';

import { SkeletonProps } from './Skeleton.types';
import { cn } from '@/utils';

export const Skeleton = <T,>({ numberOfRows, table }: SkeletonProps<T>) => {
  const { tableLoading, pinnedWidths } = useTableContext();
  const rows = Array.from({ length: numberOfRows });

  return (
    <tbody className="kvt-skeleton text-slate-800 text-sm font-normal relative">
      {rows.map((_, rowIndex) => {
        const columns = table.getVisibleLeafColumns();
        const hideBelows = columns.map(
          (column) => column.columnDef.meta?.hideBelow,
        );
        const isResponsive = hideBelows.some(Boolean);
        const edgeClasses = (columnIndex: number) => [
          getResponsiveEdgeClasses(
            hideBelows,
            columnIndex,
            BORDER_EDGE_CLASSES,
          ),
          rowIndex === rows.length - 1 &&
            getResponsiveEdgeClasses(
              hideBelows,
              columnIndex,
              ROUNDED_BOTTOM_EDGE_CLASSES,
            ),
        ];

        return (
          <tr
            key={`skeleton-row-${rowIndex}`}
            className={cn(
              'border-b',
              'border-b-gray-200',
              'bg-transparent',
              'last:border-b-transparent',
            )}
          >
            {columns.map((column, columnIndex) => {
              const { hideBelow } = column.columnDef.meta ?? {};
              const pinned = getPinnedCellProps(table, column, pinnedWidths);

              if (column.id !== 'actions') {
                return (
                  <td
                    key={`skeleton-${column.id}`}
                    style={pinned.style}
                    className={cn(
                      'px-4',
                      'py-1',
                      'bg-white',
                      'dark:bg-metal-900',
                      'dark:border-t',
                      'dark:border-metal-700',
                      !isResponsive && 'dark:first:border-l',
                      !isResponsive && 'dark:last:border-r',
                      isResponsive && edgeClasses(columnIndex),
                      'dark:[tr:last-child_&]:border-b',
                      pinned.className,
                      hideBelow && HIDE_BELOW_CLASS[hideBelow],
                      column.columnDef.meta?.className,
                      {
                        '[tr:last-child_&:first-of-type]:rounded-bl-lg':
                          !isResponsive &&
                          rowIndex === rows.length - 1 &&
                          columnIndex === 0,
                        '[tr:last-child_&:last-of-type]:rounded-br-lg':
                          !isResponsive &&
                          rowIndex === rows.length - 1 &&
                          columnIndex === columns.length - 1,
                      },
                    )}
                  >
                    <div className="animate-in fade-in-0">
                      <div
                        className={cn(
                          'bg-gray-200',
                          'dark:bg-metal-700',
                          'animate-pulse',
                          'rounded',
                          'h-5',
                          'w-full',
                        )}
                      />
                    </div>
                  </td>
                );
              }

              return (
                <td
                  key={`skeleton-${column.id}`}
                  style={pinned.style}
                  className={cn(
                    'px-4',
                    'py-1',
                    'bg-white',
                    'dark:bg-metal-900',
                    'dark:border-t',
                    'dark:border-metal-700',
                    !isResponsive && 'dark:first:border-l',
                    !isResponsive && 'dark:last:border-r',
                    isResponsive && edgeClasses(columnIndex),
                    'dark:[tr:last-child_&]:border-b',
                    pinned.className,
                    hideBelow && HIDE_BELOW_CLASS[hideBelow],
                    column.columnDef.meta?.className,
                    {
                      '[tr:last-child_&:first-of-type]:rounded-bl-lg':
                        !isResponsive &&
                        rowIndex === rows.length - 1 &&
                        columnIndex === 0,
                      '[tr:last-child_&:last-of-type]:rounded-br-lg':
                        !isResponsive &&
                        rowIndex === rows.length - 1 &&
                        columnIndex === columns.length - 1,
                    },
                  )}
                >
                  <Button
                    variant="link"
                    shape="circle"
                    size="large"
                    disabled
                    aria-hidden="true"
                  >
                    <EllipsisVertical
                      className={cn(
                        'w-5',
                        'h-5',
                        'text-slate-400',
                        'dark:text-metal-700',
                        {
                          'text-gray-300 animate-pulse': tableLoading,
                        },
                      )}
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
