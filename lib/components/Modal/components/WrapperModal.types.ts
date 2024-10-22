import { PropsWithChildren } from 'react';
import { VariantProps } from 'class-variance-authority';

import { modalWrapperVariants } from './WrapperModal.variants';

export interface WrapperModalProps
  extends PropsWithChildren,
    VariantProps<typeof modalWrapperVariants> {
  className?: string;
}
