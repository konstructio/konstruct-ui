import { cva } from 'class-variance-authority';

export const radioCardVariants = cva(['flex', 'items-center', 'p-0'], {
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
