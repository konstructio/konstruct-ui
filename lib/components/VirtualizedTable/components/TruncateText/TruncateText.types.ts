import { CellContext } from '@tanstack/react-table';

import { RowData } from '../../VirtualizedTable.types';

export type Props = CellContext<RowData, unknown> & {
  value?: string;
};
