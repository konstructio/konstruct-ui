import { FC, useMemo } from 'react';
import { DayPicker } from 'react-day-picker';

import { createDayPickerClassNames } from '../../../../constants';

import { Props } from '../../CalendarMonth.types';

export const CalendarMonthContent: FC<Props> = ({
  month,
  range,
  onRangeSelect,
  disabled,
  disabledMatcher,
  showOutsideDays,
  classNames,
}) => {
  const dayPickerClassNames = useMemo(
    () => createDayPickerClassNames(classNames?.dayPicker),
    [classNames?.dayPicker],
  );

  return (
    <DayPicker
      mode="range"
      selected={{ from: range.from, to: range.to }}
      onSelect={onRangeSelect}
      month={month}
      numberOfMonths={1}
      disabled={disabledMatcher || disabled}
      hideNavigation
      animate={false}
      showOutsideDays={showOutsideDays}
      classNames={dayPickerClassNames}
    />
  );
};

CalendarMonthContent.displayName = 'CalendarMonthContent';
