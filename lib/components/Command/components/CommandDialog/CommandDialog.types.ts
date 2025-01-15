import { DialogProps } from '@radix-ui/react-dialog';
import { VariantProps } from 'class-variance-authority';

import { commandDialogVariants } from './CommandDialog.variants';

export interface CommandDialogProps
  extends VariantProps<typeof commandDialogVariants>,
    DialogProps {
  className?: string;
  placeholder?: string;
  emptyResults?: string;
}
