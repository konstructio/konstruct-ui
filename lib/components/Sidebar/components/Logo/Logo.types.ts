import { VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

import { logoVariants } from './Logo.variants';

export interface LogoProps
  extends PropsWithChildren,
    VariantProps<typeof logoVariants> {
  className?: string;
}
