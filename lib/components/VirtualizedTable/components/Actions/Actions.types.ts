import { CellContext } from '@tanstack/react-table';

import { RowData } from '../../VirtualizedTable.types';

export type Action<TData> = {
  label: string;
  onClick: (rowData: TData) => void;
};

export type Props<TData extends RowData> = CellContext<TData, unknown> & {
  actions: Action<TData>[];
};
