import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

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

  const isDraggingRef = useRef(false);

  // Store handlers in refs to avoid event listener recreation
  const handleMouseMoveRef = useRef<(e: MouseEvent) => void>(() => {});
  const handleMouseUpRef = useRef<() => void>(() => {});

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

  // Cleanup function for resize listeners
  const cleanupResizeListeners = useCallback(() => {
    document.removeEventListener('mousemove', handleMouseMoveRef.current);
    document.removeEventListener('mouseup', handleMouseUpRef.current);
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  }, []);

  // Update handler refs when dependencies change
  useEffect(() => {
    handleMouseMoveRef.current = (e: MouseEvent) => {
      if (!isDraggingRef.current || !canResize) return;

      let newWidth: number;
      if (position === 'right') {
        newWidth = window.innerWidth - e.clientX;
      } else {
        newWidth = e.clientX;
      }

      newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));
      setWidth(newWidth);
    };

    handleMouseUpRef.current = () => {
      isDraggingRef.current = false;
      cleanupResizeListeners();
    };
  }, [position, minWidth, maxWidth, canResize, cleanupResizeListeners]);

  // Handle resize mouse down
  const handleMouseDown = useCallback(() => {
    isDraggingRef.current = true;
    document.addEventListener('mousemove', handleMouseMoveRef.current);
    document.addEventListener('mouseup', handleMouseUpRef.current);
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }, []);

  // Handle keyboard resize for accessibility
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
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
    },
    [canResize, position, maxWidth, minWidth],
  );

  // Cleanup resize listeners on unmount
  useEffect(() => {
    return cleanupResizeListeners;
  }, [cleanupResizeListeners]);

  // Compute translate class based on animation state
  const translateClass = useMemo(() => {
    if (isAnimating) {
      return 'translate-x-0';
    }
    return position === 'left' ? '-translate-x-full' : 'translate-x-full';
  }, [isAnimating, position]);

  return {
    isAnimating,
    isVisible,
    width,
    translateClass,
    handleMouseDown,
    handleKeyDown,
  };
};
