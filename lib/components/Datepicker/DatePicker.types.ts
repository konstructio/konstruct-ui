import { VariantProps } from 'class-variance-authority';
import { getAllTimezones } from 'countries-and-timezones';
import type { DayPickerProps as DayPickerPrimitiveProps } from 'react-day-picker';

import { datePickerVariants } from './DatePicker.variants';

type TimeZone = keyof ReturnType<typeof getAllTimezones>;

export type DatePickerProps = Omit<DayPickerPrimitiveProps, 'mode'> &
  VariantProps<typeof datePickerVariants> & {
    timeZone?: TimeZone;
    onSelect?: (date: Date) => void;
  };
