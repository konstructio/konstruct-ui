import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes, ReactNode } from 'react';

import { Theme } from '@/domain/theme';

import { inputVariants } from './Input.variants';

export interface InputProps
  extends
    InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  error?: string;
  helperText?: string;
  helperTextClassName?: string;
  isRequired?: boolean;
  isSearch?: boolean;
  label?: string | ReactNode;
  labelClassName?: string;
  theme?: Theme;
}
