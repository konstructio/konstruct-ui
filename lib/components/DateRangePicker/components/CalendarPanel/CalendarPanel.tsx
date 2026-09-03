import { FC, useMemo } from 'react';

import { useDateRangePicker } from '../../contexts';
import { createDisabledMatcher } from '../../utils';
import { CalendarPanelProps } from './CalendarPanel.types';
import { IndependentModeCalendar, TogetherModeCalendar } from './components';
import { SINGLE_MONTH_WIDTH } from './constants';

import 'react-day-picker/style.css';
import './CalendarPanel.css';

export const CalendarPanel: FC<CalendarPanelProps> = ({
  className,
  calendarWidth = 550,
  ariaLabelCalendar = 'Date range picker calendar',
  ariaLabelPrevMonth = 'Previous month',
  ariaLabelNextMonth = 'Next month',
  ariaLabelPrevMonthStart = 'Previous month for start date',
  ariaLabelNextMonthStart = 'Next month for start date',
  ariaLabelPrevMonthEnd = 'Previous month for end date',
  ariaLabelNextMonthEnd = 'Next month for end date',
  classNames,
}) => {
  const {
    animationDuration,
    blockedDays,
    blockedMonths,
    canLeftNavigateNext,
    canLeftNavigatePrev,
    canNavigateNext,
    canNavigatePrev,
    canRightNavigateNext,
    canRightNavigatePrev,
    disabled,
    displayedMonths,
    hideDisabledNavigation,
    maxDate,
    minDate,
    navigationMode,
    numberOfMonths,
    range,
    showOutsideDays,
    navigateLeftNext,
    navigateLeftPrev,
    navigateNextMonth,
    navigatePrevMonth,
    navigateRightNext,
    navigateRightPrev,
    setRange,
  } = useDateRangePicker();

  const disabledMatcher = useMemo(
    () =>
      createDisabledMatcher({
        blockedDays,
        blockedMonths,
        minDate,
        maxDate,
      }),
    [blockedDays, blockedMonths, minDate, maxDate],
  );

  const handleRangeSelect = (selectedRange: { from?: Date; to?: Date }) => {
    setRange(selectedRange);
  };

  const isSingleMonth = numberOfMonths === 1;

  if (navigationMode === 'independent' && !isSingleMonth) {
    return (
      <IndependentModeCalendar
        className={className}
        calendarWidth={calendarWidth}
        ariaLabelCalendar={ariaLabelCalendar}
        ariaLabelPrevMonthStart={ariaLabelPrevMonthStart}
        ariaLabelNextMonthStart={ariaLabelNextMonthStart}
        ariaLabelPrevMonthEnd={ariaLabelPrevMonthEnd}
        ariaLabelNextMonthEnd={ariaLabelNextMonthEnd}
        classNames={classNames}
        range={range}
        onRangeSelect={handleRangeSelect}
        disabled={disabled}
        disabledMatcher={disabledMatcher}
        showOutsideDays={showOutsideDays}
        hideDisabledNavigation={hideDisabledNavigation}
        canLeftNavigatePrev={canLeftNavigatePrev}
        canLeftNavigateNext={canLeftNavigateNext}
        canRightNavigatePrev={canRightNavigatePrev}
        canRightNavigateNext={canRightNavigateNext}
        navigateLeftPrev={navigateLeftPrev}
        navigateLeftNext={navigateLeftNext}
        navigateRightPrev={navigateRightPrev}
        navigateRightNext={navigateRightNext}
        carouselProps={{
          displayedMonths,
          animationDuration,
          navigationMode,
        }}
      />
    );
  }

  return (
    <TogetherModeCalendar
      className={className}
      calendarWidth={isSingleMonth ? SINGLE_MONTH_WIDTH : calendarWidth}
      ariaLabelCalendar={ariaLabelCalendar}
      ariaLabelPrevMonth={ariaLabelPrevMonth}
      ariaLabelNextMonth={ariaLabelNextMonth}
      classNames={classNames}
      range={range}
      onRangeSelect={handleRangeSelect}
      disabled={disabled}
      disabledMatcher={disabledMatcher}
      showOutsideDays={showOutsideDays}
      hideDisabledNavigation={hideDisabledNavigation}
      canNavigatePrev={canNavigatePrev}
      canNavigateNext={canNavigateNext}
      carouselProps={{
        displayedMonths,
        animationDuration,
        disabled,
        canNavigatePrev,
        canNavigateNext,
        navigationMode: 'together',
        numberOfMonths,
        navigatePrevMonth,
        navigateNextMonth,
      }}
    />
  );
};

CalendarPanel.displayName = 'DateRangePickerCalendarPanel';
