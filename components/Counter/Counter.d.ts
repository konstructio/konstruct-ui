import { FC } from '../../../node_modules/react';
import { CounterProps } from './Counter.types';
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
 * // Disabled increment/decrement
 * <Counter
 *   value={5}
 *   canIncrement={value < max}
 *   canDecrement={value > min}
 *   onChange={handleChange}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-counter--docs Storybook}
 */
export declare const Counter: FC<CounterProps>;
