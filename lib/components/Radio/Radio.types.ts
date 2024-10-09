import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';
import { radioVariants } from './Radio.variants';

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>,
    VariantProps<typeof radioVariants> {
  label: string;
  value: string;
  name: string;
  color?: string;
  checked?: boolean;
  onChange?: (value: string) => void;
}
