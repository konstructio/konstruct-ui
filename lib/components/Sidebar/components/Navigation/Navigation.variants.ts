import { cva } from 'class-variance-authority';

export const navigationVariants = cva(['flex', 'flex-1', 'w-full'], {
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
