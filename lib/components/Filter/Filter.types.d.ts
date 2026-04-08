import { VariantProps } from 'class-variance-authority';
import { FC, PropsWithChildren } from '../../../../node_modules/react';
import { Theme } from '../../../domain/theme';
import { Props as BadgeProps } from '../Badge/Badge.types';
import { filterVariants } from './Filter.variants';
import { BadgeMultiSelectProps, DateFilterDropdownProps, DateRangeFilterDropdownProps, ResetButtonProps, TextMultiSelectProps, TimeFilterDropdownProps } from './components';
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
    /** Icon displayed on the left of the badge */
    leftIcon?: BadgeProps['leftIcon'];
    /** Icon displayed on the right of the badge */
    rightIcon?: BadgeProps['rightIcon'];
    /** Show loading spinner in the badge */
    loading?: BadgeProps['loading'];
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
export type Props = VariantProps<typeof filterVariants> & PropsWithChildren & {
    /** Additional CSS classes for the filter wrapper */
    className?: string;
    /** Theme override for this component */
    theme?: Theme;
    /** Whether to close the filter dropdown automatically when Apply is clicked. Defaults to true. */
    closeOnApply?: boolean;
};
/** @deprecated Use Props instead */
export type FilterProps = Props;
/**
 * Filter compound component type with sub-components.
 */
export type FilterComponentProps = FC<Props> & {
    BadgeMultiSelect: FC<BadgeMultiSelectProps>;
    TextMultiSelect: FC<TextMultiSelectProps>;
    DateFilterDropdown: FC<DateFilterDropdownProps>;
    DateRangeFilterDropdown: FC<DateRangeFilterDropdownProps>;
    TimeFilterDropdown: FC<TimeFilterDropdownProps>;
    ResetButton: FC<ResetButtonProps>;
};
