import { VariantProps } from 'class-variance-authority';

import { Theme } from '@/domain/theme';

import { switchVariants } from './Switch.variants';

export interface SwitchProps extends VariantProps<typeof switchVariants> {
  alignment?: 'horizontal' | 'vertical';
  className?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  helperText?: string;
  helperTextClassName?: string;
  label?: string;
  labelClassName?: string;
  name?: string;
  theme?: Theme;
  thumbClassName?: string;
  value?: boolean;
  onChange?: (e: boolean) => void;
}
