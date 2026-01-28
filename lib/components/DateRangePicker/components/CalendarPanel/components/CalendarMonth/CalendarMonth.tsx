import { FC, useMemo } from 'react';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/utils';

import { calendarMonthTitleVariants } from '../../CalendarPanel.variants';
import {
  SINGLE_MONTH_WIDTH,
  createDayPickerClassNames,
  getMonthName,
} from '../../constants';

import { Props } from './CalendarMonth.types';

const getMonthLabel = (date: Date) =>
  `${getMonthName(date.getMonth())} ${date.getFullYear()}`;

export const CalendarMonth: FC<Props> = ({
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
    <div
      key={`${month.getFullYear()}-${month.getMonth()}`}
      style={{ width: SINGLE_MONTH_WIDTH }}
    >
      {/* Month Header */}
      <div className="flex items-center justify-center mb-8 h-6">
        <span
          className={cn(
            calendarMonthTitleVariants(),
            'flex-1 text-center',
            classNames?.monthTitle,
          )}
        >
          {getMonthLabel(month)}
        </span>
      </div>

      {/* Calendar */}
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
    </div>
  );
};

CalendarMonth.displayName = 'CalendarMonth';
