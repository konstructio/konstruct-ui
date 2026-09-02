import { useCallback, useState } from 'react';

import {
  DateRange,
  DateRangeWithTime,
} from '@/components/DateRangePicker/DateRangePicker.types';

import { Props } from './useDateRangeSelection.types';

export const useDateRangeSelection = ({ defaultRange }: Props) => {
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>(
    defaultRange,
  );

  const selectRange = useCallback((range: DateRange) => {
    setSelectedRange(range);
  }, []);

  const handleRangeChange = useCallback((range: DateRangeWithTime) => {
    setSelectedRange({ from: range.from, to: range.to });
  }, []);

  const clearSelectedRange = useCallback(() => {
    setSelectedRange(undefined);
  }, []);

  return { selectedRange, selectRange, handleRangeChange, clearSelectedRange };
};
