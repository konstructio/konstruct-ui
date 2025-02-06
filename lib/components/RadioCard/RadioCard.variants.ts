import { cva } from 'class-variance-authority';

export const radioCardVariants = cva(
  ['flex', 'items-center', 'p-0', 'border-2'],
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
