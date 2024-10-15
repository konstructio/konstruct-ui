import { cva } from 'class-variance-authority';

export const numberInputVariants = cva(
  [
    '[&::-webkit-inner-spin-button]:appearance-none',
    '[&::-webkit-outer-spin-button]:appearance-none',
    '[-moz-appearance:textfield]',
    'appearance-none',
    'border',
    'border-x-0',
    'focus-visible:outline-none',
    'focus-visible:ring-transparent',
    'p-1',
    'text-center',
  ],
  {
    variants: {
      theme: {
        colony: ['border-red-700', 'text-red-700'],
        kubefirst: [
          'border-kubefirst-purple-light',
          'text-kubefirst-purple-light',
        ],
        konstruct: ['border-orange-500', 'text-orange-500'],
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);

export const buttonVariants = cva(
  ['p-2', 'items-center', 'justify-center', 'border'],
  {
    variants: {
      theme: {
        colony: ['border-red-700', 'text-red-700', 'hover:bg-red-50'],
        kubefirst: [
          'border-kubefirst-purple-light',
          'text-kubefirst-purple-light',
          'hover:text-kubefirst-purple-dark',
          'hover:border-kubefirst-purple-dark',
          'hover:bg-purple-100',
        ],
        konstruct: [
          'border-orange-500',
          'text-orange-500',
          'hover:bg-orange-50',
        ],
      },
      button: {
        left: ['rounded-e-sm'],
        rigth: ['rounded-s-sm'],
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);

export const labelVariants = cva(['pl-1', 'text-base', 'cursor-pointer'], {
  variants: {
    variant: {
      default: '',
    },
    theme: {
      kubefirst: '',
      konstruct: '',
      colony: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    theme: 'kubefirst',
  },
});
