import { FC } from '../../../node_modules/react';
import { CheckboxProps } from './Checkbox.types';
/**
 * A checkbox component built on Radix UI primitives.
 * Supports controlled and uncontrolled modes with label support.
 *
 * @example
 * ```tsx
 * // Basic checkbox with label
 * <Checkbox label="Accept terms and conditions" />
 *
 * // Controlled checkbox
 * <Checkbox
 *   label="Subscribe to newsletter"
 *   defaultChecked={subscribed}
 *   onChange={(checked) => setSubscribed(checked)}
 * />
 *
 * // Disabled checkbox
 * <Checkbox label="Premium feature" disabled />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-checkbox--docs Storybook}
 */
declare const Checkbox: FC<CheckboxProps>;
export { Checkbox };
