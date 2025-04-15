import { PropsWithChildren } from 'react';

import { Theme } from '@/domain/theme';

export interface AlertDialogProps extends PropsWithChildren {
  buttonCancelClassName?: string;
  buttonCancelText?: string;
  buttonConfirmClassName?: string;
  buttonConfirmText?: string;
  buttonText?: string;
  buttonTriggerClassName?: string;
  className?: string;
  description?: string;
  theme?: Theme;
  title?: string;
  onConfirm?: () => void;
}

export type UseAlertiDialogProps = {
  onConfirm: AlertDialogProps['onConfirm'];
};
