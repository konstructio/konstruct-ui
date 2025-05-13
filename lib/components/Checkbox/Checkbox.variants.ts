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
    'transition-all',
    'text-white',
    'border-kubefirst-primary',
    'colony:border-red-700',
    'civo:border-zinc-400',
  ],
  {
    variants: {
      variant: {
        default: '',
      },
      checked: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        checked: true,
        class: [
          'bg-kubefirst-primary',
          'colony:bg-red-700',
          ['civo:bg-civo-primary', 'civo:border-civo-primary'],
        ],
      },
    ],
    defaultVariants: {
      variant: 'default',
    },
  },
);

export const labelVariants = cva(['cursor-pointer', 'text-slate-800']);
