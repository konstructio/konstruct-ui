import { FC } from '../../../node_modules/react';
import { RadioGroupProps } from './RadioGroup.types';
/**
 * A group of radio buttons with shared state management.
 *
 * @example
 * ```tsx
 * // Vertical layout (default)
 * <RadioGroup
 *   name="subscription"
 *   options={[
 *     { value: 'monthly', label: 'Monthly', description: '$10/mo' },
 *     { value: 'yearly', label: 'Yearly', description: '$100/yr' },
 *   ]}
 *   defaultChecked="monthly"
 *   onValueChange={(value) => setSubscription(value)}
 * />
 *
 * // Horizontal layout
 * <RadioGroup
 *   name="size"
 *   direction="row"
 *   options={[
 *     { value: 'sm', label: 'Small' },
 *     { value: 'md', label: 'Medium' },
 *     { value: 'lg', label: 'Large' },
 *   ]}
 *   onValueChange={setSize}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-radiogroup--docs Storybook}
 */
export declare const RadioGroup: FC<RadioGroupProps>;
