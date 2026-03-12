import { VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

import { footerVariants } from './Footer.variants';

export interface Props
  extends PropsWithChildren, VariantProps<typeof footerVariants> {
  className?: string;
}

/** @deprecated Use Props instead */
export type FooterProps = Props;
