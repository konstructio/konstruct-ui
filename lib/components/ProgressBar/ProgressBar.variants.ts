import { cva } from 'class-variance-authority';

export const progressBarVariants = cva([], {
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

export const progressBarProgress = cva([], {
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
