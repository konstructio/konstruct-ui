import { DialogProps } from '@radix-ui/react-dialog';
import { VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

import { commandVariants } from './Command.variants';

export interface CommandProps
  extends VariantProps<typeof commandVariants>,
    PropsWithChildren,
    DialogProps {
  emptyResults?: string;
  placeholder?: string;
  title?: string;
  titleClassName?: string;
  wrapperClassName?: string;
}
