import {
  DateRange,
  DateRangePresetOption,
  DateRangeWithTime,
} from '@/components/DateRangePicker/DateRangePicker.types';

export type CustomDateRangeFilterDropdownProps = {
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
  /** Replaces the built-in preset options; see `DateRangePicker`'s `presets`. */
  presets?: DateRangePresetOption[];
  /** Reveal the calendar only on the manual-selection preset (default: false). */
  revealCalendarOnCustom?: boolean;
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
  /** Title of the preset panel (default: 'Time period') */
  labelTimePeriod?: string;
  /** Label for the start date field (default: 'From') */
  labelStartDate?: string;
  /** Label for the end date field (default: 'To') */
  labelEndDate?: string;
  /** Marks the From/To fields with a required indicator (default: true) */
  requiredDates?: boolean;
  /** Label for the apply button (default: 'Apply') */
  labelApply?: string;
  /** Label for the reset button (default: 'Clear') */
  labelReset?: string;
  /** Apply as soon as a preset is selected (default: false) */
  applyOnPresetSelect?: boolean;
};
