import { Column, Table } from '@tanstack/react-table';
import { CSSProperties } from 'react';

import { cn } from '@/utils';

export type PinnedWidths = Record<string, number>;

export type PinnedCellProps = {
  className?: string;
  style?: CSSProperties;
};

const sumWidths = <TData>(
  columns: Column<TData, unknown>[],
  widths: PinnedWidths,
): number => {
  return columns.reduce((total, { id }) => total + (widths[id] ?? 0), 0);
};

/**
 * Distance from the scroll container edge a pinned column sticks at: the
 * widths of the pinned columns between it and that edge.
 */
export const getPinnedOffset = <TData>(
  table: Table<TData>,
  column: Column<TData, unknown>,
  widths: PinnedWidths,
): number => {
  const pinned = column.getIsPinned();

  if (pinned === 'left') {
    const columns = table.getLeftLeafColumns();
    const index = columns.findIndex(({ id }) => id === column.id);

    return sumWidths(columns.slice(0, index), widths);
  }

  if (pinned === 'right') {
    const columns = table.getRightLeafColumns();
    const index = columns.findIndex(({ id }) => id === column.id);

    return sumWidths(columns.slice(index + 1), widths);
  }

  return 0;
};

/** Whether the column is the pinned one that touches the scrolling columns. */
export const isPinnedBoundary = <TData>(
  table: Table<TData>,
  column: Column<TData, unknown>,
): boolean => {
  const pinned = column.getIsPinned();

  if (pinned === 'left') {
    return table.getLeftLeafColumns().at(-1)?.id === column.id;
  }

  if (pinned === 'right') {
    return table.getRightLeafColumns()[0]?.id === column.id;
  }

  return false;
};

/**
 * Sticky positioning for a pinned header or body cell. No z-index on purpose:
 * sticky already paints over the static cells beside it, and a stacking
 * context here would trap the tooltips rendered inside the cell.
 *
 * The divider between a pinned column and the scrolling ones only shows while
 * the scroll container flags itself as overflowing (`data-kvt-overflow`).
 */
export const getPinnedCellProps = <TData>(
  table: Table<TData>,
  column: Column<TData, unknown>,
  widths: PinnedWidths,
): PinnedCellProps => {
  const pinned = column.getIsPinned();

  if (!pinned) {
    return {};
  }

  const offset = getPinnedOffset(table, column, widths);
  const isBoundary = isPinnedBoundary(table, column);

  if (pinned === 'left') {
    return {
      className: cn(
        'kvt-pinned kvt-pinned-left sticky',
        isBoundary &&
          '[[data-kvt-overflow]_&]:border-r border-r-gray-200 dark:border-r-metal-700',
      ),
      style: { left: offset },
    };
  }

  return {
    className: cn(
      'kvt-pinned kvt-pinned-right sticky',
      isBoundary &&
        '[[data-kvt-overflow]_&]:border-l border-l-gray-200 dark:border-l-metal-700',
    ),
    style: { right: offset },
  };
};
