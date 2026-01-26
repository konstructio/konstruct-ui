import { FC, ReactNode, useCallback, useMemo, useState } from 'react';

import {
  DateRange,
  DateRangePickerContextValue,
  DateRangePreset,
  TimeRange,
} from '../DateRangePicker.types';
import { calculatePresetRange } from '../utils/presets';
import { DateRangePickerContext } from './date-range-picker.context';

interface DateRangePickerProviderProps {
  children: ReactNode;
  defaultRange?: DateRange;
  defaultTime?: TimeRange;
  defaultPreset?: DateRangePreset;
  timeFormat?: '12' | '24';
  showTime?: boolean;
  name?: string;
  disabled?: boolean;
  animationDuration?: number;
  onRangeChange?: (range: DateRange & TimeRange) => void;
  onDateChange?: (range: DateRange) => void;
}

export const DateRangePickerProvider: FC<DateRangePickerProviderProps> = ({
  children,
  defaultRange,
  defaultTime,
  defaultPreset = 'custom',
  timeFormat = '24',
  showTime = true,
  name,
  disabled = false,
  animationDuration = 500,
  onRangeChange,
  onDateChange,
}) => {
  const [range, setRangeState] = useState<DateRange>(() => {
    if (defaultRange) return defaultRange;
    if (defaultPreset !== 'custom') return calculatePresetRange(defaultPreset);
    return {};
  });

  const [time, setTimeState] = useState<TimeRange>(() => {
    return defaultTime ?? {};
  });

  const [preset, setPresetState] = useState<DateRangePreset>(defaultPreset);

  const [displayedMonths, setDisplayedMonths] = useState<[Date, Date]>(() => {
    const now = new Date();
    const currentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    return [currentMonth, nextMonth];
  });

  const setRange = useCallback(
    (newRange: DateRange) => {
      setRangeState(newRange);
      setPresetState('custom');
      onRangeChange?.({ ...newRange, ...time });
      onDateChange?.(newRange);
    },
    [time, onRangeChange, onDateChange],
  );

  const setTime = useCallback(
    (newTime: TimeRange) => {
      setTimeState(newTime);
      onRangeChange?.({ ...range, ...newTime });
    },
    [range, onRangeChange],
  );

  const setPreset = useCallback(
    (newPreset: DateRangePreset) => {
      setPresetState(newPreset);
      if (newPreset !== 'custom') {
        const presetRange = calculatePresetRange(newPreset);
        setRangeState(presetRange);
        onRangeChange?.({ ...presetRange, ...time });
        onDateChange?.(presetRange);
      }
    },
    [time, onRangeChange, onDateChange],
  );

  const navigatePrevMonth = useCallback(() => {
    setDisplayedMonths(([left, right]) => {
      const newLeft = new Date(left.getFullYear(), left.getMonth() - 1, 1);
      const newRight = new Date(right.getFullYear(), right.getMonth() - 1, 1);
      return [newLeft, newRight];
    });
  }, []);

  const navigateNextMonth = useCallback(() => {
    setDisplayedMonths(([left, right]) => {
      const newLeft = new Date(left.getFullYear(), left.getMonth() + 1, 1);
      const newRight = new Date(right.getFullYear(), right.getMonth() + 1, 1);
      return [newLeft, newRight];
    });
  }, []);

  const value: DateRangePickerContextValue = useMemo(
    () => ({
      range,
      time,
      preset,
      displayedMonths,
      timeFormat,
      showTime,
      name,
      disabled,
      animationDuration,
      setRange,
      setTime,
      setPreset,
      navigatePrevMonth,
      navigateNextMonth,
      setDisplayedMonths,
    }),
    [
      range,
      time,
      preset,
      displayedMonths,
      timeFormat,
      showTime,
      name,
      disabled,
      animationDuration,
      setRange,
      setTime,
      setPreset,
      navigatePrevMonth,
      navigateNextMonth,
    ],
  );

  return (
    <DateRangePickerContext.Provider value={value}>
      {children}
    </DateRangePickerContext.Provider>
  );
};
