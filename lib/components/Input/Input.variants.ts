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
    'pl-3',
    'pr-10',
    'py-1',
    'rounded-md',
    'shadow-sm',
    'transition-colors',
    'w-full',
  ],
  {
    variants: {
      variant: {
        default: '',
        error: '!border-red-600 pr-8 focus-visible:ring-transparent',
      },
      theme: {
        kubefirst: 'focus:ring-kubefirst-primary',
        colony: '',
        civo: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      theme: 'kubefirst',
    },
  },
);
