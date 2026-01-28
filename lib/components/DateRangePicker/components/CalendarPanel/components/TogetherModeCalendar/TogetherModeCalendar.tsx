import { motion } from 'motion/react';
import { FC, useCallback, useMemo } from 'react';
import { DateRange as DayPickerDateRange } from 'react-day-picker';

import { cn } from '@/utils';

import {
  calendarPanelVariants,
  calendarGridContainerVariants,
} from '../../CalendarPanel.variants';
import { useTogetherCarousel } from '../../hooks';
import { CalendarDivider } from '../CalendarDivider/CalendarDivider';
import { CalendarMonth } from '../CalendarMonth/CalendarMonth';
import { NavigationButton } from '../NavigationButton/NavigationButton';

import { Props } from './TogetherModeCalendar.types';

export const TogetherModeCalendar: FC<Props> = ({
  className,
  calendarWidth = 550,
  ariaLabelCalendar = 'Date range picker calendar',
  ariaLabelPrevMonth = 'Previous month',
  ariaLabelNextMonth = 'Next month',
  classNames,
  range,
  onRangeSelect,
  disabled,
  disabledMatcher,
  showOutsideDays,
  hideDisabledNavigation,
  canNavigatePrev,
  canNavigateNext,
  carouselProps,
}) => {
  const {
    carouselRef,
    isAnimating,
    enableTransition,
    animateTransform,
    calendarHeight,
    carouselTotalWidth,
    monthsToRender,
    handlePrevMonth,
    handleNextMonth,
    getTransform,
  } = useTogetherCarousel(carouselProps);

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

  return (
    <div className={cn(calendarPanelVariants({ className }), classNames?.root)}>
      <div
        className={cn(
          calendarGridContainerVariants(),
          'overflow-hidden relative justify-start!',
          classNames?.gridContainer,
        )}
        style={{ width: calendarWidth }}
      >
        {/* Navigation Arrows */}
        <NavigationButton
          direction="prev"
          onClick={handlePrevMonth}
          disabled={disabled}
          isAnimating={isAnimating}
          canNavigate={canNavigatePrev}
          hideWhenDisabled={hideDisabledNavigation}
          className={cn('absolute left-0 top-3 z-10', classNames?.navButton)}
          disabledClassName={classNames?.navButtonDisabled}
          ariaLabel={ariaLabelPrevMonth}
        />

        <NavigationButton
          direction="next"
          onClick={handleNextMonth}
          disabled={disabled}
          isAnimating={isAnimating}
          canNavigate={canNavigateNext}
          hideWhenDisabled={hideDisabledNavigation}
          className={cn('absolute right-0 top-3 z-10', classNames?.navButton)}
          disabledClassName={classNames?.navButtonDisabled}
          ariaLabel={ariaLabelNextMonth}
        />

        {/* Full-width divider line */}
        <CalendarDivider className={classNames?.divider} />

        <motion.div
          ref={carouselRef}
          className={cn(
            'flex gap-8',
            enableTransition &&
              animateTransform &&
              'konstruct-drp-carousel-transition',
          )}
          role="application"
          aria-label={ariaLabelCalendar}
          initial={false}
          animate={{ height: calendarHeight }}
          transition={{
            duration: carouselProps.animationDuration / 1000,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{
            ['--konstruct-drp-animation-duration' as string]: `${carouselProps.animationDuration}ms`,
            width: carouselTotalWidth,
            transform: getTransform(),
            willChange: 'transform',
          }}
        >
          {monthsToRender.map((month, index) => (
            <CalendarMonth
              key={`${month.getFullYear()}-${month.getMonth()}-${index}`}
              month={month}
              range={range}
              onRangeSelect={handleRangeSelect}
              disabled={disabled}
              disabledMatcher={disabledMatcher}
              showOutsideDays={showOutsideDays}
              classNames={{
                monthTitle: classNames?.monthTitle,
                dayPicker: dayPickerClassNames,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

TogetherModeCalendar.displayName = 'TogetherModeCalendar';
