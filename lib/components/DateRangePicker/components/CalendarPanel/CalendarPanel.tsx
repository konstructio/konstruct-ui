import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { FC, useCallback, useState, useEffect, useRef } from 'react';
import { DayPicker, DateRange as DayPickerDateRange } from 'react-day-picker';

import { cn } from '@/utils';

import { useDateRangePicker } from '../../contexts';
import { CalendarPanelProps } from './CalendarPanel.types';
import {
  calendarPanelVariants,
  calendarNavButtonVariants,
  calendarMonthTitleVariants,
  calendarDividerVariants,
  calendarGridContainerVariants,
} from './CalendarPanel.variants';
import { getMonthName } from '../../utils';

import 'react-day-picker/style.css';
import './CalendarPanel.css';

type SlideDirection = 'left' | 'right' | null;

const SINGLE_MONTH_WIDTH = 259;
const GAP_WIDTH = 32;

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
    '[&>button]:!rounded-none',
    '[&>button]:relative',
    '[&>button]:z-10',
    '[&>button]:hover:!bg-blue-100',
    'dark:[&>button]:!text-white',
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

// Helper to get adjacent months
const getPrevMonth = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth() - 1, 1);

const getNextMonth = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 1);

export const CalendarPanel: FC<CalendarPanelProps> = ({
  className,
  calendarWidth = 550,
}) => {
  const {
    range,
    displayedMonths,
    disabled,
    animationDuration,
    setRange,
    navigatePrevMonth,
    navigateNextMonth,
  } = useDateRangePicker();

  const [slideDirection, setSlideDirection] = useState<SlideDirection>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animateTransform, setAnimateTransform] = useState(false);
  const [enableTransition, setEnableTransition] = useState(true);

  // Internal months state - controlled by this component for smooth animations
  const [internalMonths, setInternalMonths] =
    useState<[Date, Date]>(displayedMonths);

  const carouselRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const slideWidth = SINGLE_MONTH_WIDTH + GAP_WIDTH;

  // Calculate 6 months to always render (2 buffer on each side):
  // [prev2] [prev1] [leftMonth] [rightMonth] [next1] [next2]
  const prev2Month = getPrevMonth(getPrevMonth(internalMonths[0]));
  const prev1Month = getPrevMonth(internalMonths[0]);
  const leftMonth = internalMonths[0];
  const rightMonth = internalMonths[1];
  const next1Month = getNextMonth(internalMonths[1]);
  const next2Month = getNextMonth(getNextMonth(internalMonths[1]));

  // Total width for 6 months
  const carouselTotalWidth = 6 * SINGLE_MONTH_WIDTH + 5 * GAP_WIDTH;

  // Base offset to show months at index 2 and 3 (leftMonth and rightMonth)
  const baseOffset = -2 * (SINGLE_MONTH_WIDTH + GAP_WIDTH);

  // Sync with external displayedMonths changes (e.g., from presets)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Only sync if not currently animating and months are different
    if (!isAnimating) {
      const currentTime = internalMonths[0].getTime();
      const newTime = displayedMonths[0].getTime();

      if (currentTime !== newTime) {
        // Determine direction based on time difference
        const diff = newTime - currentTime;
        const monthsDiff = Math.round(diff / (30 * 24 * 60 * 60 * 1000));

        // If it's just one month difference, animate
        if (Math.abs(monthsDiff) === 1) {
          const direction = monthsDiff > 0 ? 'left' : 'right';
          setSlideDirection(direction);
          setIsAnimating(true);
          setAnimateTransform(false);
        } else {
          // For larger jumps (presets), just update immediately
          setInternalMonths(displayedMonths);
        }
      }
    }
  }, [displayedMonths, internalMonths, isAnimating]);

  // Trigger animation after direction is set
  useEffect(() => {
    if (isAnimating && !animateTransform && slideDirection) {
      if (carouselRef.current) {
        void carouselRef.current.offsetHeight;
      }
      requestAnimationFrame(() => {
        setAnimateTransform(true);
      });
    }
  }, [isAnimating, animateTransform, slideDirection]);

  // After animation completes, update internal months
  useEffect(() => {
    if (isAnimating && animateTransform) {
      const timer = setTimeout(() => {
        // Disable transition first
        setEnableTransition(false);

        // Wait for the transition disable to apply, then update months
        requestAnimationFrame(() => {
          // Force a reflow to ensure transition is disabled
          if (carouselRef.current) {
            void carouselRef.current.offsetHeight;
          }

          // Now update internal months - transform will snap to baseOffset
          setInternalMonths((prev) => {
            if (slideDirection === 'left') {
              return [prev[1], getNextMonth(prev[1])];
            } else {
              return [getPrevMonth(prev[0]), prev[0]];
            }
          });

          setIsAnimating(false);
          setSlideDirection(null);
          setAnimateTransform(false);

          // Re-enable transition after DOM has settled
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setEnableTransition(true);
            });
          });
        });
      }, animationDuration);

      return () => clearTimeout(timer);
    }
  }, [isAnimating, animateTransform, animationDuration, slideDirection]);

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

  // Handle navigation - just set direction and start animation
  const handlePrevMonth = useCallback(() => {
    if (isAnimating || disabled) return;
    setSlideDirection('right');
    setIsAnimating(true);
    setAnimateTransform(false);
    // Also update the context
    navigatePrevMonth();
  }, [isAnimating, disabled, navigatePrevMonth]);

  const handleNextMonth = useCallback(() => {
    if (isAnimating || disabled) return;
    setSlideDirection('left');
    setIsAnimating(true);
    setAnimateTransform(false);
    // Also update the context
    navigateNextMonth();
  }, [isAnimating, disabled, navigateNextMonth]);

  // Calculate transform
  const getTransform = () => {
    let offset = baseOffset;

    if (isAnimating && animateTransform) {
      if (slideDirection === 'left') {
        // Slide left: move one more month to the left
        offset = baseOffset - slideWidth;
      } else if (slideDirection === 'right') {
        // Slide right: move one month to the right (towards 0)
        offset = baseOffset + slideWidth;
      }
    }

    return `translateX(${offset}px)`;
  };

  // Render a single month calendar with header
  const renderSingleMonth = (month: Date) => (
    <div
      key={`${month.getFullYear()}-${month.getMonth()}`}
      className="shrink-0"
      style={{ width: SINGLE_MONTH_WIDTH }}
    >
      {/* Month Header */}
      <div className="flex items-center mb-4 h-6">
        <span
          className={cn(calendarMonthTitleVariants(), 'flex-1 text-center')}
        >
          {getMonthLabel(month)}
        </span>
      </div>

      {/* Calendar */}
      <DayPicker
        mode="range"
        selected={{ from: range.from, to: range.to }}
        onSelect={handleRangeSelect}
        month={month}
        numberOfMonths={1}
        disabled={disabled}
        hideNavigation
        animate={false}
        classNames={dayPickerClassNames}
      />
    </div>
  );

  const customEasing = 'cubic-bezier(0.25, 0.1, 0.25, 1)';

  // Always render 6 months (2 buffer on each side)
  const monthsToRender = [
    prev2Month,
    prev1Month,
    leftMonth,
    rightMonth,
    next1Month,
    next2Month,
  ];

  return (
    <div className={cn(calendarPanelVariants({ className }))}>
      {/* Divider */}
      <div className={cn(calendarDividerVariants())} />

      {/* Calendar Carousel */}
      <div
        className={cn(
          calendarGridContainerVariants(),
          'overflow-hidden relative justify-start!',
        )}
        style={{ width: calendarWidth }}
      >
        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={handlePrevMonth}
          disabled={disabled || isAnimating}
          className={cn(
            calendarNavButtonVariants(),
            'absolute left-0 top-3 z-10',
          )}
          aria-label="Previous month"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={handleNextMonth}
          disabled={disabled || isAnimating}
          className={cn(
            calendarNavButtonVariants(),
            'absolute right-0 top-3 z-10',
          )}
          aria-label="Next month"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>

        <div
          ref={carouselRef}
          className="flex"
          role="application"
          aria-label="Date range picker calendar"
          style={{
            width: carouselTotalWidth,
            gap: GAP_WIDTH,
            transform: getTransform(),
            willChange: 'transform',
            transition:
              enableTransition && animateTransform
                ? `transform ${animationDuration}ms ${customEasing}`
                : 'none',
          }}
        >
          {monthsToRender.map((month) => renderSingleMonth(month))}
        </div>
      </div>
    </div>
  );
};

CalendarPanel.displayName = 'DateRangePickerCalendarPanel';
