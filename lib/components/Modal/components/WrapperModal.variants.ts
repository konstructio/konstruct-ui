import { cva } from 'class-variance-authority';

export const modalWrapperVariants = cva(
  [
    'relative',
    'overflow-auto',
    'border-none',
    'bg-metal-1000',
    'lg:overflow-hidden',
    'min-w-[500px]',
    'min-h-[450px]',
    'bg-white',
    'p-4',
    'rounded-md',
    'shadow-xs',
  ],
  {
    variants: {
      theme: {
        colony: ['shadow-red-400'],
        konstruct: ['shadow-orange-400'],
        kubefirst: ['shadow-kubefirst-purple-light'],
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);

export const buttonCloseModalVariants = cva(
  ['absolute', 'right-1.5', 'top-1.5', 'text-inherit'],
  {
    variants: {
      theme: {
        kubefirst: ['text-kubefirst-purple-light'],
        konstruct: ['text-orange-400'],
        colony: ['text-red-400'],
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);
