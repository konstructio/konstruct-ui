import { createContext } from 'react';

import type { DateRangePickerContextValue } from './date-range-picker.types';

export type {
  BlockedMonth,
  DateDisplayFormat,
  DateRange,
  DateRangePickerContextValue,
  DateRangePreset,
  DateRangePresetOption,
  DateRangeWithTime,
  TimeRange,
} from './date-range-picker.types';

export const DateRangePickerContext =
  createContext<DateRangePickerContextValue | null>(null);
