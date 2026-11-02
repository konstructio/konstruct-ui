import { PointerEvent, useCallback, useEffect, useRef, useState } from 'react';

import {
  ANIMATION_DELAY_MS,
  ANIMATION_DURATION_MS,
  DEFAULT_MAX_WIDTH,
  DEFAULT_MIN_WIDTH,
  DEFAULT_WIDTH,
  KEYBOARD_RESIZE_STEP,
} from '../constants';

import { UseDrawerProps, UseDrawerReturn } from './useDrawer.types';

export const useDrawer = ({
  canResize = false,
  defaultWidth = DEFAULT_WIDTH,
  isOpen,
  maxWidth = DEFAULT_MAX_WIDTH,
  minWidth = DEFAULT_MIN_WIDTH,
  position = 'right',
  onClose,
}: UseDrawerProps): UseDrawerReturn => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [width, setWidth] = useState(defaultWidth);

  const resizePointerRef = useRef<number | null>(null);

  // Handle open/close animation
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isOpen) {
      setIsVisible(true);
      timer = setTimeout(() => setIsAnimating(true), ANIMATION_DELAY_MS);
    } else {
      setIsAnimating(false);
      timer = setTimeout(() => setIsVisible(false), ANIMATION_DURATION_MS);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const controller = new AbortController();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        onClose?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  }, [isOpen, onClose]);

  const resetBodyStyles = useCallback(() => {
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  }, []);

  const handleResizePointerDown = (event: PointerEvent<HTMLElement>) => {
    if (!canResize || (event.pointerType === 'mouse' && event.button !== 0)) {
      return;
    }

    event.preventDefault();
    resizePointerRef.current = event.pointerId;
    event.currentTarget.setPointerCapture?.(event.pointerId);
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  };

  const handleResizePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (!canResize || resizePointerRef.current !== event.pointerId) {
      return;
    }

    const nextWidth =
      position === 'right' ? window.innerWidth - event.clientX : event.clientX;

    setWidth(Math.max(minWidth, Math.min(maxWidth, nextWidth)));
  };

  const handleResizePointerEnd = (event: PointerEvent<HTMLElement>) => {
    if (resizePointerRef.current !== event.pointerId) {
      return;
    }

    resizePointerRef.current = null;

    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    resetBodyStyles();
  };

  // Handle keyboard resize for accessibility
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!canResize) return;

    const isIncreaseKey =
      (position === 'right' && event.key === 'ArrowLeft') ||
      (position === 'left' && event.key === 'ArrowRight');
    const isDecreaseKey =
      (position === 'right' && event.key === 'ArrowRight') ||
      (position === 'left' && event.key === 'ArrowLeft');

    if (isIncreaseKey) {
      event.preventDefault();
      setWidth((prev) => Math.min(maxWidth, prev + KEYBOARD_RESIZE_STEP));
    } else if (isDecreaseKey) {
      event.preventDefault();
      setWidth((prev) => Math.max(minWidth, prev - KEYBOARD_RESIZE_STEP));
    }
  };

  useEffect(() => {
    return resetBodyStyles;
  }, [resetBodyStyles]);

  const translateClass = isAnimating
    ? 'translate-x-0'
    : position === 'left'
      ? '-translate-x-full'
      : 'translate-x-full';

  return {
    isAnimating,
    isVisible,
    width,
    translateClass,
    handleKeyDown,
    handleResizePointerDown,
    handleResizePointerMove,
    handleResizePointerEnd,
  };
};
