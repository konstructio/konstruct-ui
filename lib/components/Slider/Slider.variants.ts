import { cva } from 'class-variance-authority';

export const sliderVariants = cva([], {
  variants: {
    theme: {
      kubefirst: '',
      colony: '',
      konstruct: '',
    },
  },
  defaultVariants: {
    theme: 'kubefirst',
  },
});
