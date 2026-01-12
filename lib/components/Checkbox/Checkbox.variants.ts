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
    'disabled:cursor-not-allowed',
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
          'kubefirst:border-kubefirst-primary',
          'kubefirst:bg-kubefirst-primary',
          'bg-aurora-500',
          'border-aurora-500',
          'disabled:bg-zinc-300',
          'disabled:border-transparent',
          '*:text-metal-900',
          'kubefirst:*:text-white',
          'disabled:*:text-white',
          'dark:disabled:*:text-metal-900',
          'dark:disabled:bg-aurora-500/45',
        ],
      },
      {
        checked: false,
        class: [
          'kubefirst:border-kubefirst-primary',
          'kubefirst:text-white',
          'border-zinc-400',
          'disabled:bg-zinc-50',
          'disabled:border-zinc-300',
          'dark:disabled:bg-metal-800',
          'dark:disabled:border-metal-600',
          'dark:border-metal-600',
          'dark:bg-metal-800',
        ],
      },
    ],
    defaultVariants: {
      variant: 'default',
    },
  },
);

export const labelVariants = cva([
  'select-none',
  'cursor-pointer',
  'text-sm',
  'text-slate-800',
  'dark:text-slate-50',
]);
