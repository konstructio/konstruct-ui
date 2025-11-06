import { RowData } from '../../VirtualizedTable.types';

export type BodyProps<_TData extends RowData = RowData> = {
  isLoading?: boolean;
};
