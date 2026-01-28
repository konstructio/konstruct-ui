import { useState, useEffect, useRef, useMemo, useCallback } from 'react';

import { SlideDirection } from '../CalendarPanel.types';
import { SINGLE_MONTH_WIDTH, MS_PER_MONTH } from '../constants';
import {
  getWeeksInMonth,
  calculateCalendarHeight,
  getPrevMonth,
  getNextMonth,
} from '../utils';

export type UseIndependentCarouselProps = {
  displayedMonths: [Date, Date];
  animationDuration: number;
  navigationMode: 'together' | 'independent';
};

export const useIndependentCarousel = ({
  displayedMonths,
  animationDuration,
  navigationMode,
}: UseIndependentCarouselProps) => {
  // Left month state
  const [leftInternalMonth, setLeftInternalMonth] = useState<Date>(
    displayedMonths[0],
  );
  const [leftSlideDirection, setLeftSlideDirection] =
    useState<SlideDirection>(null);
  const [isLeftAnimating, setIsLeftAnimating] = useState(false);
  const [leftAnimateTransform, setLeftAnimateTransform] = useState(false);
  const [enableLeftTransition, setEnableLeftTransition] = useState(true);
  const leftCarouselRef = useRef<HTMLDivElement>(null);
  const isFirstRenderLeft = useRef(true);

  // Right month state
  const [rightInternalMonth, setRightInternalMonth] = useState<Date>(
    displayedMonths[1],
  );
  const [rightSlideDirection, setRightSlideDirection] =
    useState<SlideDirection>(null);
  const [isRightAnimating, setIsRightAnimating] = useState(false);
  const [rightAnimateTransform, setRightAnimateTransform] = useState(false);
  const [enableRightTransition, setEnableRightTransition] = useState(true);
  const rightCarouselRef = useRef<HTMLDivElement>(null);
  const isFirstRenderRight = useRef(true);

  // Sync left month with animation
  useEffect(() => {
    if (navigationMode !== 'independent') {
      return;
    }

    if (isFirstRenderLeft.current) {
      isFirstRenderLeft.current = false;
      return;
    }

    if (!isLeftAnimating) {
      const currentTime = leftInternalMonth.getTime();
      const newTime = displayedMonths[0].getTime();

      if (currentTime !== newTime) {
        const diff = newTime - currentTime;
        const monthsDiff = Math.round(diff / MS_PER_MONTH);

        if (Math.abs(monthsDiff) === 1) {
          const direction = monthsDiff > 0 ? 'left' : 'right';
          setLeftSlideDirection(direction);
          setIsLeftAnimating(true);
          setLeftAnimateTransform(false);
        } else {
          setLeftInternalMonth(displayedMonths[0]);
        }
      }
    }
  }, [displayedMonths, leftInternalMonth, isLeftAnimating, navigationMode]);

  // Sync right month with animation
  useEffect(() => {
    if (navigationMode !== 'independent') {
      return;
    }

    if (isFirstRenderRight.current) {
      isFirstRenderRight.current = false;
      return;
    }

    if (!isRightAnimating) {
      const currentTime = rightInternalMonth.getTime();
      const newTime = displayedMonths[1].getTime();

      if (currentTime !== newTime) {
        const diff = newTime - currentTime;
        const monthsDiff = Math.round(diff / MS_PER_MONTH);

        if (Math.abs(monthsDiff) === 1) {
          const direction = monthsDiff > 0 ? 'left' : 'right';
          setRightSlideDirection(direction);
          setIsRightAnimating(true);
          setRightAnimateTransform(false);
        } else {
          setRightInternalMonth(displayedMonths[1]);
        }
      }
    }
  }, [displayedMonths, rightInternalMonth, isRightAnimating, navigationMode]);

  // Trigger left animation
  useEffect(() => {
    if (isLeftAnimating && !leftAnimateTransform && leftSlideDirection) {
      if (leftCarouselRef.current) {
        void leftCarouselRef.current.offsetHeight;
      }
      requestAnimationFrame(() => {
        setLeftAnimateTransform(true);
      });
    }
  }, [isLeftAnimating, leftAnimateTransform, leftSlideDirection]);

  // Trigger right animation
  useEffect(() => {
    if (isRightAnimating && !rightAnimateTransform && rightSlideDirection) {
      if (rightCarouselRef.current) {
        void rightCarouselRef.current.offsetHeight;
      }
      requestAnimationFrame(() => {
        setRightAnimateTransform(true);
      });
    }
  }, [isRightAnimating, rightAnimateTransform, rightSlideDirection]);

  // Complete left animation
  useEffect(() => {
    if (isLeftAnimating && leftAnimateTransform) {
      const timer = setTimeout(() => {
        setEnableLeftTransition(false);
        requestAnimationFrame(() => {
          if (leftCarouselRef.current) {
            void leftCarouselRef.current.offsetHeight;
          }

          setLeftInternalMonth((prev) => {
            if (leftSlideDirection === 'left') {
              return getNextMonth(prev);
            } else {
              return getPrevMonth(prev);
            }
          });

          setIsLeftAnimating(false);
          setLeftSlideDirection(null);
          setLeftAnimateTransform(false);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setEnableLeftTransition(true);
            });
          });
        });
      }, animationDuration);
      return () => clearTimeout(timer);
    }
  }, [
    isLeftAnimating,
    leftAnimateTransform,
    animationDuration,
    leftSlideDirection,
  ]);

  // Complete right animation
  useEffect(() => {
    if (isRightAnimating && rightAnimateTransform) {
      const timer = setTimeout(() => {
        setEnableRightTransition(false);
        requestAnimationFrame(() => {
          if (rightCarouselRef.current) {
            void rightCarouselRef.current.offsetHeight;
          }

          setRightInternalMonth((prev) => {
            if (rightSlideDirection === 'left') {
              return getNextMonth(prev);
            } else {
              return getPrevMonth(prev);
            }
          });

          setIsRightAnimating(false);
          setRightSlideDirection(null);
          setRightAnimateTransform(false);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setEnableRightTransition(true);
            });
          });
        });
      }, animationDuration);
      return () => clearTimeout(timer);
    }
  }, [
    isRightAnimating,
    rightAnimateTransform,
    animationDuration,
    rightSlideDirection,
  ]);

  // Calculate height based on current internal months
  const calendarHeight = useMemo(() => {
    let leftMonthToConsider = leftInternalMonth;
    let rightMonthToConsider = rightInternalMonth;

    if (isLeftAnimating && leftSlideDirection === 'left') {
      leftMonthToConsider = getNextMonth(leftInternalMonth);
    } else if (isLeftAnimating && leftSlideDirection === 'right') {
      leftMonthToConsider = getPrevMonth(leftInternalMonth);
    }

    if (isRightAnimating && rightSlideDirection === 'left') {
      rightMonthToConsider = getNextMonth(rightInternalMonth);
    } else if (isRightAnimating && rightSlideDirection === 'right') {
      rightMonthToConsider = getPrevMonth(rightInternalMonth);
    }

    const maxWeeks = Math.max(
      getWeeksInMonth(leftMonthToConsider),
      getWeeksInMonth(rightMonthToConsider),
    );
    return calculateCalendarHeight(maxWeeks);
  }, [
    leftInternalMonth,
    rightInternalMonth,
    isLeftAnimating,
    isRightAnimating,
    leftSlideDirection,
    rightSlideDirection,
  ]);

  // Calculate transforms
  const getLeftTransform = useCallback(() => {
    let offset = -SINGLE_MONTH_WIDTH;
    if (isLeftAnimating && leftAnimateTransform) {
      if (leftSlideDirection === 'left') {
        offset = -2 * SINGLE_MONTH_WIDTH;
      } else if (leftSlideDirection === 'right') {
        offset = 0;
      }
    }
    return `translateX(${offset}px)`;
  }, [isLeftAnimating, leftAnimateTransform, leftSlideDirection]);

  const getRightTransform = useCallback(() => {
    let offset = -SINGLE_MONTH_WIDTH;
    if (isRightAnimating && rightAnimateTransform) {
      if (rightSlideDirection === 'left') {
        offset = -2 * SINGLE_MONTH_WIDTH;
      } else if (rightSlideDirection === 'right') {
        offset = 0;
      }
    }
    return `translateX(${offset}px)`;
  }, [isRightAnimating, rightAnimateTransform, rightSlideDirection]);

  // Months for carousels
  const leftPrevMonth = getPrevMonth(leftInternalMonth);
  const leftNextMonth = getNextMonth(leftInternalMonth);
  const rightPrevMonth = getPrevMonth(rightInternalMonth);
  const rightNextMonth = getNextMonth(rightInternalMonth);

  return {
    // Left month
    leftInternalMonth,
    leftPrevMonth,
    leftNextMonth,
    leftCarouselRef,
    isLeftAnimating,
    enableLeftTransition,
    leftAnimateTransform,
    getLeftTransform,
    // Right month
    rightInternalMonth,
    rightPrevMonth,
    rightNextMonth,
    rightCarouselRef,
    isRightAnimating,
    enableRightTransition,
    rightAnimateTransform,
    getRightTransform,
    // Shared
    calendarHeight,
  };
};
