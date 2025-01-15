import { PropsWithChildren } from 'react';
import { VariantProps } from 'class-variance-authority';

import { commandVariants } from './Command.variants';

export interface CommandProps
  extends VariantProps<typeof commandVariants>,
    PropsWithChildren {
  className?: string;
  emptyResults?: string;
  placeholder?: string;
}
