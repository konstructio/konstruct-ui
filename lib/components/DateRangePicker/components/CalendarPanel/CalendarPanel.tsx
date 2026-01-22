import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import {
  FC,
  useCallback,
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
} from 'react';
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
} from '../../DateRangePicker.variants';
import { getMonthName } from '../../utils';

import 'react-day-picker/style.css';
import '../../DateRangePicker.css';

type SlideDirection = 'left' | 'right' | null;

const dayPickerClassNames = {
  root: 'w-fit',
  months: 'flex gap-8',
  month: 'flex flex-col w-[259px]',
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
  outside: cn('[&>button]:text-[#90a1b9]', 'dark:[&>button]:text-metal-500'),
  selected: cn(
    '[&>button]:bg-blue-600',
    '[&>button]:text-white',
    '[&>button]:hover:bg-blue-700',
    'dark:[&>button]:bg-aurora-500',
    'dark:[&>button]:hover:bg-aurora-400',
    'dark:[&>button]:text-metal-900',
  ),
  range_start: cn(
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
    'before:inset-y-0',
    'before:left-1/2',
    'before:right-0',
    'before:!bg-[#EFF6FF]',
    'dark:before:!bg-aurora-900/20',
  ),
  range_end: cn(
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
    'before:inset-y-0',
    'before:left-0',
    'before:right-1/2',
    'before:!bg-[#EFF6FF]',
    'dark:before:!bg-aurora-900/20',
  ),
  range_middle: cn(
    '!bg-[#EFF6FF]',
    '[&>button]:!text-[#314158]',
    '[&>button]:!bg-transparent',
    '[&>button]:!rounded-none',
    '[&>button]:hover:!bg-blue-100',
    'dark:!bg-aurora-900/20',
    'dark:[&>button]:!text-white',
  ),
  table: 'w-full border-collapse',
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

// Helper to get month labels for a pair of months
const getMonthLabels = (months: [Date, Date]) => ({
  left: `${getMonthName(months[0].getMonth())} ${months[0].getFullYear()}`,
  right: `${getMonthName(months[1].getMonth())} ${months[1].getFullYear()}`,
});

export const CalendarPanel: FC<CalendarPanelProps> = ({ className }) => {
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
  const [prevDisplayedMonths, setPrevDisplayedMonths] = useState<
    [Date, Date] | null
  >(null);
  const [animateTransform, setAnimateTransform] = useState(false);
  const prevMonthRef = useRef<Date>(displayedMonths[0]);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Detect month change and trigger animation
  useLayoutEffect(() => {
    const prevMonth = prevMonthRef.current;
    const currentMonth = displayedMonths[0];

    if (prevMonth.getTime() !== currentMonth.getTime()) {
      const direction =
        currentMonth.getTime() > prevMonth.getTime() ? 'left' : 'right';

      // Store previous months for animation
      setPrevDisplayedMonths([
        prevMonth,
        new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1, 1),
      ]);
      setSlideDirection(direction);
      setIsAnimating(true);
      setAnimateTransform(false);

      prevMonthRef.current = currentMonth;
    }
  }, [displayedMonths]);

  // Trigger animation after initial render
  useEffect(() => {
    if (isAnimating && !animateTransform) {
      // Force a reflow before enabling animation
      if (carouselRef.current) {
        void carouselRef.current.offsetHeight;
      }
      requestAnimationFrame(() => {
        setAnimateTransform(true);
      });
    }
  }, [isAnimating, animateTransform]);

  // Clean up animation state (add small buffer to ensure transition completes)
  useEffect(() => {
    if (isAnimating && animateTransform) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setSlideDirection(null);
        setPrevDisplayedMonths(null);
        setAnimateTransform(false);
      }, animationDuration + 50); // Add 50ms buffer to avoid jump

      return () => clearTimeout(timer);
    }
  }, [isAnimating, animateTransform, animationDuration]);

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

  // Calculate the width of both calendars (259px each + 32px gap)
  const calendarWidth = 259 * 2 + 32; // 550px

  // Get labels for current and previous months
  const currentLabels = getMonthLabels(displayedMonths);
  const prevLabels = prevDisplayedMonths
    ? getMonthLabels(prevDisplayedMonths)
    : null;

  // Calculate transform based on direction and animation phase
  const getTransform = () => {
    if (!isAnimating) return 'translateX(0)';

    if (slideDirection === 'left') {
      // Forward: start at 0, animate to -width
      return animateTransform
        ? `translateX(-${calendarWidth}px)`
        : 'translateX(0)';
    } else {
      // Backward: start at -width, animate to 0
      return animateTransform
        ? 'translateX(0)'
        : `translateX(-${calendarWidth}px)`;
    }
  };

  // Render a single slide with month headers and calendar
  const renderSlide = (
    months: [Date, Date],
    labels: { left: string; right: string },
    key: string,
    isMain = false,
  ) => (
    <div key={key} className="flex-shrink-0" style={{ width: calendarWidth }}>
      {/* Month Headers */}
      <div className="flex gap-8 mb-4">
        <div className="w-[259px] flex items-center">
          <span
            className={cn(calendarMonthTitleVariants(), 'flex-1 text-center')}
          >
            {labels.left}
          </span>
        </div>
        <div className="w-[259px] flex items-center">
          <span
            className={cn(calendarMonthTitleVariants(), 'flex-1 text-center')}
          >
            {labels.right}
          </span>
        </div>
      </div>
      {/* Calendar */}
      <DayPicker
        mode="range"
        selected={{ from: range.from, to: range.to }}
        onSelect={handleRangeSelect}
        month={months[0]}
        numberOfMonths={2}
        disabled={disabled}
        showOutsideDays
        hideNavigation
        animate={false}
        classNames={dayPickerClassNames}
        {...(isMain && {
          role: 'application',
          'aria-label': 'Date range picker calendar',
        })}
      />
    </div>
  );

  // Custom easing: starts normal, slows down significantly at the end
  const customEasing = 'cubic-bezier(0.25, 0.1, 0.25, 1)';

  return (
    <div className={cn(calendarPanelVariants({ className }))}>
      {/* Divider */}
      <div className={cn(calendarDividerVariants())} />

      {/* Calendar Carousel with month names and fixed arrows */}
      <div
        className={cn(
          calendarGridContainerVariants(),
          'overflow-hidden relative',
        )}
        style={{ width: calendarWidth }}
      >
        {/* Fixed Navigation Arrows - positioned absolutely */}
        <button
          type="button"
          onClick={navigatePrevMonth}
          disabled={disabled || isAnimating}
          className={cn(
            calendarNavButtonVariants(),
            'absolute left-0 top-0 z-10',
          )}
          aria-label="Previous month"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          type="button"
          onClick={navigateNextMonth}
          disabled={disabled || isAnimating}
          className={cn(
            calendarNavButtonVariants(),
            'absolute right-0 top-0 z-10',
          )}
          aria-label="Next month"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
        <div
          ref={carouselRef}
          className="flex"
          style={{
            width: isAnimating ? calendarWidth * 2 : calendarWidth,
            transform: getTransform(),
            transition: animateTransform
              ? `transform ${animationDuration}ms ${customEasing}`
              : 'none',
          }}
        >
          {/* For left animation (forward): [prev][current] */}
          {slideDirection === 'left' &&
            isAnimating &&
            prevDisplayedMonths &&
            prevLabels &&
            renderSlide(prevDisplayedMonths, prevLabels, 'prev')}

          {/* For right animation (backward): [current][prev] - current comes first */}
          {slideDirection === 'right' &&
            isAnimating &&
            renderSlide(displayedMonths, currentLabels, 'current-anim', true)}

          {/* Main current view (always rendered) */}
          {!(slideDirection === 'right' && isAnimating) &&
            renderSlide(displayedMonths, currentLabels, 'current', true)}

          {/* For left animation: current comes after prev */}
          {slideDirection === 'left' &&
            isAnimating &&
            renderSlide(displayedMonths, currentLabels, 'current-anim', true)}

          {/* For right animation (backward): [current][prev] - prev comes after */}
          {slideDirection === 'right' &&
            isAnimating &&
            prevDisplayedMonths &&
            prevLabels &&
            renderSlide(prevDisplayedMonths, prevLabels, 'prev')}
        </div>
      </div>
    </div>
  );
};

CalendarPanel.displayName = 'DateRangePickerCalendarPanel';
