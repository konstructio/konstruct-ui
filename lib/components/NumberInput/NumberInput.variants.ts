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
    'h-9',
    'max-w-16',
    'text-right',
    'px-3',
    'border-gray-200',
  ],
  {
    variants: {
      theme: {
        colony: [],
        kubefirst: [],
        civo: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);

export const buttonVariants = cva(
  [
    'h-9',
    'w-9',
    'flex',
    'items-center',
    'justify-center',
    'border',
    'text-slate-400',
    'border-gray-200',
  ],
  {
    variants: {
      theme: {
        colony: [],
        kubefirst: [],
        civo: '',
      },
      button: {
        left: ['rounded-e'],
        rigth: ['rounded-s'],
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);

export const labelVariants = cva(['cursor-pointer'], {
  variants: {
    variant: {
      default: '',
    },
    theme: {
      kubefirst: '',
      colony: '',
      civo: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    theme: 'kubefirst',
  },
});
