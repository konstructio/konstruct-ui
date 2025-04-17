import { VariantProps } from 'class-variance-authority';
import { getAllTimezones } from 'countries-and-timezones';
import type { DayPickerProps } from 'react-day-picker';

import { datepickerVariants } from './Datepicker.variants';

type TimeZone = keyof ReturnType<typeof getAllTimezones>;

export type DatepickerProps = DayPickerProps &
  VariantProps<typeof datepickerVariants> & {
    timeZone?: TimeZone;
    onSelect?: (date: Date) => void;
  };
