import { TouchEvent, useRef, useState } from 'react';

import {
  SWIPE_AXIS_LOCK_DISTANCE,
  SWIPE_DISTANCE_RATIO,
  SWIPE_THRESHOLD,
  SWIPE_VELOCITY,
  SWIPE_VELOCITY_STALE_MS,
} from '../constants';

import {
  UseSwipeToCloseProps,
  UseSwipeToCloseReturn,
} from './useSwipeToClose.types';

type SwipeState = {
  startX: number;
  startY: number;
  axis: 'x' | 'y' | null;
  lastX: number;
  lastTime: number;
  velocity: number;
};

const RESIZE_HANDLE_SELECTOR = '[data-drawer-resize-handle]';

export const useSwipeToClose = ({
  enabled,
  position,
  onClose,
}: UseSwipeToCloseProps): UseSwipeToCloseReturn => {
  const [swipeOffset, setSwipeOffset] = useState<number | null>(null);
  const swipeRef = useRef<SwipeState | null>(null);

  const edgeSign = position === 'left' ? -1 : 1;

  const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
    const touch = event.touches?.[0];
    const target = event.target as Element | null;

    if (!enabled || !touch || target?.closest?.(RESIZE_HANDLE_SELECTOR)) {
      swipeRef.current = null;

      return;
    }

    swipeRef.current = {
      startX: touch.clientX,
      startY: touch.clientY,
      axis: null,
      lastX: touch.clientX,
      lastTime: event.timeStamp,
      velocity: 0,
    };
  };

  const handleTouchMove = (event: TouchEvent<HTMLElement>) => {
    const swipe = swipeRef.current;
    const touch = event.touches?.[0];

    if (!swipe || !touch) {
      return;
    }

    const deltaX = touch.clientX - swipe.startX;
    const deltaY = touch.clientY - swipe.startY;

    if (swipe.axis === null) {
      if (
        Math.max(Math.abs(deltaX), Math.abs(deltaY)) < SWIPE_AXIS_LOCK_DISTANCE
      ) {
        return;
      }

      swipe.axis = Math.abs(deltaX) > Math.abs(deltaY) ? 'x' : 'y';
    }

    if (swipe.axis !== 'x') {
      return;
    }

    const elapsed = event.timeStamp - swipe.lastTime;

    if (elapsed > 0) {
      swipe.velocity = (touch.clientX - swipe.lastX) / elapsed;
    }

    swipe.lastX = touch.clientX;
    swipe.lastTime = event.timeStamp;

    setSwipeOffset(edgeSign * Math.max(0, deltaX * edgeSign));
  };

  const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
    const swipe = swipeRef.current;
    const touch = event.changedTouches?.[0];

    swipeRef.current = null;
    setSwipeOffset(null);

    if (!enabled || !swipe || !touch || swipe.axis === 'y') {
      return;
    }

    const deltaX = touch.clientX - swipe.startX;
    const deltaY = touch.clientY - swipe.startY;

    if (Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }

    const distance = deltaX * edgeSign;
    const isVelocityFresh =
      event.timeStamp - swipe.lastTime <= SWIPE_VELOCITY_STALE_MS;
    const speed = isVelocityFresh ? swipe.velocity * edgeSign : 0;
    const threshold = Math.max(
      SWIPE_THRESHOLD,
      event.currentTarget.offsetWidth * SWIPE_DISTANCE_RATIO,
    );

    if (distance > 0 && (distance >= threshold || speed > SWIPE_VELOCITY)) {
      onClose?.();
    }
  };

  const handleTouchCancel = () => {
    swipeRef.current = null;
    setSwipeOffset(null);
  };

  return {
    swipeOffset,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleTouchCancel,
  };
};
