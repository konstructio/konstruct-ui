import { cva } from 'class-variance-authority';

export const breadcrumbVariants = cva(['flex', 'gap-4'], {
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

export const breadcrumbItemVariants = cva([], {
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
