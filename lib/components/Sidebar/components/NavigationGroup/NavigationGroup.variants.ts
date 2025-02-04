import { cva } from 'class-variance-authority';

export const navigationGroupsVariants = cva(['flex', 'flex-col'], {
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
