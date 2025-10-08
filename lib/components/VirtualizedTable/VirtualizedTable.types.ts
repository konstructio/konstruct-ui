import { ColumnDef, RowData as RowDataPrimitive } from '@tanstack/react-table';
import { VariantProps } from 'class-variance-authority';

import { virtualizeTableVariants } from './VirtualizedTable.variants';

export type RowData = RowDataPrimitive;

export type Props<TData extends RowDataPrimitive> = VariantProps<
  typeof virtualizeTableVariants
> & {
  ariaLabel?: string;
  columns: ColumnDef<TData, string>[];
  data: TData[];
} & (
    | {
        showPagination: true;
        showTotalItems?: boolean;
        showDropdownPagination?: boolean;
        showDotPagination?: boolean;
        showFormPagination?: boolean;
      }
    | {
        showPagination?: false | undefined;
        showTotalItems?: never;
        showDropdownPagination?: never;
        showDotPagination?: never;
        showFormPagination?: never;
      }
  ) &
  (
    | {
        showFilter: true;
        filterSearchPlaceholder?: string;
      }
    | {
        showFilter?: false | undefined;
        filterSearchPlaceholder?: never;
      }
  );
