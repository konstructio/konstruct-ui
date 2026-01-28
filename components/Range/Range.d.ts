import { FC } from '../../../node_modules/react';
import { RangeProps } from './Range.types';
/**
 * A dual-thumb slider component for selecting a value range.
 * Built on Radix UI Slider for accessibility.
 *
 * @example
 * ```tsx
 * <Range
 *   label="Budget"
 *   min={0}
 *   max={10000}
 *   defaultValue={[2000, 8000]}
 *   showValue
 *   name="budget"
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-range--docs Storybook}
 */
export declare const Range: FC<RangeProps>;
