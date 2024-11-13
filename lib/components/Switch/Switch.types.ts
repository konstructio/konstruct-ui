import { VariantProps } from 'class-variance-authority';

import { switchVariants } from './Switch.variants';

export interface SwitchProps extends VariantProps<typeof switchVariants> {
  alignment?: 'horizontal' | 'vertical';
  className?: string;
  defaultChecked?: boolean;
  label?: string;
  name?: string;
  thumbClassName?: string;
}
