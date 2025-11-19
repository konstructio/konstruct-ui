import type {
  ColumnDef as ColumnDefPrimitive,
  RowData as RowDataPrimitive,
} from '@tanstack/react-table';
import { VariantProps } from 'class-variance-authority';

import { virtualizeTableVariants } from './VirtualizedTable.variants';
import { FilterAction, Option } from './components/Filter/Filter.types';
import { UseQueryOptions } from '@tanstack/react-query';

export type RowData = RowDataPrimitive;

export type ColumnDef<TData extends RowData> = ColumnDefPrimitive<
  TData,
  string
>;

declare module '@tanstack/react-table' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    className?: string | ((row: TData) => string);
    attributes?: Record<string, string | number | boolean>;
    headerClassName?: string;
  }
}

export interface RowMetadata {
  className?: string;
  attributes?: Record<string, string | number | boolean>;
  [key: string]: unknown;
}

export type RowDataWithMeta = Record<string, unknown> & {
  meta?: RowMetadata;
};

export type MultiSelectFilter = {
  key: string;
  label: string;
  position?: 'right' | 'left';
  options: Option[];
};

export type Props<TData extends RowDataPrimitive> = VariantProps<
  typeof virtualizeTableVariants
> & {
  id: string | string[];
  ariaLabel?: string;
  columns: ColumnDefPrimitive<TData, string>[];
  data: TData[];
  className?: string;
  classNameHeaderActiveArrows?: string;
  classNameHeaderArrows?: string;
  classNameHeaderTable?: string;
  classNameTable?: string;
  classNameWrapperTable?: string;
  queryOptions?: Omit<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    UseQueryOptions<any, any, any, any>,
    'queryKey' | 'queryFn'
  >;
  isLoading?: boolean;
  fetchData?: (
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
