import { FC } from '../../../node_modules/react';
import { AlertDialogProps } from './AlertDialog.types';
/**
 * A confirmation dialog component built on Radix UI AlertDialog.
 * Includes a trigger button that opens a modal with title, description, and action buttons.
 *
 * @example
 * ```tsx
 * // Basic confirmation dialog
 * <AlertDialog
 *   buttonTriggerText="Delete Item"
 *   title="Confirm Deletion"
 *   description="This action cannot be undone."
 *   onConfirm={() => deleteItem()}
 * />
 *
 * // Danger variant with custom button text
 * <AlertDialog
 *   buttonTriggerText="Remove"
 *   buttonTriggerVariant="danger"
 *   title="Remove User"
 *   description="Are you sure you want to remove this user?"
 *   buttonConfirm={{ text: "Yes, Remove" }}
 *   buttonCancel={{ text: "No, Keep" }}
 *   onConfirm={() => removeUser()}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-alertdialog--docs Storybook}
 */
declare const AlertDialog: FC<AlertDialogProps>;
export { AlertDialog };
