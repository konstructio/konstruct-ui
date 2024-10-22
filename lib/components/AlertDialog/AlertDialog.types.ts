import { PropsWithChildren } from 'react';
import { VariantProps } from 'class-variance-authority';

import { buttonAlertDialogVariants } from './AlertDialog.variants';

export interface AlertDialogProps
  extends PropsWithChildren,
    VariantProps<typeof buttonAlertDialogVariants> {
  className?: string;
  buttonText?: string;
  title?: string;
  description?: string;
  onConfirm?: () => void;
}

export type UseAlertiDialogProps = {
  onConfirm: AlertDialogProps['onConfirm'];
};
