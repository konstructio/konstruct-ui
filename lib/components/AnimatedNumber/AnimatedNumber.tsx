'use client';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { Props } from './AnimatedNumber.types';
import { AnimatedText } from './components';
import {
  DEFAULT_CHARACTER_DURATION_S,
  DEFAULT_DELAY_S,
  DEFAULT_DURATION_S,
  DEFAULT_EASING,
} from './constants';
import { useAnimatedNumber, useNumberFormatter } from './hooks';

/**
 * Counts up or down to each new `value`, formatted with `Intl.NumberFormat`
 * or a custom `format` function. Characters that appear or disappear (a new
 * digit, a thousands separator) slide in and out while the currency symbol
 * and the existing digits stay put. Screen readers get the target value only;
 * the counting text is hidden from them. Respects `prefers-reduced-motion`.
 * At rest it renders inline and inherits the surrounding typography.
 *
 * @example
 * ```tsx
 * // Currency, counting to every new total
 * <AnimatedNumber value={total} locale="en-US" currency="USD" />
 *
 * // Symbol after the number, as the locale places it
 * <AnimatedNumber value={9.5} locale="de-DE" currency="EUR" />
 *
 * // Plain integer counted from zero on mount
 * <AnimatedNumber
 *   value={128}
 *   from={0}
 *   formatOptions={{ maximumFractionDigits: 0 }}
 * />
 *
 * // Custom format and callbacks
 * <AnimatedNumber
 *   value={nodes}
 *   format={(value) => `${Math.round(value)} nodes`}
 *   onCountEnd={(target) => console.log('reached', target)}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/in-review-animatednumber--docs Storybook}
 */
const AnimatedNumber = forwardRef<HTMLSpanElement, Props>(
  (
    {
      animateCharacters = true,
      characterDurationSeconds = DEFAULT_CHARACTER_DURATION_S,
      className,
      currency,
      delaySeconds = DEFAULT_DELAY_S,
      disabled = false,
      durationSeconds = DEFAULT_DURATION_S,
      easing = DEFAULT_EASING,
      formatOptions,
      from,
      label,
      locale,
      value,
      format,
      onCountEnd,
      onCountStart,
      ...delegated
    },
    ref,
  ) => {
    const formatValue = useNumberFormatter({
      currency,
      format,
      formatOptions,
      locale,
    });
    const displayed = useAnimatedNumber(value, {
      delaySeconds,
      disabled,
      durationSeconds,
      easing,
      from,
      onCountEnd,
      onCountStart,
    });

    return (
      <span ref={ref} className={cn('inline-flex', className)} {...delegated}>
        <AnimatedText
          text={formatValue(displayed)}
          label={label ?? formatValue(value)}
          disabled={disabled || !animateCharacters}
          durationSeconds={characterDurationSeconds}
        />
      </span>
    );
  },
);

AnimatedNumber.displayName = 'KonstructAnimatedNumber';

export { AnimatedNumber };
