import { VariantProps } from 'class-variance-authority';
import { FC, PropsWithChildren } from '../../../node_modules/react';
import { Theme } from '../../domain/theme';
import { BadgeProps } from '../Badge/Badge.types';
import { filterVariants } from './Filter.variants';
import { BadgeMultiSelectProps, DateFilterDropdownProps, DateRangeFilterDropdownProps, ResetButtonProps } from './components';
/**
 * Configuration for a filter option.
 */
export type Option = {
    /** Unique identifier for the option */
    id: string;
    /** Display label for the option */
    label: string;
    /** Visual variant for the badge */
    variant?: BadgeProps['variant'];
};
/**
 * Props for the Filter component.
 * A compound component for building filter interfaces.
 *
 * @example
 * ```tsx
 * <Filter theme="civo">
 *   <Filter.BadgeMultiSelect
 *     label="Status"
 *     options={statusOptions}
 *     selectedValues={selectedStatuses}
 *     onChange={setSelectedStatuses}
 *   />
 *   <Filter.DateFilterDropdown
 *     label="Date"
 *     onDateChange={setDateRange}
 *   />
 *   <Filter.ResetButton onClick={resetFilters} />
 * </Filter>
 * ```
 */
export type FilterProps = VariantProps<typeof filterVariants> & PropsWithChildren & {
    /** Additional CSS classes for the filter wrapper */
    className?: string;
    /** Theme override for this component */
    theme?: Theme;
};
/**
 * Filter compound component type with sub-components.
 */
export type FilterComponentProps = FC<FilterProps> & {
    BadgeMultiSelect: FC<BadgeMultiSelectProps>;
    DateFilterDropdown: FC<DateFilterDropdownProps>;
    DateRangeFilterDropdown: FC<DateRangeFilterDropdownProps>;
    ResetButton: FC<ResetButtonProps>;
};
