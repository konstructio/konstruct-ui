import { VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, Ref } from 'react';

import { Theme } from '@/domain/theme';

import { buttonVariants } from './Button.variants';

export interface ButtonProps
  extends
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof buttonVariants> {
  ref?: Ref<HTMLButtonElement>;
  asChild?: boolean;
  disabled?: boolean;
  theme?: Theme;
}
