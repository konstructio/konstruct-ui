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
 * <AnimateCurrencyNumber value={total} locale="en-US" currency="USD" />
 *
 * // Symbol after the number, as the locale places it
 * <AnimateCurrencyNumber value={9.5} locale="de-DE" currency="EUR" />
 *
 * // Plain integer counted from zero on mount
 * <AnimateCurrencyNumber
 *   value={128}
 *   from={0}
 *   formatOptions={{ maximumFractionDigits: 0 }}
 * />
 *
 * // Custom format and callbacks
 * <AnimateCurrencyNumber
 *   value={nodes}
 *   format={(value) => `${Math.round(value)} nodes`}
 *   onCountEnd={(target) => console.log('reached', target)}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/in-review-animatecurrencynumber--docs Storybook}
 */
declare const AnimateCurrencyNumber: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<Omit<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref">, "children"> & {
    animateCharacters?: boolean;
    characterDurationSeconds?: number;
    className?: string;
    currency?: string;
    delaySeconds?: number;
    disabled?: boolean;
    durationSeconds?: number;
    easing?: import('motion-utils').Easing;
    formatOptions?: Intl.NumberFormatOptions;
    from?: number;
    label?: string;
    locale?: string;
    value: number;
    format?: (value: number) => string;
    onCountEnd?: (target: number) => void;
    onCountStart?: (target: number) => void;
} & import('../../../node_modules/react').RefAttributes<HTMLSpanElement>>;
export { AnimateCurrencyNumber };
