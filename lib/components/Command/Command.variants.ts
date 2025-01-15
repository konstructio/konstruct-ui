import { cva } from 'class-variance-authority';

export const commandVariants = cva([], {
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
