import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes, ReactNode } from 'react';

import { Theme } from '@/domain/theme';

import { inputVariants } from './Input.variants';

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  error?: string;
  label?: string | ReactNode;
  labelClassName?: string;
  theme?: Theme;
  isRequired?: boolean;
  isSearch?: boolean;
  helperText?: string;
  helperTextClassName?: string;
}
