import { PropsWithChildren, ReactNode } from 'react';
import { AlertDialogProps as AlertDialogPrimitiveProps } from '@radix-ui/react-alert-dialog';

import { Theme } from '@/domain/theme';

import { ButtonProps } from '../Button/Button.types';

type ButtonBaseProps = Partial<ButtonProps> & {
  className?: string;
  text?: string;
};

type ButtonCancelProps = ButtonBaseProps;
type ButtonConfirmProps = ButtonBaseProps;

/**
 * Props for the AlertDialog component.
 *
 * @example
 * ```tsx
 * <AlertDialog
 *   buttonTriggerText="Delete"
 *   buttonTriggerVariant="danger"
 *   title="Confirm Deletion"
 *   description="Are you sure you want to delete this item?"
 *   onConfirm={() => handleDelete()}
 * />
 * ```
 */
export interface AlertDialogProps
  extends PropsWithChildren, AlertDialogPrimitiveProps {
  /** Cancel button props (className, text, etc.) */
  buttonCancel?: ButtonCancelProps;
  /** Confirm button props (className, text, etc.) */
  buttonConfirm?: ButtonConfirmProps;
  /** Text for the trigger button */
  buttonTriggerText?: string;
  /** CSS classes for the trigger button */
  buttonTriggerClassName?: string;
  /** Variant for the trigger button */
  buttonTriggerVariant?: ButtonProps['variant'];
  /** Additional CSS classes */
  className?: string;
  /** Description text shown in the dialog */
  description?: string | ReactNode;
  isDescriptionChild?: boolean;
  /** Whether to show the cancel button (default: true) */
  showCancelButton?: boolean;
  /** Theme override for this component */
  theme?: Theme;
  /** Title text shown in the dialog */
  title?: string | ReactNode;
  isTitleChild?: boolean;
  /** CSS classes for the dialog wrapper */
  wrapperClassName?: string;
  /** Callback when confirm button is clicked */
  onConfirm?: VoidFunction;
  /** Callback when the button is clicked */
  onClick?: VoidFunction;
}

export type UseAlertiDialogProps = {
  onConfirm: AlertDialogProps['onConfirm'];
};
