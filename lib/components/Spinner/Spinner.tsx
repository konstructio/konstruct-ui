'use client';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { FC } from 'react';

import { Typography } from '@/components/Typography/Typography';
import { cn } from '@/utils';

import spinnerSvgUrl from './assets/spinner.svg?url';
import { Props } from './Spinner.types';
import { spinnerIconVariants, spinnerVariants } from './Spinner.variants';

let epoch: number | null = null;

const toMilliseconds = (value: Animation['startTime'] | undefined) => {
  return typeof value === 'number' ? value : null;
};

// Every spinner in the document shares one animation start time, so a spinner
// that replaces another (a route fallback handing over to a lazy chunk's
// fallback) is at the same angle and its entrance fade is already over: the
// swap is pixel-identical instead of restarting from 0°. The first spinner
// mounted defines the origin; the rest adopt it.
const lockAnimationPhase = (node: HTMLDivElement | null) => {
  if (!node || typeof node.getAnimations !== 'function') {
    return;
  }

  for (const animation of node.getAnimations({ subtree: true })) {
    if (epoch === null) {
      epoch =
        toMilliseconds(animation.startTime) ??
        toMilliseconds(document.timeline?.currentTime) ??
        0;
    }

    animation.startTime = epoch;
  }
};

const Spinner: FC<Props> = ({
  className,
  spinnerClassName,
  textClassName,
  textVariant = 'subtitle2',
  text,
  srLabel = 'Loading',
  theme,
  size,
  ...delegated
}) => (
  <div
    ref={lockAnimationPhase}
    role="status"
    aria-label="Loading"
    data-theme={theme}
    className={cn(spinnerVariants({ size, className }))}
    {...delegated}
  >
    <span
      aria-hidden="true"
      className={cn(spinnerIconVariants({ size }), spinnerClassName)}
      style={{
        maskImage: `url("${spinnerSvgUrl}")`,
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskImage: `url("${spinnerSvgUrl}")`,
        WebkitMaskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
      }}
    />

    {text && (
      <Typography
        variant={textVariant}
        className={cn('text-slate-700 dark:text-slate-200', textClassName)}
      >
        {text}
      </Typography>
    )}

    <VisuallyHidden>{srLabel}</VisuallyHidden>
  </div>
);

Spinner.displayName = 'KonstructSpinner';

export { Spinner };
