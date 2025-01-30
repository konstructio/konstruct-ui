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
    'outline-hidden',
  ],
  {
    variants: {
      theme: {
        kubefirst: [
          'aria-expanded:border-kubefirst-primary',
          'aria-expanded:text-kubefirst-secondary',
          'focus-visible:bg-purple-100',
        ],
        colony: [
          'aria-expanded:border-red-400',
          'aria-expanded:text-red-400',
          'focus-visible:bg-red-100',
        ],
        civo: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);
