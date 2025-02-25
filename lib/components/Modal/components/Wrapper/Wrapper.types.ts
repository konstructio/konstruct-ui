import { PropsWithChildren } from 'react';
import { VariantProps } from 'class-variance-authority';

import { modalVariants } from './Wrapper.variants';

export interface WrapperProps
  extends PropsWithChildren,
    VariantProps<typeof modalVariants> {
  className?: string;
  buttonCloseClassName?: string;
  onClose?: () => void;
}
