import { cva } from 'class-variance-authority';

export const dropdownVariants = cva(
  [
    'border',
    'cursor-pointer',
    'ease-in-out',
    'flex',
    'items-center',
    'justify-between',
    'px-3',
    'py-1',
    'relative',
    'rounded-md',
    'transition-all',
    'w-full',
  ],
  {
    variants: {
      theme: {
        konstruct: [
          'aria-expanded:border-orange-400',
          'aria-expanded:text-orange-400',
        ],
        kubefirst: [
          'aria-expanded:border-kubefirst-purple-light',
          'aria-expanded:text-kubefirst-purple-dark',
        ],
        colony: ['aria-expanded:border-red-400', 'aria-expanded:text-red-400'],
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);
