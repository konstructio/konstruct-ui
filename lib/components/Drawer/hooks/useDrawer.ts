import { useCallback, useEffect, useRef, useState } from 'react';

import {
  DEFAULT_MAX_WIDTH,
  DEFAULT_MIN_WIDTH,
  DEFAULT_WIDTH,
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

  // Handle open/close animation
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isOpen) {
      setIsVisible(true);
      timer = setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      timer = setTimeout(() => setIsVisible(false), 300);
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

  // Handle resize mouse move
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDraggingRef.current || !canResize) return;

      let newWidth: number;
      if (position === 'right') {
        newWidth = window.innerWidth - e.clientX;
      } else {
        newWidth = e.clientX;
      }

      newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));
      setWidth(newWidth);
    },
    [position, minWidth, maxWidth, canResize],
  );

  // Handle resize mouse up
  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  }, [handleMouseMove]);

  // Handle resize mouse down
  const handleMouseDown = useCallback(() => {
    isDraggingRef.current = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }, [handleMouseMove, handleMouseUp]);

  // Cleanup resize listeners
  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  // Get translate class based on animation state
  const getTranslateClass = useCallback(() => {
    if (isAnimating) {
      return 'translate-x-0';
    }
    return position === 'left' ? '-translate-x-full' : 'translate-x-full';
  }, [isAnimating, position]);

  return {
    isAnimating,
    isVisible,
    width,
    getTranslateClass,
    handleMouseDown,
  };
};
