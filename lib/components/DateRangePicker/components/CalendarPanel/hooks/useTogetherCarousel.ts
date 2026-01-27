import { useState, useEffect, useRef, useMemo, useCallback } from 'react';

import { SlideDirection } from '../CalendarPanel.types';
import { SINGLE_MONTH_WIDTH, GAP_WIDTH } from '../constants';
import {
  getWeeksInMonth,
  calculateCalendarHeight,
  getPrevMonth,
  getNextMonth,
} from '../utils';

interface UseTogetherCarouselProps {
  displayedMonths: [Date, Date];
  animationDuration: number;
  disabled: boolean;
  canNavigatePrev: boolean;
  canNavigateNext: boolean;
  navigationMode: 'together' | 'independent';
  navigatePrevMonth: () => void;
  navigateNextMonth: () => void;
}

export const useTogetherCarousel = ({
  displayedMonths,
  animationDuration,
  disabled,
  canNavigatePrev,
  canNavigateNext,
  navigationMode,
  navigatePrevMonth,
  navigateNextMonth,
}: UseTogetherCarouselProps) => {
  const [slideDirection, setSlideDirection] = useState<SlideDirection>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animateTransform, setAnimateTransform] = useState(false);
  const [enableTransition, setEnableTransition] = useState(true);

  const [internalMonths, setInternalMonths] =
    useState<[Date, Date]>(displayedMonths);

  const carouselRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const slideWidth = SINGLE_MONTH_WIDTH + GAP_WIDTH;

  // Calculate 6 months to always render (2 buffer on each side)
  const prev2Month = getPrevMonth(getPrevMonth(internalMonths[0]));
  const prev1Month = getPrevMonth(internalMonths[0]);
  const leftMonth = internalMonths[0];
  const rightMonth = internalMonths[1];
  const next1Month = getNextMonth(internalMonths[1]);
  const next2Month = getNextMonth(getNextMonth(internalMonths[1]));

  // Calculate dynamic height based on TARGET months
  const calendarHeight = useMemo(() => {
    let monthsToConsider: Date[];

    if (isAnimating && slideDirection === 'left') {
      monthsToConsider = [rightMonth, next1Month];
    } else if (isAnimating && slideDirection === 'right') {
      monthsToConsider = [prev1Month, leftMonth];
    } else {
      monthsToConsider = [leftMonth, rightMonth];
    }

    const maxWeeks = Math.max(...monthsToConsider.map(getWeeksInMonth));
    return calculateCalendarHeight(maxWeeks);
  }, [
    isAnimating,
    slideDirection,
    leftMonth,
    rightMonth,
    next1Month,
    prev1Month,
  ]);

  // Total width for 6 months
  const carouselTotalWidth = 6 * SINGLE_MONTH_WIDTH + 5 * GAP_WIDTH;

  // Base offset to show months at index 2 and 3
  const baseOffset = -2 * (SINGLE_MONTH_WIDTH + GAP_WIDTH);

  // Sync with external displayedMonths changes
  useEffect(() => {
    if (navigationMode === 'independent') return;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!isAnimating) {
      const currentTime = internalMonths[0].getTime();
      const newTime = displayedMonths[0].getTime();

      if (currentTime !== newTime) {
        const diff = newTime - currentTime;
        const monthsDiff = Math.round(diff / (30 * 24 * 60 * 60 * 1000));

        if (Math.abs(monthsDiff) === 1) {
          const direction = monthsDiff > 0 ? 'left' : 'right';
          setSlideDirection(direction);
          setIsAnimating(true);
          setAnimateTransform(false);
        } else {
          setInternalMonths(displayedMonths);
        }
      }
    }
  }, [displayedMonths, internalMonths, isAnimating, navigationMode]);

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
        setEnableTransition(false);

        requestAnimationFrame(() => {
          if (carouselRef.current) {
            void carouselRef.current.offsetHeight;
          }

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

  // Handle navigation
  const handlePrevMonth = useCallback(() => {
    if (isAnimating || disabled || !canNavigatePrev) return;
    setSlideDirection('right');
    setIsAnimating(true);
    setAnimateTransform(false);
    navigatePrevMonth();
  }, [isAnimating, disabled, canNavigatePrev, navigatePrevMonth]);

  const handleNextMonth = useCallback(() => {
    if (isAnimating || disabled || !canNavigateNext) return;
    setSlideDirection('left');
    setIsAnimating(true);
    setAnimateTransform(false);
    navigateNextMonth();
  }, [isAnimating, disabled, canNavigateNext, navigateNextMonth]);

  // Calculate transform
  const getTransform = useCallback(() => {
    let offset = baseOffset;

    if (isAnimating && animateTransform) {
      if (slideDirection === 'left') {
        offset = baseOffset - slideWidth;
      } else if (slideDirection === 'right') {
        offset = baseOffset + slideWidth;
      }
    }

    return `translateX(${offset}px)`;
  }, [baseOffset, isAnimating, animateTransform, slideDirection, slideWidth]);

  // Months to render
  const monthsToRender = [
    prev2Month,
    prev1Month,
    leftMonth,
    rightMonth,
    next1Month,
    next2Month,
  ];

  return {
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
  };
};
