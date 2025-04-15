import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes, ReactNode } from 'react';

import { Theme } from '@/domain/theme';

import { typographyVariants } from './Typography.variants';

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface TypographyProps
  extends InputHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  children: ReactNode;
  component?: HeadingTag | 'p' | 'span';
  theme?: Theme;
}
