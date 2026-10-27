import { Column, Table } from '@tanstack/react-table';
import { CSSProperties } from '../../../../../node_modules/react';
export type PinnedWidths = Record<string, number>;
export type PinnedCellProps = {
    className?: string;
    style?: CSSProperties;
};
/**
 * Distance from the scroll container edge a pinned column sticks at: the
 * widths of the pinned columns between it and that edge.
 */
export declare const getPinnedOffset: <TData>(table: Table<TData>, column: Column<TData, unknown>, widths: PinnedWidths) => number;
/** Whether the column is the pinned one that touches the scrolling columns. */
export declare const isPinnedBoundary: <TData>(table: Table<TData>, column: Column<TData, unknown>) => boolean;
/**
 * Sticky positioning for a pinned header or body cell. No z-index on purpose:
 * sticky already paints over the static cells beside it, and a stacking
 * context here would trap the tooltips rendered inside the cell.
 *
 * The divider between a pinned column and the scrolling ones only shows while
 * the scroll container flags itself as overflowing (`data-kvt-overflow`).
 */
export declare const getPinnedCellProps: <TData>(table: Table<TData>, column: Column<TData, unknown>, widths: PinnedWidths) => PinnedCellProps;
