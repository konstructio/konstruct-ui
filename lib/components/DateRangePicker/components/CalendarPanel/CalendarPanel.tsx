import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { FC, useCallback, useMemo } from 'react';
import { DayPicker, DateRange as DayPickerDateRange } from 'react-day-picker';

import { cn } from '@/utils';

import { useDateRangePicker } from '../../contexts';
import { getMonthName, createDisabledMatcher } from '../../utils';
import { CalendarPanelProps } from './CalendarPanel.types';
import {
  calendarPanelVariants,
  calendarNavButtonVariants,
  calendarNavButtonDisabledVariants,
  calendarMonthTitleVariants,
  calendarGridContainerVariants,
} from './CalendarPanel.variants';
import {
  SINGLE_MONTH_WIDTH,
  useTogetherCarousel,
  useIndependentCarousel,
} from './hooks';

import 'react-day-picker/style.css';
import './CalendarPanel.css';

const dayPickerClassNames = {
  root: 'w-fit',
  months: 'flex',
  month: `flex flex-col w-[${SINGLE_MONTH_WIDTH}px]`,
  month_caption: 'hidden',
  nav: 'hidden',
  day_button: cn(
    'size-[30px]',
    'flex',
    'items-center',
    'justify-center',
    'text-sm',
    'font-semibold',
    'cursor-pointer',
    'rounded-full',
    'hover:bg-slate-100',
    'dark:hover:bg-metal-700',
    'transition-colors',
    'text-[#314158]',
    'dark:text-white',
    'focus:outline-none',
    'focus-visible:outline-none',
  ),
  day: cn('p-0', 'w-[37px]', 'h-[38px]', 'text-center', 'align-middle'),
  selected: cn(
    '[&>button]:bg-blue-600',
    '[&>button]:text-white',
    '[&>button]:hover:bg-blue-700',
    'dark:[&>button]:bg-aurora-500',
    'dark:[&>button]:hover:bg-aurora-400',
    'dark:[&>button]:text-metal-900',
  ),
  range_start: cn(
    'drp-range-start',
    '[&>button]:!bg-blue-600',
    '[&>button]:!text-white',
    '[&>button]:!rounded-full',
    '[&>button]:hover:!bg-blue-700',
    '[&>button]:relative',
    '[&>button]:z-10',
    'dark:[&>button]:!bg-aurora-500',
    'dark:[&>button]:!text-metal-900',
    '!relative',
    'before:absolute',
    'before:top-[4px]',
    'before:bottom-[4px]',
    'before:left-1/2',
    'before:right-0',
    'before:!bg-[#EFF6FF]',
    'dark:before:!bg-aurora-900/20',
    'last:before:!hidden',
  ),
  range_end: cn(
    'drp-range-end',
    '[&>button]:!bg-blue-600',
    '[&>button]:!text-white',
    '[&>button]:!rounded-full',
    '[&>button]:hover:!bg-blue-700',
    '[&>button]:relative',
    '[&>button]:z-10',
    'dark:[&>button]:!bg-aurora-500',
    'dark:[&>button]:!text-metal-900',
    '!relative',
    'before:absolute',
    'before:top-[4px]',
    'before:bottom-[4px]',
    'before:left-0',
    'before:right-1/2',
    'before:!bg-[#EFF6FF]',
    'dark:before:!bg-aurora-900/20',
    'first:before:!hidden',
  ),
  range_middle: cn(
    'drp-range-middle',
    '!relative',
    'before:absolute',
    'before:top-[4px]',
    'before:bottom-[4px]',
    'before:left-0',
    'before:right-0',
    'before:!bg-[#EFF6FF]',
    'dark:before:!bg-aurora-900/20',
    'first:before:rounded-l-full',
    'last:before:rounded-r-full',
    '[&>button]:!text-[#314158]',
    '[&>button]:!bg-transparent',
    '[&>button]:!rounded-full',
    '[&>button]:relative',
    '[&>button]:z-10',
    '[&>button]:hover:!bg-blue-100',
    'dark:[&>button]:!text-white',
    'dark:[&>button]:hover:!bg-metal-700',
  ),
  table: 'w-full border-collapse table-fixed',
  weekdays: cn('text-[#62748e]', 'dark:text-metal-400'),
  weeks: cn('[&>tr>td]:p-0', '[&>tr]:h-[38px]'),
  weekday: cn(
    'font-semibold',
    'text-xs',
    'uppercase',
    'text-[#62748e]',
    'dark:text-metal-400',
    'pb-4',
    'w-[37px]',
  ),
  today: cn('[&>button]:text-[#155dfc]', 'dark:[&>button]:text-aurora-500'),
  month_grid: 'w-full',
  disabled: 'opacity-50 cursor-not-allowed',
};

const getMonthLabel = (date: Date) =>
  `${getMonthName(date.getMonth())} ${date.getFullYear()}`;

export const CalendarPanel: FC<CalendarPanelProps> = ({
  className,
  calendarWidth = 550,
}) => {
  const {
    range,
    displayedMonths,
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
    navigationMode,
    canLeftNavigatePrev,
    canLeftNavigateNext,
    canRightNavigatePrev,
    canRightNavigateNext,
    setRange,
    navigatePrevMonth,
    navigateNextMonth,
    navigateLeftPrev,
    navigateLeftNext,
    navigateRightPrev,
    navigateRightNext,
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

  // Together mode carousel
  const togetherCarousel = useTogetherCarousel({
    displayedMonths,
    animationDuration,
    disabled,
    canNavigatePrev,
    canNavigateNext,
    navigationMode,
    navigatePrevMonth,
    navigateNextMonth,
  });

  // Independent mode carousel
  const independentCarousel = useIndependentCarousel({
    displayedMonths,
    animationDuration,
    navigationMode,
  });

  const handleRangeSelect = useCallback(
    (selectedRange: DayPickerDateRange | undefined) => {
      if (selectedRange) {
        setRange({
          from: selectedRange.from,
          to: selectedRange.to,
        });
      }
    },
    [setRange],
  );

  // Render a single month calendar with header
  const renderSingleMonth = (
    month: Date,
    position: 'left' | 'right' | 'buffer',
  ) => {
    const isLeftVisible = position === 'left';
    const isRightVisible = position === 'right';
    const showIndependentNav = navigationMode === 'independent';

    return (
      <div
        key={`${month.getFullYear()}-${month.getMonth()}`}
        style={{ width: SINGLE_MONTH_WIDTH }}
      >
        {/* Month Header with optional independent navigation */}
        <div className="flex items-center mb-4 h-6">
          {showIndependentNav && isLeftVisible && (
            <button
              type="button"
              onClick={navigateLeftPrev}
              disabled={disabled || !canLeftNavigatePrev}
              className={cn(
                calendarNavButtonVariants(),
                'p-1',
                (disabled || !canLeftNavigatePrev) &&
                  calendarNavButtonDisabledVariants(),
                hideDisabledNavigation && !canLeftNavigatePrev && 'invisible',
              )}
              aria-label="Previous month for start date"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
          )}
          {showIndependentNav && isRightVisible && (
            <button
              type="button"
              onClick={navigateRightPrev}
              disabled={disabled || !canRightNavigatePrev}
              className={cn(
                calendarNavButtonVariants(),
                'p-1',
                (disabled || !canRightNavigatePrev) &&
                  calendarNavButtonDisabledVariants(),
                hideDisabledNavigation && !canRightNavigatePrev && 'invisible',
              )}
              aria-label="Previous month for end date"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
          )}

          <span
            className={cn(calendarMonthTitleVariants(), 'flex-1 text-center')}
          >
            {getMonthLabel(month)}
          </span>

          {showIndependentNav && isLeftVisible && (
            <button
              type="button"
              onClick={navigateLeftNext}
              disabled={disabled || !canLeftNavigateNext}
              className={cn(
                calendarNavButtonVariants(),
                'p-1',
                (disabled || !canLeftNavigateNext) &&
                  calendarNavButtonDisabledVariants(),
                hideDisabledNavigation && !canLeftNavigateNext && 'invisible',
              )}
              aria-label="Next month for start date"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          )}
          {showIndependentNav && isRightVisible && (
            <button
              type="button"
              onClick={navigateRightNext}
              disabled={disabled || !canRightNavigateNext}
              className={cn(
                calendarNavButtonVariants(),
                'p-1',
                (disabled || !canRightNavigateNext) &&
                  calendarNavButtonDisabledVariants(),
                hideDisabledNavigation && !canRightNavigateNext && 'invisible',
              )}
              aria-label="Next month for end date"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Calendar */}
        <DayPicker
          mode="range"
          selected={{ from: range.from, to: range.to }}
          onSelect={handleRangeSelect}
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

  // Independent mode render
  if (navigationMode === 'independent') {
    const {
      leftInternalMonth,
      leftPrevMonth,
      leftNextMonth,
      leftCarouselRef,
      isLeftAnimating,
      enableLeftTransition,
      leftAnimateTransform,
      getLeftTransform,
      rightInternalMonth,
      rightPrevMonth,
      rightNextMonth,
      rightCarouselRef,
      isRightAnimating,
      enableRightTransition,
      rightAnimateTransform,
      getRightTransform,
      calendarHeight,
    } = independentCarousel;

    return (
      <div className={cn(calendarPanelVariants({ className }))}>
        <div
          className={cn(calendarGridContainerVariants(), 'relative')}
          style={{ width: calendarWidth }}
        >
          <motion.div
            className="flex gap-8"
            role="application"
            aria-label="Date range picker calendar"
            animate={{ height: calendarHeight }}
            transition={{
              duration: animationDuration / 1000,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {/* Left month container */}
            <div
              style={{ width: SINGLE_MONTH_WIDTH }}
              className="relative overflow-hidden"
            >
              {/* Fixed navigation arrows */}
              {!(hideDisabledNavigation && !canLeftNavigatePrev) && (
                <button
                  type="button"
                  onClick={navigateLeftPrev}
                  disabled={disabled || isLeftAnimating || !canLeftNavigatePrev}
                  className={cn(
                    calendarNavButtonVariants(),
                    'absolute left-0 top-0 z-10 p-1',
                    'bg-white dark:bg-metal-800',
                    (disabled || !canLeftNavigatePrev) &&
                      calendarNavButtonDisabledVariants(),
                  )}
                  aria-label="Previous month for start date"
                >
                  <ChevronLeftIcon className="w-4 h-4" />
                </button>
              )}
              {!(hideDisabledNavigation && !canLeftNavigateNext) && (
                <button
                  type="button"
                  onClick={navigateLeftNext}
                  disabled={disabled || isLeftAnimating || !canLeftNavigateNext}
                  className={cn(
                    calendarNavButtonVariants(),
                    'absolute right-0 top-0 z-10 p-1',
                    'bg-white dark:bg-metal-800',
                    (disabled || !canLeftNavigateNext) &&
                      calendarNavButtonDisabledVariants(),
                  )}
                  aria-label="Next month for start date"
                >
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              )}

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
                  ['--konstruct-drp-animation-duration' as string]: `${animationDuration}ms`,
                  width: 3 * SINGLE_MONTH_WIDTH,
                  transform: getLeftTransform(),
                  willChange: 'transform',
                }}
              >
                {renderSingleMonth(leftPrevMonth, 'buffer')}
                {renderSingleMonth(leftInternalMonth, 'buffer')}
                {renderSingleMonth(leftNextMonth, 'buffer')}
              </div>
            </div>

            {/* Right month container */}
            <div
              style={{ width: SINGLE_MONTH_WIDTH }}
              className="relative overflow-hidden"
            >
              {/* Fixed navigation arrows */}
              {!(hideDisabledNavigation && !canRightNavigatePrev) && (
                <button
                  type="button"
                  onClick={navigateRightPrev}
                  disabled={
                    disabled || isRightAnimating || !canRightNavigatePrev
                  }
                  className={cn(
                    calendarNavButtonVariants(),
                    'absolute left-0 top-0 z-10 p-1',
                    'bg-white dark:bg-metal-800',
                    (disabled || !canRightNavigatePrev) &&
                      calendarNavButtonDisabledVariants(),
                  )}
                  aria-label="Previous month for end date"
                >
                  <ChevronLeftIcon className="w-4 h-4" />
                </button>
              )}
              {!(hideDisabledNavigation && !canRightNavigateNext) && (
                <button
                  type="button"
                  onClick={navigateRightNext}
                  disabled={
                    disabled || isRightAnimating || !canRightNavigateNext
                  }
                  className={cn(
                    calendarNavButtonVariants(),
                    'absolute right-0 top-0 z-10 p-1',
                    'bg-white dark:bg-metal-800',
                    (disabled || !canRightNavigateNext) &&
                      calendarNavButtonDisabledVariants(),
                  )}
                  aria-label="Next month for end date"
                >
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              )}

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
                  ['--konstruct-drp-animation-duration' as string]: `${animationDuration}ms`,
                  width: 3 * SINGLE_MONTH_WIDTH,
                  transform: getRightTransform(),
                  willChange: 'transform',
                }}
              >
                {renderSingleMonth(rightPrevMonth, 'buffer')}
                {renderSingleMonth(rightInternalMonth, 'buffer')}
                {renderSingleMonth(rightNextMonth, 'buffer')}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Together mode render
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
  } = togetherCarousel;

  return (
    <div className={cn(calendarPanelVariants({ className }))}>
      <div
        className={cn(
          calendarGridContainerVariants(),
          'overflow-hidden relative justify-start!',
        )}
        style={{ width: calendarWidth }}
      >
        {/* Navigation Arrows */}
        {!(hideDisabledNavigation && !canNavigatePrev) && (
          <button
            type="button"
            onClick={handlePrevMonth}
            disabled={disabled || isAnimating || !canNavigatePrev}
            className={cn(
              calendarNavButtonVariants(),
              'absolute left-0 top-3 z-10',
              (disabled || !canNavigatePrev) &&
                calendarNavButtonDisabledVariants(),
            )}
            aria-label="Previous month"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
        )}

        {!(hideDisabledNavigation && !canNavigateNext) && (
          <button
            type="button"
            onClick={handleNextMonth}
            disabled={disabled || isAnimating || !canNavigateNext}
            className={cn(
              calendarNavButtonVariants(),
              'absolute right-0 top-3 z-10',
              (disabled || !canNavigateNext) &&
                calendarNavButtonDisabledVariants(),
            )}
            aria-label="Next month"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        )}

        <motion.div
          ref={carouselRef}
          className={cn(
            'flex gap-8',
            enableTransition &&
              animateTransform &&
              'konstruct-drp-carousel-transition',
          )}
          role="application"
          aria-label="Date range picker calendar"
          animate={{ height: calendarHeight }}
          transition={{
            duration: animationDuration / 1000,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{
            ['--konstruct-drp-animation-duration' as string]: `${animationDuration}ms`,
            width: carouselTotalWidth,
            transform: getTransform(),
            willChange: 'transform',
          }}
        >
          {monthsToRender.map((month, index) => {
            const position =
              index === 2 ? 'left' : index === 3 ? 'right' : 'buffer';
            return renderSingleMonth(month, position);
          })}
        </motion.div>
      </div>
    </div>
  );
};

CalendarPanel.displayName = 'DateRangePickerCalendarPanel';
