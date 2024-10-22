import { VariantProps } from 'class-variance-authority';

import { buttonAlertDialogVariants } from '../AlertDialog.variants';

export interface AlertDialogTriggerProps
  extends VariantProps<typeof buttonAlertDialogVariants> {
  text?: string;
  onOpen(): void;
}
