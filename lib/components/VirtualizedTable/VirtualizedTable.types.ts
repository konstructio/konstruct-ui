import { ColumnDef, RowData as RowDataPrimitive } from '@tanstack/react-table';
import { VariantProps } from 'class-variance-authority';

import { virtualizeTableVariants } from './VirtualizedTable.variants';

export type RowData = RowDataPrimitive;

export type Props<TData extends RowDataPrimitive> = VariantProps<
  typeof virtualizeTableVariants
> & {
  columns: ColumnDef<TData, string>[];
  data: TData[];
};
