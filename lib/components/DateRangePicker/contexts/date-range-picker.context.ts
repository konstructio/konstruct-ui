import { createContext } from 'react';

import { DateRangePickerContextValue } from '../DateRangePicker.types';

export const DateRangePickerContext =
  createContext<DateRangePickerContextValue | null>(null);
