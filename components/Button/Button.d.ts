import { FC } from '../../../node_modules/react';
import { ButtonProps } from './Button.types';
/**
 * A customizable button component with multiple variants and styles.
 *
 * @example
 * ```tsx
 * // Primary button (default)
 * <Button>Click me</Button>
 *
 * // Secondary button
 * <Button variant="secondary">Secondary</Button>
 *
 * // Danger button
 * <Button variant="danger">Delete</Button>
 *
 * // Link style button
 * <Button variant="link">Learn more</Button>
 *
 * // Circle icon button
 * <Button shape="circle" size="large"><Icon /></Button>
 *
 * // Compact button
 * <Button appearance="compact">Compact</Button>
 *
 * // As child (renders child element with button styles)
 * <Button asChild><a href="/page">Link</a></Button>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-button--docs Storybook}
 */
declare const Button: FC<ButtonProps>;
export { Button };
