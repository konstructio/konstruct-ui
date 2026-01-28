import { useContext } from 'react';

import { DateRangePickerContext } from './date-range-picker.context';

export const useDateRangePicker = () => {
  const context = useContext(DateRangePickerContext);

  if (!context) {
    throw new Error(
      'useDateRangePicker must be used within a DateRangePickerProvider',
    );
  }

  return context;
};
