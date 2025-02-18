import { cva } from 'class-variance-authority';

export const loadingVariants = cva(['h-', 'w-8', 'animate-spin'], {
  variants: {
    variant: {
      default: '',
    },
    theme: {
      kubefirst: 'text-kubefirst-primary',
      colony: 'text-colony-primary',
      civo: 'text-civo-primary',
    },
  },
  defaultVariants: {
    variant: 'default',
    theme: 'kubefirst',
  },
});
