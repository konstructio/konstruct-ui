import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes, ReactNode } from 'react';

import { Theme } from '@/domain/theme';

import { radioVariants } from './Radio.variants';

export interface RadioProps
  extends
    Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'disabled'>,
    VariantProps<typeof radioVariants> {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  label?: string | ReactNode;
  labelTextClassName?: string;
  name: string;
  description?: string | ReactNode;
  descriptionClassName?: string;
  value: string;
  wrapperClassName?: string;
  theme?: Theme;
  onChange?: (value: string) => void;
}
