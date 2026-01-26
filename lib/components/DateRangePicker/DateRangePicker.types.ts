import { VariantProps } from 'class-variance-authority';

import { Theme } from '@/domain/theme';

import { dateRangePickerVariants } from './DateRangePicker.variants';

export type DateRangePreset =
  | 'today'
  | 'current-month'
  | 'custom'
  | 'last-7-days'
  | 'last-2-weeks';

export type DateRange = {
  from?: Date;
  to?: Date;
};

export type TimeRange = {
  startTime?: Date;
  endTime?: Date;
};

export type DateRangeWithTime = DateRange & TimeRange;

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
export type DateRangePickerProps = VariantProps<
  typeof dateRangePickerVariants
> & {
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
  /** Whether the field is required */
  isRequired?: boolean;
  /** Animation duration in milliseconds for month transitions (default: 400) */
  animationDuration?: number;
  /** Additional CSS classes */
  className?: string;
};

export type DateRangePickerContextValue = {
  /** Current selected date range */
  range: DateRange;
  /** Current time values */
  time: TimeRange;
  /** Current active preset */
  preset: DateRangePreset;
  /** Currently displayed months [left, right] */
  displayedMonths: [Date, Date];
  /** Time format */
  timeFormat: '12' | '24';
  /** Whether to show time inputs */
  showTime: boolean;
  /** Form field name */
  name?: string;
  /** Disabled state */
  disabled: boolean;
  /** Animation duration in milliseconds */
  animationDuration: number;
  /** Set the date range */
  setRange: (range: DateRange) => void;
  /** Set the time range */
  setTime: (time: TimeRange) => void;
  /** Set the preset */
  setPreset: (preset: DateRangePreset) => void;
  /** Navigate to previous month */
  navigatePrevMonth: () => void;
  /** Navigate to next month */
  navigateNextMonth: () => void;
  /** Set displayed months directly */
  setDisplayedMonths: (months: [Date, Date]) => void;
};
