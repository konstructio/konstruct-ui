import { cva } from 'class-variance-authority';

export const tagSelectVariants = cva(
  [
    'border',
    'cursor-pointer',
    'duration-250',
    'ease-in-out',
    'flex',
    'items-center',
    'justify-between',
    'px-3',
    'py-1',
    'rounded-md',
    'transition-all',
    'w-full',
  ],
  {
    variants: {
      theme: {
        colony: ['aria-expanded:border-red-400', 'aria-expanded:text-red-400'],
        konstruct: [
          'aria-expanded:border-orange-400',
          'aria-expanded:text-orange-400',
        ],
        kubefirst: [
          'aria-expanded:border-kubefirst-primary',
          'aria-expanded:text-kubefirst-secondary',
        ],
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);

export const tagListVariants = cva(
  [
    'absolute',
    'bg-white',
    'border',
    'duration-100',
    'ease-in-out',
    'flex',
    'flex-col',
    'mt-1',
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
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);

export const tagItemVariants = cva(
  ['cursor-pointer', 'py-1', 'px-2', 'last:mb-2', 'first:mt-2', 'h-full'],
  {
    variants: {
      theme: {
        colony: 'hover:bg-red-100',
        konstruct: 'hover:bg-orange-100',
        kubefirst: 'hover:bg-purple-100',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);
