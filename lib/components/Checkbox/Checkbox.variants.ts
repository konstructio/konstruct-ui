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
    'text-slate-800',
    'border-zinc-400',
    'kubefirst:border-kubefirst-primary',
    'kubefirst:text-white',
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
          'kubefirst:bg-kubefirst-primary',
          'bg-aurora-500',
          'border-aurora-500',
        ],
      },
    ],
    defaultVariants: {
      variant: 'default',
    },
  },
);

export const labelVariants = cva([
  'cursor-pointer',
  'text-sm',
  'text-slate-800',
  'dark:text-slate-50',
]);
