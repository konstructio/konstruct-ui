'use client';
import { animate, motion, PanInfo, useMotionValue } from 'motion/react';
import {
  forwardRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react';

import { cn } from '@/utils';

import { Props, StepExitCustom } from './SheetStep.types';

const STEP_OFFSET = '100%';
const SPRING = { type: 'spring', stiffness: 380, damping: 38 } as const;
const INSTANT = { duration: 0 } as const;
const DRAG_RESISTANCE = 0.05;

type StepCustom = number | StepExitCustom;

const directionOf = (custom: StepCustom) =>
  typeof custom === 'number' ? custom : custom.direction;

// Forward, the new step slides in over the old one, which only drifts back a
// little; backward it is the old step that slides out over the new one. Both
// stay opaque, so the one on top covers the other instead of fading through.
const PARALLAX_OFFSET = '-30%';

const STEP_VARIANTS = {
  enter: (custom: StepCustom) =>
    directionOf(custom) > 0
      ? { x: STEP_OFFSET, opacity: 1, zIndex: 1 }
      : { x: PARALLAX_OFFSET, opacity: 1, zIndex: 0 },
  center: (custom: StepCustom) => ({
    x: 0,
    opacity: 1,
    zIndex: directionOf(custom) > 0 ? 1 : 0,
  }),
  exit: (custom: StepCustom) => {
    if (typeof custom === 'object' && custom.instant) {
      return { opacity: 0, transition: INSTANT };
    }

    return directionOf(custom) > 0
      ? { x: PARALLAX_OFFSET, opacity: 1, zIndex: 0 }
      : { x: STEP_OFFSET, opacity: 1, zIndex: 1 };
  },
};

/**
 * One step of a sheet's content. It owns its horizontal offset so a step that
 * was swiped away keeps that offset while it unmounts and the next step mounts
 * in place.
 *
 * The ref is forwarded because AnimatePresence's popLayout attaches one to
 * take the leaving step out of the flow; without it the step keeps its space
 * while it slides out and the sheet grows to the height of both steps.
 */
export const SheetStep = forwardRef<HTMLDivElement, Props>(
  (
    {
      step,
      direction,
      animated,
      canSwipeBack,
      onMount,
      commitSignal,
      isArmed,
      onBackStart,
      onBackMove,
      onBackEnd,
      onBackCommit,
      onBackCancel,
      children,
    },
    ref,
  ) => {
    const x = useMotionValue(0);
    const elementRef = useRef<HTMLDivElement | null>(null);
    const activeRef = useRef(false);
    const seenSignalRef = useRef(commitSignal);

    const setElement = useCallback(
      (node: HTMLDivElement | null) => {
        elementRef.current = node;

        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref],
    );

    useLayoutEffect(() => {
      onMount(elementRef.current?.getBoundingClientRect().height ?? 0);
    }, []);

    // The enter variant leaves `x` as a percentage string; a pixel animation
    // from there never reaches the DOM, so the value is normalised first.
    const toPixels = () => {
      const current = x.get() as number | string;

      if (typeof current === 'string') {
        const width = elementRef.current?.offsetWidth ?? 0;

        x.set((parseFloat(current) / 100) * width || 0);
      }
    };

    const slideOut = () => {
      x.stop();
      toPixels();
      animate(x, elementRef.current?.offsetWidth ?? 0, {
        ...SPRING,
        onComplete: onBackCommit,
      });
    };

    useEffect(() => {
      if (seenSignalRef.current === commitSignal) {
        return;
      }

      seenSignalRef.current = commitSignal;
      slideOut();
      // Only a bump of the signal slides the step out.
    }, [commitSignal]);

    const handlePanStart = (_event: PointerEvent, info: PanInfo) => {
      activeRef.current = canSwipeBack && isArmed(info);

      if (activeRef.current) {
        x.stop();
        toPixels();
        onBackStart();
      }
    };

    const handlePan = (_event: PointerEvent, info: PanInfo) => {
      if (!activeRef.current) {
        return;
      }

      const offset =
        info.offset.x >= 0 ? info.offset.x : info.offset.x * DRAG_RESISTANCE;

      x.set(offset);
      onBackMove(Math.max(offset, 0));
    };

    const handlePanEnd = (_event: PointerEvent, info: PanInfo) => {
      if (!activeRef.current) {
        return;
      }

      activeRef.current = false;

      if (onBackEnd(info) === 'back') {
        slideOut();

        return;
      }

      animate(x, 0, { ...SPRING, onComplete: onBackCancel });
    };

    return (
      <motion.div
        ref={setElement}
        key={step}
        custom={direction}
        className={cn(
          // Opaque like the panel, so while it slides out it covers the step
          // waiting underneath instead of printing over it.
          'relative flex w-full flex-col bg-white dark:bg-metal-800',
          canSwipeBack && 'touch-pan-y',
        )}
        style={{ x }}
        variants={animated ? STEP_VARIANTS : undefined}
        initial={animated ? 'enter' : false}
        animate="center"
        exit={animated ? 'exit' : undefined}
        transition={animated ? SPRING : INSTANT}
        onPanStart={canSwipeBack ? handlePanStart : undefined}
        onPan={canSwipeBack ? handlePan : undefined}
        onPanEnd={canSwipeBack ? handlePanEnd : undefined}
      >
        {children}
      </motion.div>
    );
  },
);

SheetStep.displayName = 'KonstructSheetStep';
