import { FC } from '../../../node_modules/react';
import { SwitchProps } from './Switch.types';
/**
 * A toggle switch component built on Radix UI primitives.
 * Supports horizontal and vertical layouts with label and helper text.
 *
 * @example
 * ```tsx
 * // Basic switch
 * <Switch label="Enable feature" />
 *
 * // Controlled switch
 * <Switch
 *   label="Dark mode"
 *   value={isDarkMode}
 *   onChange={(enabled) => setIsDarkMode(enabled)}
 * />
 *
 * // Vertical layout with helper text
 * <Switch
 *   label="Notifications"
 *   helperText="Receive email notifications"
 *   alignment="vertical"
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-switch--docs Storybook}
 */
export declare const Switch: FC<SwitchProps>;
