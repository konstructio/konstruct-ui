import { cva } from 'class-variance-authority';

export const checkboxVariants = cva(
  [
    'cursor-pointer',
    'border',
    'rounded',
    'w-5',
    'h-5',
    'flex',
    'justify-center',
    'items-center',
    'text-white',
  ],
  {
    variants: {
      variant: {
        default: '',
      },
      theme: {
        colony: '',
        kontruct: '',
        kubefirst: '',
      },
      checked: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        theme: 'kubefirst',
        class: ['border-kubefirst-purple-light'],
      },
      {
        theme: 'kubefirst',
        checked: true,
        class: ['bg-kubefirst-purple-light'],
      },
      {
        theme: 'kontruct',
        class: ['border-orange-600'],
      },
      {
        theme: 'kontruct',
        checked: true,
        class: ['bg-orange-600'],
      },
      {
        theme: 'colony',
        class: ['border-red-700'],
      },
      {
        theme: 'colony',
        checked: true,
        class: ['bg-red-700'],
      },
    ],
    defaultVariants: {
      variant: 'default',
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
      colony: '',
      kontruct: '',
      kubefirst: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    theme: 'kubefirst',
  },
});