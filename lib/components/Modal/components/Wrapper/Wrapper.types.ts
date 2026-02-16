import { VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

import { Theme } from '@/domain/theme';

import { modalVariants } from './Wrapper.variants';

export type Props = PropsWithChildren &
  VariantProps<typeof modalVariants> & {
    buttonCloseClassName?: string;
    className?: string;
    showCloseButton?: boolean;
    theme?: Theme;
    onClose?: () => void;
  };
