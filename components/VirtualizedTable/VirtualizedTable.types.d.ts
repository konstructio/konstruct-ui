import { ColumnDef as ColumnDefPrimitive, ExpandedState, OnChangeFn, RowData as RowDataPrimitive } from '@tanstack/react-table';
import { VariantProps } from 'class-variance-authority';
import { ReactNode } from '../../../node_modules/react';
import { ButtonProps } from '../Button/Button.types';
import { DateRange, DateRangeWithTime } from '../DateRangePicker/DateRangePicker.types';
import { TimePreset } from '../Filter/components/TimeFilterDropdown/TimeFilterDropdown.types';
import { virtualizeTableVariants } from './VirtualizedTable.variants';
import { Option } from './components/Filter/Filter.types';
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
    expandedRow?: ReactNode;
    [key: string]: unknown;
}
export type RowDataWithMeta = Record<string, unknown> & {
    meta?: RowMetadata;
};
/**
 * Base shape shared by all filter configurations.
 */
type FilterConfigBase = {
    /** Unique key for the filter, used as query parameter key */
    key: string;
    /** Display label for the filter trigger button */
    label: string;
    /** Position of the dropdown relative to the button */
    position?: 'right' | 'left';
};
/**
 * Configuration for a badge multi-select filter.
 * Options are displayed with Badge components.
 */
export type BadgeMultiSelectFilterConfig = FilterConfigBase & {
    /** Filter type — defaults to 'badgeMultiSelect' when omitted */
    type?: 'badgeMultiSelect';
    /** Available filter options */
    options: Option[];
};
/**
 * Configuration for a text multi-select filter.
 * Options are displayed as plain text labels.
 */
export type TextMultiSelectFilterConfig = FilterConfigBase & {
    type: 'textMultiSelect';
    /** Available filter options */
    options: Option[];
};
/**
 * Configuration for a single date filter.
 */
export type DateFilterConfig = FilterConfigBase & {
    type: 'date';
    /** Country code for locale formatting (default: 'US') */
    countryCode?: string;
};
/**
 * Configuration for a date range filter.
 */
export type DateRangeFilterConfig = FilterConfigBase & {
    type: 'dateRange';
    /** Whether to show time inputs (default: false) */
    showTime?: boolean;
    /** Time format: '12' for 12-hour or '24' for 24-hour */
    timeFormat?: '12' | '24';
    /** Whether to show preset options (default: true) */
    showPresets?: boolean;
    /** Initial date range */
    defaultRange?: DateRange;
    /** Minimum selectable date */
    minDate?: Date;
    /** Maximum selectable date */
    maxDate?: Date;
    /** Country code for locale formatting (default: 'US') */
    countryCode?: string;
    /** Callback when the date range changes */
    onRangeChange?: (range: DateRangeWithTime) => void;
};
/**
 * Configuration for an action button rendered inline with filters.
 */
export type ActionFilterConfig = {
    type: 'action';
    /** Text displayed inside the button. Also used as the React key. */
    label: string;
    /** Icon rendered before the label */
    leftIcon?: ReactNode;
    /** Icon rendered after the label */
    rightIcon?: ReactNode;
} & Omit<ButtonProps, 'children' | 'type'>;
/**
 * Configuration for a time filter with optional presets and a TimePicker.
 */
export type TimeFilterConfig = FilterConfigBase & {
    type: 'time';
    /** Time format: '12' for AM/PM or '24' for military time (default: '12') */
    format?: '12' | '24';
    /** Preset time options for quick selection */
    presets?: TimePreset[];
    /** Whether to show the TimePicker for custom time selection (default: true) */
    showTimePicker?: boolean;
};
/**
 * Union of all supported filter configurations.
 */
export type FilterConfig = BadgeMultiSelectFilterConfig | TextMultiSelectFilterConfig | DateFilterConfig | DateRangeFilterConfig | ActionFilterConfig | TimeFilterConfig;
/**
 * @deprecated Use FilterConfig instead
 */
export type MultiSelectFilter = BadgeMultiSelectFilterConfig;
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
    enableHoverRow?: boolean;
    classNameHoverRow?: string;
    queryOptions?: Omit<UseQueryOptions<any, any, any, any>, 'queryKey' | 'queryFn'>;
    isLoading?: boolean;
    getRowId?: (originalRow: TData, index: number) => string;
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
    /** @deprecated Use `filters` instead */
    multiSelectFilter?: MultiSelectFilter[];
    filters?: FilterConfig[];
    showFilter: true;
    showFilterInput?: boolean;
    /** @deprecated Use `ActionFilterConfig` items in `filters` instead */
    filterActions?: ActionFilterConfig[];
    showResetButton?: boolean;
    resetButtonClassName?: string;
    closeOnApply?: boolean;
} | {
    filterSearchPlaceholder?: never;
    /** @deprecated Use `filters` instead */
    multiSelectFilter?: never;
    filters?: never;
    showFilter?: false | undefined;
    showFilterInput?: never;
    /** @deprecated Use `ActionFilterConfig` items in `filters` instead */
    filterActions?: ActionFilterConfig[];
    showResetButton?: never;
    resetButtonClassName?: never;
    closeOnApply?: never;
}) & ({
    enableExpandedRow: true;
    expandedState?: ExpandedState;
    defaultExpanded?: ExpandedState;
    classNameExpandedRow?: string;
    classNameExpandedCell?: string;
    classNameExpandedContent?: string;
    classNameExpandedHeader?: string;
    classNameActiveExpandedRow?: string;
    onExpandedChange?: OnChangeFn<ExpandedState>;
    renderExpandedRow?: (data: TData) => ReactNode;
    keepExpandColumnVisible?: boolean | Record<string, boolean>;
} | {
    enableExpandedRow?: false | undefined;
    expandedState?: never;
    defaultExpanded?: never;
    classNameExpandedRow?: never;
    classNameExpandedCell?: never;
    classNameExpandedContent?: never;
    classNameExpandedHeader?: never;
    classNameActiveExpandedRow?: never;
    onExpandedChange?: never;
    renderExpandedRow?: never;
    keepExpandColumnVisible?: never;
});
export {};
