import { FC } from '../../../node_modules/react';
import { SliderProps } from './Slider.types';
/**
 * A single-thumb slider component for selecting a value.
 * Built on Radix UI Slider for accessibility.
 *
 * @example
 * ```tsx
 * <Slider
 *   label="Brightness"
 *   min={0}
 *   max={100}
 *   defaultValue={[75]}
 *   showValue
 *   name="brightness"
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-slider--docs Storybook}
 */
export declare const Slider: FC<SliderProps>;
