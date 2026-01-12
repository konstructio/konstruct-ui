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

export interface AlertDialogProps
  extends PropsWithChildren, AlertDialogPrimitiveProps {
  buttonCancel?: ButtonCancelProps;
  buttonConfirm?: ButtonConfirmProps;
  buttonTriggerText?: string;
  buttonTriggerClassName?: string;
  buttonTriggerVariant?: ButtonProps['variant'];
  className?: string;
  description?: string | ReactNode;
  showCancelButton?: boolean;
  theme?: Theme;
  title?: string | ReactNode;
  wrapperClassName?: string;
  onConfirm?: () => void;
}

export type UseAlertiDialogProps = {
  onConfirm: AlertDialogProps['onConfirm'];
};
