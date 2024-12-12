import { cva } from 'class-variance-authority';

export const modalVariants = cva(
  [
    'bg-metal-1000',
    'bg-white',
    'border-none',
    'flex',
    'flex-col',
    'justify-between',
    'min-h-[450px]',
    'min-w-[500px]',
    'overflow-auto',
    'relative',
    'rounded-md',
    'shadow-xs',
    'lg:overflow-hidden',
  ],
  {
    variants: {
      theme: {
        colony: ['shadow-red-400'],
        konstruct: ['shadow-orange-400'],
        kubefirst: ['shadow-kubefirst-primary'],
        civo: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);

export const buttonCloseVariants = cva(
  ['absolute', 'right-1.5', 'top-1.5', 'text-inherit'],
  {
    variants: {
      theme: {
        kubefirst: ['text-kubefirst-primary'],
        konstruct: ['text-orange-400'],
        colony: ['text-red-400'],
        civo: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);
