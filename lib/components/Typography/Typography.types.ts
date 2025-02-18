import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';
import { typographyVariants } from './Typography.variants';

export interface TypographyProps
  extends InputHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  children: React.ReactNode;
}
