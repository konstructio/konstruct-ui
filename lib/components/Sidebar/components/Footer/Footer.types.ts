import { VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

import { footerVariants } from './Footer.variants';

export type Props = PropsWithChildren &
  VariantProps<typeof footerVariants> & {
    className?: string;
  };

/** @deprecated Use Props instead */
export type FooterProps = Props;
