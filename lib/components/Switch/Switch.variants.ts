import { cva } from 'class-variance-authority';

export const switchVariants = cva([], {
  variants: {
    theme: {
      konstruct: '',
      kubefirst: '',
      colony: '',
    },
  },
  defaultVariants: {
    theme: 'kubefirst',
  },
});
