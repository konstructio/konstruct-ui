import { cva } from 'class-variance-authority';

export const footerVariants = cva(
  ['p-2', 'pb-5', 'text-white', 'flex', 'flex-col', 'gap-2'],
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
