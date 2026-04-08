import { FC } from '../../../../node_modules/react';
import { Props } from './Alert.types';
/**
 * An alert component for displaying feedback messages.
 * Supports success, info, warning, and danger variants with icon, title, and optional description.
 *
 * @example
 * ```tsx
 * <Alert type="success" title="Changes saved successfully!" />
 *
 * <Alert
 *   type="danger"
 *   title="Error"
 *   description="Failed to save changes. Please try again."
 *   showCloseButton
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-alert--docs Storybook}
 */
export declare const Alert: FC<Props>;
