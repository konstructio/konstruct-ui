import { cva } from 'class-variance-authority';

export const buttonAlertDialogVariants = cva([], {
  variants: {
    theme: {
      colony: '',
      kubefirst: '',
      konstruct: '',
    },
  },
  defaultVariants: {
    theme: 'kubefirst',
  },
});
