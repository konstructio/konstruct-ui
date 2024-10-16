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
        colony: '',
        konstruct: '',
        kubefirst: '',
      },
    },
    compoundVariants: [
      {
        theme: 'kubefirst',
        class: [
          'aria-expanded:border-kubefirst-purple-light',
          'aria-expanded:text-kubefirst-purple-dark',
        ],
      },
      {
        theme: 'konstruct',
        class: [
          'aria-expanded:border-orange-400',
          'aria-expanded:text-orange-400',
        ],
      },
      {
        theme: 'colony',
        class: ['aria-expanded:border-red-400', 'aria-expanded:text-red-400'],
      },
    ],
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
        colony: '',
        konstruct: '',
        kubefirst: '',
      },
    },
    compoundVariants: [
      {
        theme: 'kubefirst',
        class: ['border-kubefirst-purple-light'],
      },
      {
        theme: 'konstruct',
        class: ['border-orange-400'],
      },
      { theme: 'colony', class: ['border-red-400'] },
    ],
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);

export const tagItemVariants = cva(
  [
    'cursor-pointer',
    'py-1',
    'px-2',
    'last:mb-2',
    'first:mt-2',
    'h-full',
    'transition-all',
    'duration-30',
  ],
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
