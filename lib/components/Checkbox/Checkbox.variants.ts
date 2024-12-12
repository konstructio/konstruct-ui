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
        konstruct: '',
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
        class: ['border-kubefirst-primary'],
      },
      {
        theme: 'kubefirst',
        checked: true,
        class: ['bg-kubefirst-primary'],
      },
      {
        theme: 'konstruct',
        class: ['border-orange-600'],
      },
      {
        theme: 'konstruct',
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
      konstruct: '',
      kubefirst: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    theme: 'kubefirst',
  },
});
