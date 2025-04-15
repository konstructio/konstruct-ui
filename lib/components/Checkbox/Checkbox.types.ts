import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';

import { Theme } from '@/domain/theme';
import { checkboxVariants } from './Checkbox.variants';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'checked'>,
    VariantProps<typeof checkboxVariants> {
  ariaLabelledBy?: string;
  className?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  id?: string;
  label?: string;
  labelClassName?: string;
  name?: string;
  theme?: Theme;
  onChange?: () => void;
}
