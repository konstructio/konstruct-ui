import type { Easing } from 'motion/react';
import { ComponentPropsWithoutRef } from 'react';

/**
 * Props for the AnimatedNumber component.
 *
 * @example
 * ```tsx
 * <AnimatedNumber value={1234.5} locale="en-US" currency="USD" />
 * <AnimatedNumber value={42} from={0} />
 * <AnimatedNumber value={3} format={(value) => `${Math.round(value)} nodes`} />
 * ```
 */
export type Props = Omit<ComponentPropsWithoutRef<'span'>, 'children'> & {
  /** Animate each character in or out (width and opacity) when the formatted text gains or loses characters */
  animateCharacters?: boolean;
  /** Duration in seconds of the per-character enter and exit animation */
  characterDurationSeconds?: number;
  /** Additional CSS classes for the root element */
  className?: string;
  /** ISO 4217 currency code; enables currency formatting with the narrow symbol. An invalid code is shown as plain text before the number */
  currency?: string;
  /** Delay in seconds before each count starts */
  delaySeconds?: number;
  /** Jump straight to every new value without counting or animating characters */
  disabled?: boolean;
  /** Duration in seconds of the count from the current value to the new one */
  durationSeconds?: number;
  /** Motion easing of the count (e.g. `'easeOut'`, `'linear'` or a cubic-bezier array) */
  easing?: Easing;
  /** Extra `Intl.NumberFormat` options, merged over the currency options */
  formatOptions?: Intl.NumberFormatOptions;
  /** Value to count from on mount; defaults to `value`, so the first render does not count */
  from?: number;
  /** Accessible text announced instead of the formatted target value */
  label?: string;
  /** BCP 47 locale passed to `Intl.NumberFormat`; defaults to the runtime locale */
  locale?: string;
  /** Number to display; every change counts from the value currently shown to this one */
  value: number;
  /** Custom formatter for each intermediate value; takes precedence over `locale`, `currency` and `formatOptions` */
  format?: (value: number) => string;
  /** Fired with the target value once a count has finished */
  onCountEnd?: (target: number) => void;
  /** Fired with the target value when a count starts */
  onCountStart?: (target: number) => void;
};

export type AnimatedNumberProps = Props;
