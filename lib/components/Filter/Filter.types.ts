import { VariantProps } from 'class-variance-authority';
import { filterVariants } from './Filter.variants';

export interface FilterProps extends VariantProps<typeof filterVariants> {
  className?: string;
}
