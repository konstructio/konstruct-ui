import { VariantProps } from 'class-variance-authority';
import { SliderProps as SliderPropsBase } from '@radix-ui/react-slider';

import { sliderVariants } from './Slider.variants';

export interface SliderProps extends VariantProps<typeof sliderVariants> {
  className?: string;
  defaultValue?: SliderPropsBase['defaultValue'];
  label?: string;
  name?: string;
  showValue?: boolean;
  size?: 'sm' | 'md' | 'lg';
}
