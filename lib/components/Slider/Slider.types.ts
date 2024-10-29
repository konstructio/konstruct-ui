import { VariantProps } from 'class-variance-authority';

import { sliderVariants } from './Slider.variants';

export interface SliderProps extends VariantProps<typeof sliderVariants> {
  className?: string;
}
