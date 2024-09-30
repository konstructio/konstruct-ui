import { VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

import { buttonVariants } from './Button.variants';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  disabled?: boolean;
}
