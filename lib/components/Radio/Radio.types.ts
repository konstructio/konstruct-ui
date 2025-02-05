import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';

import { radioVariants } from './Radio.variants';

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'disabled'>,
    VariantProps<typeof radioVariants> {
  checked?: boolean;
  color?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  label?: string;
  labelTextClassName?: string;
  name: string;
  value: string;
  wrapperClassName?: string;
  onChange?: (value: string) => void;
}
