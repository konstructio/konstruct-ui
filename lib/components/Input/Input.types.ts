import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';

import { inputVariants } from './Input.variants';

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  labelClassName?: string;
  error?: string;
  onClickIcon?: () => void;
}
