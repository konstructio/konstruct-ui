import { VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

import { footerVariants } from './Footer.variants';

export interface FooterProps
  extends PropsWithChildren,
    VariantProps<typeof footerVariants> {
  className?: string;
}
