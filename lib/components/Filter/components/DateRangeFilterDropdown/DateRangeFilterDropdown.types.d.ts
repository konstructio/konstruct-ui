import { DateRange, DateRangeWithTime } from '../../../DateRangePicker/DateRangePicker.types';
export type DateRangeFilterDropdownProps = {
    /** Label for the filter button */
    label: string;
    /** Position of the dropdown relative to the button */
    position?: 'left' | 'right';
    /** Whether to show time inputs (default: false) */
    showTime?: boolean;
    /** Time format: '12' for 12-hour or '24' for 24-hour */
    timeFormat?: '12' | '24';
    /** Whether to show preset options (default: true) */
    showPresets?: boolean;
    /** Callback when the date range is applied */
    onApply?: (range?: DateRangeWithTime) => void;
    /** Callback when the date range changes */
    onRangeChange?: (range: DateRangeWithTime) => void;
    /** Initial date range */
    defaultRange?: DateRange;
    /** Minimum selectable date */
    minDate?: Date;
    /** Maximum selectable date */
    maxDate?: Date;
    /** Country code for locale formatting (default: 'US') */
    countryCode?: string;
};
