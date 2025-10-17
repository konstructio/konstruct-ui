import type {
  ColumnDef as ColumnDefPrimitive,
  RowData as RowDataPrimitive,
} from '@tanstack/react-table';
import { VariantProps } from 'class-variance-authority';

import { virtualizeTableVariants } from './VirtualizedTable.variants';
import { FilterAction, OptionType } from './components/Filter/Filter.types';

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
  className?: string;
  classNameHeaderActiveArrows?: string;
  classNameHeaderArrows?: string;
  classNameHeaderTable?: string;
  classNameTable?: string;
  classNameWrapperTable?: string;
  fetchData: (
    params: Record<string, string | number | string[] | number[] | undefined>,
  ) => Promise<{ data: TData[]; totalItemsCount?: number }>;
} & (
    | {
        showPagination: true;
        showTotalItems?: boolean;
        showDropdownPagination?: boolean;
        showDotPagination?: boolean;
        showFormPagination?: boolean;
        pageSizes?: number[] | string[];
        totalItems: number;
      }
    | {
        showPagination?: false | undefined;
        showTotalItems?: never;
        showDropdownPagination?: never;
        showDotPagination?: never;
        showFormPagination?: never;
        pageSizes?: never;
        totalItems?: never;
      }
  ) &
  (
    | {
        filterSearchPlaceholder?: string;
        multiSelectFilter?: MultiSelectFilter[];
        showFilter: true;
        showFilterInput?: boolean;
        filterActions?: FilterAction[];
        showResetButton?: boolean;
      }
    | {
        filterSearchPlaceholder?: never;
        multiSelectFilter?: never;
        showFilter?: false | undefined;
        showFilterInput?: never;
        filterActions?: FilterAction[];
        showResetButton?: never;
      }
  );
