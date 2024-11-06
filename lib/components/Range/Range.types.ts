import { VariantProps } from 'class-variance-authority';
import { SliderProps as SliderPropsBase } from '@radix-ui/react-slider';

import { rangeVariants } from './Range.variants';

export interface RangeProps extends VariantProps<typeof rangeVariants> {
  className?: string;
  defaultValue?: SliderPropsBase['defaultValue'];
  label?: string;
  max?: SliderPropsBase['max'];
  min?: SliderPropsBase['min'];
  name?: string;
  showValue?: boolean;
  size?: 'sm' | 'md' | 'lg';
}
