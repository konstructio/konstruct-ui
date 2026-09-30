import { useEffect, useRef } from 'react';

import { UseToastTimerOptions } from './useToastTimer.types';

export const useToastTimer = ({
  duration,
  paused,
  restart,
  resumeDelay,
  onExpire,
}: UseToastTimerOptions): void => {
  const remainingRef = useRef(duration);
  const wasPausedRef = useRef(false);
  const onExpireRef = useRef(onExpire);
  const resumeDelayRef = useRef(resumeDelay);

  useEffect(() => {
    onExpireRef.current = onExpire;
    resumeDelayRef.current = resumeDelay;
  }, [onExpire, resumeDelay]);

  useEffect(() => {
    if (paused) {
      wasPausedRef.current = true;

      return;
    }

    if (duration <= 0) {
      return;
    }

    const resumed = wasPausedRef.current;
    const wait = restart
      ? duration + (resumed ? resumeDelayRef.current : 0)
      : remainingRef.current;
    const startedAt = Date.now();
    const timeout = setTimeout(() => {
      onExpireRef.current();
    }, wait);

    return () => {
      clearTimeout(timeout);
      remainingRef.current = Math.max(
        0,
        remainingRef.current - (Date.now() - startedAt),
      );
    };
  }, [paused, duration, restart]);
};
