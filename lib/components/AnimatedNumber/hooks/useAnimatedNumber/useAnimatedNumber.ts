import {
  animate,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
} from 'motion/react';
import { useEffect, useRef, useState } from 'react';

import { UseAnimatedNumberOptions } from './useAnimatedNumber.types';

export const useAnimatedNumber = (
  target: number,
  {
    delaySeconds,
    disabled,
    durationSeconds,
    easing,
    from,
    onCountEnd,
    onCountStart,
  }: UseAnimatedNumberOptions,
): number => {
  const [displayed, setDisplayed] = useState(from ?? target);
  const motionValue = useMotionValue(from ?? target);
  const shouldReduceMotion = useReducedMotion();
  const onCountStartRef = useRef(onCountStart);
  const onCountEndRef = useRef(onCountEnd);
  const isStatic = disabled || Boolean(shouldReduceMotion);

  useMotionValueEvent(motionValue, 'change', setDisplayed);

  useEffect(() => {
    onCountStartRef.current = onCountStart;
    onCountEndRef.current = onCountEnd;
  }, [onCountStart, onCountEnd]);

  useEffect(() => {
    if (isStatic) {
      motionValue.set(target);

      return;
    }

    if (motionValue.get() === target) {
      return;
    }

    const controls = animate(motionValue, target, {
      duration: durationSeconds,
      delay: delaySeconds,
      ease: easing,
      onPlay: () => {
        onCountStartRef.current?.(target);
      },
      onComplete: () => {
        onCountEndRef.current?.(target);
      },
    });

    return () => {
      controls.stop();
    };
  }, [target, durationSeconds, delaySeconds, easing, isStatic, motionValue]);

  return displayed;
};
