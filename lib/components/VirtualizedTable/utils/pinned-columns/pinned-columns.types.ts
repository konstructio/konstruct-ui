import type { CSSProperties } from 'react';

export type PinnedWidths = Record<string, number>;

export type PinnedCellProps = {
  className?: string;
  style?: CSSProperties;
};
