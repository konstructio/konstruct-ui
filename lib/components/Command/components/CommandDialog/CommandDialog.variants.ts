import { cva } from 'class-variance-authority';

export const commandDialogVariants = cva(['w-full'], {
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
