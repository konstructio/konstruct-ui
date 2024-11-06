import { VariantProps } from 'class-variance-authority';
import { SliderProps as SliderPropsBase } from '@radix-ui/react-slider';

import { sliderVariants } from './Slider.variants';

export interface SliderProps
  extends SliderPropsBase,
    VariantProps<typeof sliderVariants> {
  className?: string;
  label?: string;
}
