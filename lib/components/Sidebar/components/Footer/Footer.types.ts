import { VariantProps } from 'class-variance-authority';

import { footerVariants } from './Footer.variants';
import { PropsWithChildren } from 'react';

export interface FooterProps
  extends PropsWithChildren,
    VariantProps<typeof footerVariants> {
  className?: string;
}
