import { motion } from 'motion/react';
import { FC, useCallback, useMemo } from 'react';
import { DateRange as DayPickerDateRange } from 'react-day-picker';

import { cn } from '@/utils';

import {
  calendarPanelVariants,
  calendarGridContainerVariants,
} from '../../CalendarPanel.variants';
import { SINGLE_MONTH_WIDTH } from '../../constants';
import { useIndependentCarousel } from '../../hooks';
import { CalendarDivider } from '../CalendarDivider/CalendarDivider';
import { CalendarMonth } from '../CalendarMonth/CalendarMonth';
import { NavigationButton } from '../NavigationButton/NavigationButton';

import { Props } from './IndependentModeCalendar.types';

export const IndependentModeCalendar: FC<Props> = ({
  className,
  calendarWidth = 550,
  ariaLabelCalendar = 'Date range picker calendar',
  ariaLabelPrevMonthStart = 'Previous month for start date',
  ariaLabelNextMonthStart = 'Next month for start date',
  ariaLabelPrevMonthEnd = 'Previous month for end date',
  ariaLabelNextMonthEnd = 'Next month for end date',
  classNames,
  range,
  onRangeSelect,
  disabled,
  disabledMatcher,
  showOutsideDays,
  hideDisabledNavigation,
  canLeftNavigatePrev,
  canLeftNavigateNext,
  canRightNavigatePrev,
  canRightNavigateNext,
  navigateLeftPrev,
  navigateLeftNext,
  navigateRightPrev,
  navigateRightNext,
  carouselProps,
}) => {
  const {
    calendarHeight,
    enableLeftTransition,
    enableRightTransition,
    isLeftAnimating,
    isRightAnimating,
    leftAnimateTransform,
    leftCarouselRef,
    leftInternalMonth,
    leftNextMonth,
    leftPrevMonth,
    rightAnimateTransform,
    rightCarouselRef,
    rightInternalMonth,
    rightNextMonth,
    rightPrevMonth,
    getLeftTransform,
    getRightTransform,
  } = useIndependentCarousel(carouselProps);

  const handleRangeSelect = useCallback(
    (selectedRange: DayPickerDateRange | undefined) => {
      if (selectedRange) {
        onRangeSelect({
          from: selectedRange.from,
          to: selectedRange.to,
        });
      }
    },
    [onRangeSelect],
  );

  const dayPickerClassNames = useMemo(
    () => classNames?.dayPicker,
    [classNames?.dayPicker],
  );

  const monthClassNames = useMemo(
    () => ({
      monthTitle: classNames?.monthTitle,
      dayPicker: dayPickerClassNames,
    }),
    [classNames?.monthTitle, dayPickerClassNames],
  );

  return (
    <div className={cn(calendarPanelVariants({ className }), classNames?.root)}>
      <div
        className={cn(
          calendarGridContainerVariants(),
          'relative',
          classNames?.gridContainer,
        )}
        style={{ width: calendarWidth }}
      >
        {/* Full-width divider line */}
        <CalendarDivider className={classNames?.divider} />

        <motion.div
          className="flex gap-8"
          role="application"
          aria-label={ariaLabelCalendar}
          initial={false}
          animate={{ height: calendarHeight }}
          transition={{
            duration: carouselProps.animationDuration / 1000,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {/* Left month container */}
          <div
            style={{ width: SINGLE_MONTH_WIDTH }}
            className="relative overflow-hidden"
          >
            {/* Fixed navigation arrows */}
            <NavigationButton
              direction="prev"
              onClick={navigateLeftPrev}
              disabled={disabled}
              isAnimating={isLeftAnimating}
              canNavigate={canLeftNavigatePrev}
              hideWhenDisabled={hideDisabledNavigation}
              className={cn(
                'absolute left-0 top-0 z-10 p-1',
                'bg-white dark:bg-metal-800',
                classNames?.navButton,
              )}
              disabledClassName={classNames?.navButtonDisabled}
              ariaLabel={ariaLabelPrevMonthStart}
              size="small"
            />

            <NavigationButton
              direction="next"
              onClick={navigateLeftNext}
              disabled={disabled}
              isAnimating={isLeftAnimating}
              canNavigate={canLeftNavigateNext}
              hideWhenDisabled={hideDisabledNavigation}
              className={cn(
                'absolute right-0 top-0 z-10 p-1',
                'bg-white dark:bg-metal-800',
                classNames?.navButton,
              )}
              disabledClassName={classNames?.navButtonDisabled}
              ariaLabel={ariaLabelNextMonthStart}
              size="small"
            />

            {/* Carousel content */}
            <div
              ref={leftCarouselRef}
              className={cn(
                'flex',
                enableLeftTransition &&
                  leftAnimateTransform &&
                  'konstruct-drp-carousel-transition',
              )}
              style={{
                ['--konstruct-drp-animation-duration' as string]: `${carouselProps.animationDuration}ms`,
                width: 3 * SINGLE_MONTH_WIDTH,
                transform: getLeftTransform(),
                willChange: 'transform',
              }}
            >
              <CalendarMonth
                month={leftPrevMonth}
                range={range}
                onRangeSelect={handleRangeSelect}
                disabled={disabled}
                disabledMatcher={disabledMatcher}
                showOutsideDays={showOutsideDays}
                classNames={monthClassNames}
              />
              <CalendarMonth
                month={leftInternalMonth}
                range={range}
                onRangeSelect={handleRangeSelect}
                disabled={disabled}
                disabledMatcher={disabledMatcher}
                showOutsideDays={showOutsideDays}
                classNames={monthClassNames}
              />
              <CalendarMonth
                month={leftNextMonth}
                range={range}
                onRangeSelect={handleRangeSelect}
                disabled={disabled}
                disabledMatcher={disabledMatcher}
                showOutsideDays={showOutsideDays}
                classNames={monthClassNames}
              />
            </div>
          </div>

          {/* Right month container */}
          <div
            style={{ width: SINGLE_MONTH_WIDTH }}
            className="relative overflow-hidden"
          >
            {/* Fixed navigation arrows */}
            <NavigationButton
              direction="prev"
              onClick={navigateRightPrev}
              disabled={disabled}
              isAnimating={isRightAnimating}
              canNavigate={canRightNavigatePrev}
              hideWhenDisabled={hideDisabledNavigation}
              className={cn(
                'absolute left-0 top-0 z-10 p-1',
                'bg-white dark:bg-metal-800',
                classNames?.navButton,
              )}
              disabledClassName={classNames?.navButtonDisabled}
              ariaLabel={ariaLabelPrevMonthEnd}
              size="small"
            />

            <NavigationButton
              direction="next"
              onClick={navigateRightNext}
              disabled={disabled}
              isAnimating={isRightAnimating}
              canNavigate={canRightNavigateNext}
              hideWhenDisabled={hideDisabledNavigation}
              className={cn(
                'absolute right-0 top-0 z-10 p-1',
                'bg-white dark:bg-metal-800',
                classNames?.navButton,
              )}
              disabledClassName={classNames?.navButtonDisabled}
              ariaLabel={ariaLabelNextMonthEnd}
              size="small"
            />

            {/* Carousel content */}
            <div
              ref={rightCarouselRef}
              className={cn(
                'flex',
                enableRightTransition &&
                  rightAnimateTransform &&
                  'konstruct-drp-carousel-transition',
              )}
              style={{
                ['--konstruct-drp-animation-duration' as string]: `${carouselProps.animationDuration}ms`,
                width: 3 * SINGLE_MONTH_WIDTH,
                transform: getRightTransform(),
                willChange: 'transform',
              }}
            >
              <CalendarMonth
                month={rightPrevMonth}
                range={range}
                onRangeSelect={handleRangeSelect}
                disabled={disabled}
                disabledMatcher={disabledMatcher}
                showOutsideDays={showOutsideDays}
                classNames={monthClassNames}
              />
              <CalendarMonth
                month={rightInternalMonth}
                range={range}
                onRangeSelect={handleRangeSelect}
                disabled={disabled}
                disabledMatcher={disabledMatcher}
                showOutsideDays={showOutsideDays}
                classNames={monthClassNames}
              />
              <CalendarMonth
                month={rightNextMonth}
                range={range}
                onRangeSelect={handleRangeSelect}
                disabled={disabled}
                disabledMatcher={disabledMatcher}
                showOutsideDays={showOutsideDays}
                classNames={monthClassNames}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

IndependentModeCalendar.displayName = 'IndependentModeCalendar';
