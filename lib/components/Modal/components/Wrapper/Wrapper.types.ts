import { VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

import { Theme } from '@/domain/theme';

import { modalVariants } from './Wrapper.variants';

export interface WrapperProps
  extends PropsWithChildren,
    VariantProps<typeof modalVariants> {
  buttonCloseClassName?: string;
  className?: string;
  theme?: Theme;
  onClose?: () => void;
}
