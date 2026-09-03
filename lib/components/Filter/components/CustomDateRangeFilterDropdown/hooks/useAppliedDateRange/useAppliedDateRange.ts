import { useCallback, useState } from 'react';

import {
  DateRange,
  DateRangeWithTime,
} from '@/components/DateRangePicker/DateRangePicker.types';

import { Props } from './useAppliedDateRange.types';

export const useAppliedDateRange = ({ defaultRange, onApply }: Props) => {
  const [appliedRange, setAppliedRange] = useState<
    DateRangeWithTime | undefined
  >(defaultRange);

  const applyRange = useCallback(
    (range: DateRange | undefined) => {
      const rangeWithTime: DateRangeWithTime = {
        from: range?.from,
        to: range?.to,
      };

      setAppliedRange(rangeWithTime);
      onApply?.(rangeWithTime);
    },
    [onApply],
  );

  const clearAppliedRange = useCallback(() => {
    setAppliedRange(undefined);
    onApply?.();
  }, [onApply]);

  return { appliedRange, applyRange, clearAppliedRange };
};
