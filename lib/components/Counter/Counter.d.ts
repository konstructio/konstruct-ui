import { FC } from '../../../node_modules/react';
import { Props } from './Counter.types';
/**
 * A numeric input component with increment/decrement buttons.
 * Also exported as `NumberInput` for convenience.
 *
 * @example
 * ```tsx
 * // Basic counter
 * <Counter
 *   label="Quantity"
 *   value={count}
 *   onChange={({ target }) => setCount(target.value)}
 * />
 *
 * // With min/max limits
 * <Counter
 *   label="Number of nodes"
 *   value={nodes}
 *   min={1}
 *   max={10}
 *   onChange={({ target }) => setNodes(target.value)}
 * />
 *
 * // Stepping by 500 GB with a unit, price and helper text
 * <Counter
 *   label="Size"
 *   value={size}
 *   step={500}
 *   unit="GB"
 *   labelAction={<span>$12.00/mo</span>}
 *   helperText="Increments of 500 GB"
 *   onChange={handleChange}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-counter--docs Storybook}
 */
export declare const Counter: FC<Props>;
