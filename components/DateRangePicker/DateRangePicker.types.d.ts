import { VariantProps } from 'class-variance-authority';
import { Theme } from '../../domain/theme';
import { CalendarPanelClassNames, DayPickerClassNames } from './components/CalendarPanel/CalendarPanel.types';
import { DateTimeInputsClassNames } from './components/DateTimeInputs/DateTimeInputs.types';
import { PresetLabels, PresetPanelClassNames } from './components/PresetPanel/PresetPanel.types';
import { dateRangePickerVariants } from './DateRangePicker.variants';
import { DateRange, DateRangePreset, DateRangeWithTime, TimeRange } from './contexts';
export type { DateRange, DateRangePreset, DateRangeWithTime, TimeRange };
export type { CalendarPanelClassNames, DateTimeInputsClassNames, DayPickerClassNames, PresetLabels, PresetPanelClassNames, };
/**
 * Props for the DateRangePicker component.
 *
 * @example
 * ```tsx
 * <DateRangePicker
 *   defaultRange={{ from: new Date(), to: new Date() }}
 *   onRangeChange={(range) => console.log(range)}
 * />
 * ```
 */
export type DateRangePickerProps = VariantProps<typeof dateRangePickerVariants> & {
    /** Initial date range */
    defaultRange?: DateRange;
    /** Initial time range */
    defaultTime?: TimeRange;
    /** Initially selected preset (default: 'custom') */
    defaultPreset?: DateRangePreset;
    /** Callback when the range changes (includes time) */
    onRangeChange?: (range: DateRangeWithTime) => void;
    /** Callback when the date changes (start or end date, without time) */
    onDateChange?: (range: DateRange) => void;
    /** Time format: '12' for 12-hour or '24' for 24-hour */
    timeFormat?: '12' | '24';
    /** Whether to show time inputs (default: true) */
    showTime?: boolean;
    /** Theme override */
    theme?: Theme;
    /** Disabled state */
    disabled?: boolean;
    /** Form field name (used for hidden inputs: {name}-start and {name}-end) */
    name?: string;
    /** Label for the component */
    label?: string;
    /** Additional CSS classes for the label wrapper */
    labelWrapperClassName?: string;
    /** Whether the field is required */
    isRequired?: boolean;
    /** Animation duration in milliseconds for month transitions (default: 400) */
    animationDuration?: number;
    /** Additional CSS classes */
    className?: string;
    /** Specific days that cannot be selected */
    blockedDays?: Date[];
    /** Months that cannot be selected (all days in these months will be disabled) */
    blockedMonths?: {
        year: number;
        month: number;
    }[];
    /** Minimum selectable date */
    minDate?: Date;
    /** Maximum selectable date */
    maxDate?: Date;
    /** Hide navigation arrows when they are disabled (default: false) */
    hideDisabledNavigation?: boolean;
    /** Show days from previous/next month in the calendar grid (default: false) */
    showOutsideDays?: boolean;
    /**
     * Navigation mode for the calendar months (default: 'independent')
     * - 'independent': Each month has its own navigation arrows and can move independently
     *   (first month cannot go on or past second month and vice versa)
     * - 'together': Both months navigate together (prev/next moves both by one month)
     */
    navigationMode?: 'independent' | 'together';
    /** Aria label for the calendar container (default: 'Date range picker calendar') */
    ariaLabelCalendar?: string;
    /** Aria label for previous month button in together mode (default: 'Previous month') */
    ariaLabelPrevMonth?: string;
    /** Aria label for next month button in together mode (default: 'Next month') */
    ariaLabelNextMonth?: string;
    /** Aria label for previous month button for start date in independent mode (default: 'Previous month for start date') */
    ariaLabelPrevMonthStart?: string;
    /** Aria label for next month button for start date in independent mode (default: 'Next month for start date') */
    ariaLabelNextMonthStart?: string;
    /** Aria label for previous month button for end date in independent mode (default: 'Previous month for end date') */
    ariaLabelPrevMonthEnd?: string;
    /** Aria label for next month button for end date in independent mode (default: 'Next month for end date') */
    ariaLabelNextMonthEnd?: string;
    /** Label for start date input (default: 'Start date') */
    labelStartDate?: string;
    /** Label for end date input (default: 'End date') */
    labelEndDate?: string;
    /** Label for time inputs (default: 'Time') */
    labelTime?: string;
    /** Aria label for start date input (default: 'Start date') */
    ariaLabelStartDate?: string;
    /** Aria label for end date input (default: 'End date') */
    ariaLabelEndDate?: string;
    /** Error message for invalid date format (default: 'Invalid date') */
    errorInvalidDate?: string;
    /** Error message for unavailable date (default: 'Date is not available') */
    errorDateNotAvailable?: string;
    /** Whether to show the preset panel (default: true) */
    showPresets?: boolean;
    /** Label for the time period section (default: 'Time period') */
    labelTimePeriod?: string;
    /** Aria label for the time period section (default: 'Time period options') */
    ariaLabelTimePeriod?: string;
    /** Custom labels for preset options */
    presetLabels?: PresetLabels;
    /** Custom class names for different parts of the component */
    classNames?: DateRangePickerClassNames;
};
/** Custom class names for different parts of the DateRangePicker component */
export type DateRangePickerClassNames = {
    /** Class name for the main container */
    container?: string;
    /** Class name for the right panel (contains inputs and calendar) */
    rightPanel?: string;
    /** Class names for the preset panel */
    presetPanel?: PresetPanelClassNames;
    /** Class names for the date/time inputs section */
    dateTimeInputs?: DateTimeInputsClassNames;
    /** Class names for the calendar panel */
    calendarPanel?: CalendarPanelClassNames;
};
