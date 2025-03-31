import { VariantProps } from 'class-variance-authority';

import { switchVariants } from './Switch.variants';

export interface SwitchProps extends VariantProps<typeof switchVariants> {
  alignment?: 'horizontal' | 'vertical';
  className?: string;
  label?: string;
  name?: string;
  thumbClassName?: string;
  onChange?: (e: boolean) => void;
  value?: boolean;
  defaultChecked?: boolean;
}
