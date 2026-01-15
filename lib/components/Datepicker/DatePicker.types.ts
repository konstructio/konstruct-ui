import { VariantProps } from 'class-variance-authority';
import { getAllTimezones } from 'countries-and-timezones';
import type { DayPickerProps as DayPickerPrimitiveProps } from 'react-day-picker';

import { datePickerVariants } from './DatePicker.variants';

type TimeZone = keyof ReturnType<typeof getAllTimezones>;

/**
 * Props for the DatePicker component.
 *
 * @example
 * ```tsx
 * <DatePicker
 *   defaultSelected={new Date()}
 *   onSelect={(date) => setSelectedDate(date)}
 * />
 * ```
 */
export type DatePickerProps = Omit<DayPickerPrimitiveProps, 'mode'> &
  VariantProps<typeof datePickerVariants> & {
    /** CSS classes for the navigation arrows */
    arrowClassName?: string;
    /** CSS classes for the months container */
    monthsClassName?: string;
    /** Timezone for date display */
    timeZone?: TimeZone;
    /** Initial selected date */
    defaultSelected?: Date;
    /** Callback when a date is selected */
    onSelect?: (date: Date) => void;
  };
