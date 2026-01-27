import { VariantProps } from 'class-variance-authority';

import { Theme } from '@/domain/theme';

import { dateRangePickerVariants } from './DateRangePicker.variants';
import {
  DateRange,
  DateRangePreset,
  DateRangeWithTime,
  TimeRange,
} from './contexts';

export type { DateRange, DateRangePreset, DateRangeWithTime, TimeRange };

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
  /** Specific days that cannot be selected */
  blockedDays?: Date[];
  /** Months that cannot be selected (all days in these months will be disabled) */
  blockedMonths?: { year: number; month: number }[];
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Hide navigation arrows when they are disabled (default: false) */
  hideDisabledNavigation?: boolean;
  /** Show days from previous/next month in the calendar grid (default: false) */
  showOutsideDays?: boolean;
};
