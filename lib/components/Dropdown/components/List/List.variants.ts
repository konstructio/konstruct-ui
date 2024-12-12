import { cva } from 'class-variance-authority';

export const listVariants = cva(
  [
    'absolute',
    'bg-white',
    'border',
    'duration-100',
    'ease-in-out',
    'flex-col',
    'mt-1',
    'overflow-hidden',
    'rounded-md',
    'shadow-sm',
    'top-full',
    'transition-all',
    'w-full',
    'z-10',
  ],
  {
    variants: {
      theme: {
        colony: ['border-red-400'],
        konstruct: ['border-orange-400'],
        kubefirst: ['border-kubefirst-primary'],
        civo: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);
