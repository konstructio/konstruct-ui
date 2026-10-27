import { Column, Table } from '@tanstack/react-table';

import {
  getPinnedCellProps,
  getPinnedOffset,
  isPinnedBoundary,
} from './pinned-columns';

type Row = { id: string };

const column = (id: string, pinned: 'left' | 'right' | false) => {
  return { id, getIsPinned: () => pinned } as unknown as Column<Row, unknown>;
};

const name = column('name', 'left');
const region = column('region', 'left');
const size = column('size', false);
const status = column('status', 'right');
const actions = column('actions', 'right');

const table = {
  getLeftLeafColumns: () => [name, region],
  getRightLeafColumns: () => [status, actions],
} as unknown as Table<Row>;

const widths = { name: 160, region: 100, status: 120, actions: 60 };

describe('getPinnedOffset', () => {
  it('should stick the outermost pinned columns to the edges', () => {
    expect(getPinnedOffset(table, name, widths)).toBe(0);
    expect(getPinnedOffset(table, actions, widths)).toBe(0);
  });

  it('should offset inner pinned columns by the widths between them and the edge', () => {
    expect(getPinnedOffset(table, region, widths)).toBe(160);
    expect(getPinnedOffset(table, status, widths)).toBe(60);
  });

  it('should treat unmeasured columns as zero width', () => {
    expect(getPinnedOffset(table, region, {})).toBe(0);
    expect(getPinnedOffset(table, status, { actions: 40 })).toBe(40);
  });

  it('should return zero for a column that is not pinned', () => {
    expect(getPinnedOffset(table, size, widths)).toBe(0);
  });
});

describe('isPinnedBoundary', () => {
  it('should flag only the pinned columns that touch the scrolling ones', () => {
    expect(isPinnedBoundary(table, name)).toBe(false);
    expect(isPinnedBoundary(table, region)).toBe(true);
    expect(isPinnedBoundary(table, status)).toBe(true);
    expect(isPinnedBoundary(table, actions)).toBe(false);
    expect(isPinnedBoundary(table, size)).toBe(false);
  });
});

describe('getPinnedCellProps', () => {
  it('should return nothing for a column that is not pinned', () => {
    expect(getPinnedCellProps(table, size, widths)).toEqual({});
  });

  it('should position a left-pinned column from the left edge', () => {
    const { className, style } = getPinnedCellProps(table, region, widths);

    expect(style).toEqual({ left: 160 });
    expect(className).toContain('sticky');
    expect(className).toContain('kvt-pinned-left');
    expect(className).toContain('border-r');
  });

  it('should position a right-pinned column from the right edge', () => {
    const { className, style } = getPinnedCellProps(table, actions, widths);

    expect(style).toEqual({ right: 0 });
    expect(className).toContain('kvt-pinned-right');
    expect(className).not.toContain('border-l');
  });
});
