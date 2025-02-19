import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes, ReactNode } from 'react';

import { typographyVariants } from './Typography.variants';

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface TypographyProps
  extends InputHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  children: ReactNode;
  component?: HeadingTag | 'p' | 'span';
}
