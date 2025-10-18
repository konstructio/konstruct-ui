import { CellContext } from '@tanstack/react-table';

import { RowData } from '../../VirtualizedTable.types';

export type Action<TData> = {
  label: string | React.ReactNode;
  onClick: (rowData: TData) => void;
  className?: string;
};

export type Props<TData extends RowData> = CellContext<TData, unknown> & {
  actions: Action<TData>[];
};
