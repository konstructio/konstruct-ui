import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { FC, useCallback, useMemo } from 'react';
import { DayPicker, DateRange as DayPickerDateRange } from 'react-day-picker';

import { cn } from '@/utils';

import { useDateRangePicker } from '../../contexts';
import { getMonthName, createDisabledMatcher } from '../../utils';
import { CalendarPanelProps, DayPickerClassNames } from './CalendarPanel.types';
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

const createDayPickerClassNames = (custom?: DayPickerClassNames) => ({
  root: cn('w-fit', custom?.root),
  months: cn('flex', custom?.months),
  month: cn(`flex flex-col w-[${SINGLE_MONTH_WIDTH}px]`, custom?.month),
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
    custom?.dayButton,
  ),
  day: cn(
    'p-0',
    'w-[37px]',
    'h-[38px]',
    'text-center',
    'align-middle',
    custom?.day,
  ),
  selected: cn(
    '[&>button]:bg-blue-600',
    '[&>button]:text-white',
    '[&>button]:hover:bg-blue-700',
    'dark:[&>button]:bg-aurora-500',
    'dark:[&>button]:hover:bg-aurora-500',
    'dark:[&>button]:text-metal-900',
    custom?.selected,
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
    'dark:[&>button]:hover:!bg-aurora-500',
    'dark:[&>button]:!text-metal-900',
    '!relative',
    'before:absolute',
    'before:top-[4px]',
    'before:bottom-[4px]',
    'before:left-1/2',
    'before:right-0',
    'before:!bg-[#EFF6FF]',
    'dark:before:!bg-aurora-500/10',
    'last:before:!hidden',
    custom?.rangeStart,
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
    'dark:[&>button]:hover:!bg-aurora-500',
    'dark:[&>button]:!text-metal-900',
    '!relative',
    'before:absolute',
    'before:top-[4px]',
    'before:bottom-[4px]',
    'before:left-0',
    'before:right-1/2',
    'before:!bg-[#EFF6FF]',
    'dark:before:!bg-aurora-500/10',
    'first:before:!hidden',
    custom?.rangeEnd,
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
    'dark:before:!bg-aurora-500/10',
    'first:before:rounded-l-full',
    'last:before:rounded-r-full',
    '[&>button]:!text-[#314158]',
    '[&>button]:!bg-transparent',
    '[&>button]:!rounded-full',
    '[&>button]:relative',
    '[&>button]:z-10',
    '[&>button]:hover:!bg-blue-100',
    'dark:[&>button]:!text-white',
    'dark:[&>button]:hover:!bg-aurora-500/20',
    custom?.rangeMiddle,
  ),
  table: cn('w-full border-collapse table-fixed', custom?.table),
  weekdays: cn('text-[#62748e]', 'dark:text-metal-400', custom?.weekdays),
  weeks: cn('[&>tr>td]:p-0', '[&>tr]:h-[38px]', custom?.weeks),
  weekday: cn(
    'font-semibold',
    'text-xs',
    'uppercase',
    'text-[#62748e]',
    'dark:text-metal-400',
    'pb-4',
    'w-[37px]',
    custom?.weekday,
  ),
  today: cn(
    '[&>button]:text-[#155dfc]',
    'dark:[&>button]:text-aurora-500',
    custom?.today,
  ),
  month_grid: 'w-full',
  disabled: cn(
    '[&>button]:opacity-50',
    '[&>button]:cursor-not-allowed',
    custom?.disabled,
  ),
  outside: cn(
    '[&>button]:!text-slate-400',
    'dark:[&>button]:!text-metal-500',
    custom?.outside,
  ),
});

const getMonthLabel = (date: Date) =>
  `${getMonthName(date.getMonth())} ${date.getFullYear()}`;

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

  const dayPickerClassNames = useMemo(
    () => createDayPickerClassNames(classNames?.dayPicker),
    [classNames?.dayPicker],
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
        <div className="flex items-center mb-8 h-6">
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
              aria-label={ariaLabelPrevMonthStart}
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
              aria-label={ariaLabelPrevMonthEnd}
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
          )}

          <span
            className={cn(
              calendarMonthTitleVariants(),
              'flex-1 text-center',
              classNames?.monthTitle,
            )}
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
              aria-label={ariaLabelNextMonthStart}
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
              aria-label={ariaLabelNextMonthEnd}
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
    } = independentCarousel;

    return (
      <div
        className={cn(calendarPanelVariants({ className }), classNames?.root)}
      >
        <div
          className={cn(
            calendarGridContainerVariants(),
            'relative',
            classNames?.gridContainer,
          )}
          style={{ width: calendarWidth }}
        >
          {/* Full-width divider line */}
          <div
            className={cn(
              'absolute',
              'left-0',
              'right-0',
              'top-14',
              'h-px',
              'bg-slate-200',
              'dark:bg-metal-700',
              classNames?.divider,
            )}
            aria-hidden="true"
          />

          <motion.div
            className="flex gap-8"
            role="application"
            aria-label={ariaLabelCalendar}
            initial={false}
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
                    classNames?.navButton,
                    (disabled || !canLeftNavigatePrev) &&
                      cn(
                        calendarNavButtonDisabledVariants(),
                        classNames?.navButtonDisabled,
                      ),
                  )}
                  aria-label={ariaLabelPrevMonthStart}
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
                    classNames?.navButton,
                    (disabled || !canLeftNavigateNext) &&
                      cn(
                        calendarNavButtonDisabledVariants(),
                        classNames?.navButtonDisabled,
                      ),
                  )}
                  aria-label={ariaLabelNextMonthStart}
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
                    'absolute',
                    'left-0',
                    'top-0',
                    'z-10',
                    'p-1',
                    'bg-white',
                    'dark:bg-metal-800',
                    classNames?.navButton,
                    (disabled || !canRightNavigatePrev) &&
                      cn(
                        calendarNavButtonDisabledVariants(),
                        classNames?.navButtonDisabled,
                      ),
                  )}
                  aria-label={ariaLabelPrevMonthEnd}
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
                    'absolute',
                    'right-0',
                    'top-0',
                    'z-10',
                    'p-1',
                    'bg-white',
                    'dark:bg-metal-800',
                    classNames?.navButton,
                    (disabled || !canRightNavigateNext) &&
                      cn(
                        calendarNavButtonDisabledVariants(),
                        classNames?.navButtonDisabled,
                      ),
                  )}
                  aria-label={ariaLabelNextMonthEnd}
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
        {!(hideDisabledNavigation && !canNavigatePrev) && (
          <button
            type="button"
            onClick={handlePrevMonth}
            disabled={disabled || isAnimating || !canNavigatePrev}
            className={cn(
              calendarNavButtonVariants(),
              'absolute left-0 top-3 z-10',
              classNames?.navButton,
              (disabled || !canNavigatePrev) &&
                cn(
                  calendarNavButtonDisabledVariants(),
                  classNames?.navButtonDisabled,
                ),
            )}
            aria-label={ariaLabelPrevMonth}
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
              classNames?.navButton,
              (disabled || !canNavigateNext) &&
                cn(
                  calendarNavButtonDisabledVariants(),
                  classNames?.navButtonDisabled,
                ),
            )}
            aria-label={ariaLabelNextMonth}
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        )}

        {/* Full-width divider line */}
        <div
          className={cn(
            'absolute',
            'left-0',
            'right-0',
            'top-14',
            'h-px',
            'bg-slate-200',
            'dark:bg-metal-600',
            classNames?.divider,
          )}
          aria-hidden="true"
        />

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
