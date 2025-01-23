import { PropsWithChildren } from 'react';
import { VariantProps } from 'class-variance-authority';
import { DialogProps } from '@radix-ui/react-dialog';

import { commandVariants } from './Command.variants';

export interface CommandProps
  extends VariantProps<typeof commandVariants>,
    PropsWithChildren,
    DialogProps {
  className?: string;
  emptyResults?: string;
  placeholder?: string;
}
