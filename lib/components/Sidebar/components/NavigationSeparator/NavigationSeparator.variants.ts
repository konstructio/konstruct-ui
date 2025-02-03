import { cva } from 'class-variance-authority';

export const navigationSeparatorVariant = cva(['border-t', 'rounded-full'], {
  variants: {
    theme: {
      colony: '',
      kubefirst: 'border-t-[#9ea2c6]/30',
      civo: '',
    },
  },
  defaultVariants: {
    theme: 'kubefirst',
  },
});
