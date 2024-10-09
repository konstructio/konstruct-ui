import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';
import { radioVariants } from './Radio.variants';

export interface RadioProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof radioVariants> {
  label: string;
  value: string;
  name: string;
  color?: string;
  checked?: boolean;
}
