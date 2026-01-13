import { VariantProps } from 'class-variance-authority';
import { ComponentRef, HTMLAttributes, ReactNode, Ref } from 'react';

import { Theme } from '@/domain/theme';

import { typographyVariants } from './Typography.variants';

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface TypographyProps
  extends
    HTMLAttributes<ComponentRef<HeadingTag | 'p' | 'span'>>,
    VariantProps<typeof typographyVariants> {
  ref?: Ref<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement>;
  children: ReactNode;
  component?: HeadingTag | 'p' | 'span' | 'label';
  theme?: Theme;
  htmlFor?: string;
}
