import { cva } from 'class-variance-authority';

export const navigationOptionVariants = cva([], {
  variants: {
    theme: {
      colony: '',
      kubefirst: '',
      civo: '',
    },
  },
  defaultVariants: {
    theme: 'kubefirst',
  },
});
