import { cva } from 'class-variance-authority';

export const checkboxVariants = cva(
  [
    'cursor-pointer',
    'border',
    'rounded-sm',
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
        kubefirst: '',
        civo: '',
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
      kubefirst: '',
      civo: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    theme: 'kubefirst',
  },
});
