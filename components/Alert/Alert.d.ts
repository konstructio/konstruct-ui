import { FC } from '../../../node_modules/react';
import { AlertProps } from './Alert.types';
/**
 * An alert component for displaying feedback messages.
 * Supports success, error, warning, and info variants with optional dismiss button.
 *
 * @example
 * ```tsx
 * // Success alert
 * <Alert type="success" content="Changes saved successfully!" />
 *
 * // Error alert with close button
 * <Alert
 *   type="error"
 *   content="Failed to save changes. Please try again."
 *   showCloseButton
 * />
 *
 * // Warning alert with custom content
 * <Alert
 *   type="warning"
 *   content={
 *     <div>
 *       <strong>Warning:</strong> This action cannot be undone.
 *     </div>
 *   }
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-alert--docs Storybook}
 */
export declare const Alert: FC<AlertProps>;
