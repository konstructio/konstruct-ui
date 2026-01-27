import { FC, ReactNode, useCallback, useMemo, useState } from 'react';

import {
  BlockedMonth,
  DateRange,
  DateRangePickerContextValue,
  DateRangePreset,
  TimeRange,
} from './date-range-picker.context';
import { calculatePresetRange } from '../utils/presets';
import {
  canNavigateToPrevMonth,
  canNavigateToNextMonth,
} from '../utils/disabled-dates';
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
  blockedDays?: Date[];
  blockedMonths?: BlockedMonth[];
  minDate?: Date;
  maxDate?: Date;
  hideDisabledNavigation?: boolean;
  showOutsideDays?: boolean;
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
  blockedDays = [],
  blockedMonths = [],
  minDate,
  maxDate,
  hideDisabledNavigation = false,
  showOutsideDays = false,
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
    // Compute the initial range to determine which month to show
    let initialRange: DateRange = {};
    if (defaultRange) {
      initialRange = defaultRange;
    } else if (defaultPreset !== 'custom') {
      initialRange = calculatePresetRange(defaultPreset);
    }

    // Navigate to the month of the initial range, or current month if none
    const referenceDate = initialRange?.from ?? initialRange?.to ?? new Date();
    const leftMonth = new Date(
      referenceDate.getFullYear(),
      referenceDate.getMonth(),
      1,
    );
    const rightMonth = new Date(
      referenceDate.getFullYear(),
      referenceDate.getMonth() + 1,
      1,
    );
    return [leftMonth, rightMonth];
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

  const canNavigatePrev = useMemo(
    () => canNavigateToPrevMonth(displayedMonths[0], minDate),
    [displayedMonths, minDate],
  );

  const canNavigateNext = useMemo(
    () => canNavigateToNextMonth(displayedMonths[1], maxDate),
    [displayedMonths, maxDate],
  );

  const navigatePrevMonth = useCallback(() => {
    if (!canNavigatePrev) return;
    setDisplayedMonths(([left, right]) => {
      const newLeft = new Date(left.getFullYear(), left.getMonth() - 1, 1);
      const newRight = new Date(right.getFullYear(), right.getMonth() - 1, 1);
      return [newLeft, newRight];
    });
  }, [canNavigatePrev]);

  const navigateNextMonth = useCallback(() => {
    if (!canNavigateNext) return;
    setDisplayedMonths(([left, right]) => {
      const newLeft = new Date(left.getFullYear(), left.getMonth() + 1, 1);
      const newRight = new Date(right.getFullYear(), right.getMonth() + 1, 1);
      return [newLeft, newRight];
    });
  }, [canNavigateNext]);

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
      blockedDays,
      blockedMonths,
      minDate,
      maxDate,
      canNavigatePrev,
      canNavigateNext,
      hideDisabledNavigation,
      showOutsideDays,
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
      blockedDays,
      blockedMonths,
      minDate,
      maxDate,
      canNavigatePrev,
      canNavigateNext,
      hideDisabledNavigation,
      showOutsideDays,
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
