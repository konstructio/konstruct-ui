import { ColumnDef as ColumnDefPrimitive, RowData as RowDataPrimitive } from '@tanstack/react-table';
import { VariantProps } from 'class-variance-authority';
import { virtualizeTableVariants } from './VirtualizedTable.variants';
import { FilterAction, Option } from './components/Filter/Filter.types';
import { UseQueryOptions } from '@tanstack/react-query';
/** Base row data type from TanStack Table */
export type RowData = RowDataPrimitive;
export type ColumnDef<TData extends RowData> = ColumnDefPrimitive<TData, string>;
declare module '@tanstack/react-table' {
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
/**
 * Configuration for a multi-select filter in the table.
 */
export type MultiSelectFilter = {
    /** Unique key for the filter */
    key: string;
    /** Display label for the filter */
    label: string;
    /** Position of the filter dropdown */
    position?: 'right' | 'left';
    /** Available filter options */
    options: Option[];
};
/**
 * Props for the VirtualizedTable component.
 * A feature-rich data table with filtering, pagination, and sorting.
 *
 * @example
 * ```tsx
 * <VirtualizedTable
 *   id="users-table"
 *   ariaLabel="Users list"
 *   columns={[
 *     { accessorKey: 'name', header: 'Name' },
 *     { accessorKey: 'email', header: 'Email' },
 *   ]}
 *   data={users}
 *   totalItems={totalUsers}
 *   showPagination
 *   showFilter
 *   showFilterInput
 *   filterSearchPlaceholder="Search users..."
 * />
 * ```
 */
export type Props<TData extends RowDataPrimitive> = VariantProps<typeof virtualizeTableVariants> & {
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
    queryOptions?: Omit<UseQueryOptions<any, any, any, any>, 'queryKey' | 'queryFn'>;
    isLoading?: boolean;
    fetchData?: (params: Record<string, string | number | string[] | number[] | undefined>) => Promise<{
        data: TData[];
        totalItemsCount?: number;
    }>;
} & ({
    showPagination: true;
    showTotalItems?: boolean;
    showDropdownPagination?: boolean;
    showDotPagination?: boolean;
    showFormPagination?: boolean;
    pageSizes?: number[] | string[];
    totalItems: number;
} | {
    showPagination?: false | undefined;
    showTotalItems?: never;
    showDropdownPagination?: never;
    showDotPagination?: never;
    showFormPagination?: never;
    pageSizes?: never;
    totalItems?: never;
}) & ({
    filterSearchPlaceholder?: string;
    multiSelectFilter?: MultiSelectFilter[];
    showFilter: true;
    showFilterInput?: boolean;
    filterActions?: FilterAction[];
    showResetButton?: boolean;
    resetButtonClassName?: string;
} | {
    filterSearchPlaceholder?: never;
    multiSelectFilter?: never;
    showFilter?: false | undefined;
    showFilterInput?: never;
    filterActions?: FilterAction[];
    showResetButton?: never;
    resetButtonClassName?: never;
});
