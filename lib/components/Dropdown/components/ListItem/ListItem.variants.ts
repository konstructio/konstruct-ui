import { cva } from 'class-variance-authority';

export const listItemVariants = cva([], {
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
