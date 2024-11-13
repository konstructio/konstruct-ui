import { VariantProps } from 'class-variance-authority';

import { switchVariants } from './Switch.variants';

export interface SwitchProps extends VariantProps<typeof switchVariants> {
  className?: string;
  name?: string;
}
