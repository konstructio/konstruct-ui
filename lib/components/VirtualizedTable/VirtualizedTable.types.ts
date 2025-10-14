import type {
  ColumnDef as ColumnDefPrimitive,
  RowData as RowDataPrimitive,
} from '@tanstack/react-table';
import { VariantProps } from 'class-variance-authority';

import { virtualizeTableVariants } from './VirtualizedTable.variants';
import { OptionType } from './components/Filter/Filter.types';

export type RowData = RowDataPrimitive;

export type ColumnDef<TData extends RowData> = ColumnDefPrimitive<
  TData,
  string
>;

export type MultiSelectFilter = {
  key: string;
  label: string;
  position?: 'right' | 'left';
  options: OptionType[];
};

export type Props<TData extends RowDataPrimitive> = VariantProps<
  typeof virtualizeTableVariants
> & {
  id: string;
  ariaLabel?: string;
  columns: ColumnDefPrimitive<TData, string>[];
  data: TData[];
  totalItems: number;
  fetchData: (
    params: Record<string, string | number | string[] | number[] | undefined>,
  ) => Promise<{ data: TData[]; totalItemsCount: number }>;
  classNameHeaderTable?: string;
  classNameHeaderArrows?: string;
  classNameHeaderActiveArrows?: string;
} & (
    | {
        showPagination: true;
        showTotalItems?: boolean;
        showDropdownPagination?: boolean;
        showDotPagination?: boolean;
        showFormPagination?: boolean;
        pageSizes?: number[] | string[];
      }
    | {
        showPagination?: false | undefined;
        showTotalItems?: never;
        showDropdownPagination?: never;
        showDotPagination?: never;
        showFormPagination?: never;
        pageSizes?: never;
      }
  ) &
  (
    | {
        filterSearchPlaceholder?: string;
        multiSelectFilter?: MultiSelectFilter[];
        showFilter: true;
        showFilterInput?: boolean;
      }
    | {
        filterSearchPlaceholder?: never;
        multiSelectFilter?: never;
        showFilter?: false | undefined;
        showFilterInput?: never;
      }
  );
