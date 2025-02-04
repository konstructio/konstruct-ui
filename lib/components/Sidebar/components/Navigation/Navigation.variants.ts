import { cva } from 'class-variance-authority';

export const navigationVariants = cva(
  ['flex', 'flex-1', 'w-full', 'flex-col'],
  {
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
  },
);
