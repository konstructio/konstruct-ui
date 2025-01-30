import { VariantProps } from 'class-variance-authority';

import { footerVariants } from './Footer.variants';
import { PropsWithChildren } from 'react';

export type FooterProps = PropsWithChildren &
  VariantProps<typeof footerVariants>;
