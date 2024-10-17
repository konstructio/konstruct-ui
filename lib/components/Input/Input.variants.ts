import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  [
    'bg-transparent',
    'border',
    'border-zinc-200',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
    'flex',
    'focus-visible:outline-none',
    'focus-visible:ring-1',
    'h-9',
    'placeholder:text-muted-foreground',
    'px-3',
    'py-1',
    'rounded-md',
    'shadow-sm',
    'text-base',
    'text-zinc-700',
    'transition-colors',
    'w-full',
  ],
  {
    variants: {
      variant: {
        default: '',
        error: ['border-red-600', 'pr-8', 'focus-visible:ring-transparent'],
      },
      theme: {
        kubefirst: 'focus:ring-kubefirst-purple-light',
        colony: '',
        konstruct: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      theme: 'kubefirst',
    },
  },
);
