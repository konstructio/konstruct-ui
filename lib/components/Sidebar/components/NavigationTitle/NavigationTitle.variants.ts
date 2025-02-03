import { cva } from 'class-variance-authority';

export const navigationTitleVariants = cva(
  ['text-sm', 'font-bold', 'px-4', 'mt-3', 'mb-2'],
  {
    variants: {
      theme: {
        colony: '',
        kubefirst: ['text-white'],
        civo: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);
