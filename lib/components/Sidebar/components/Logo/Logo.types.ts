import { VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

import { logoVariants } from './Logo.variants';

export interface Props
  extends PropsWithChildren, VariantProps<typeof logoVariants> {
  className?: string;
}

/** @deprecated Use Props instead */
export type LogoProps = Props;
