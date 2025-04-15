import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  [
    'bg-white',
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
    'shadow-2xs',
    'transition-colors',
    'w-full',
    'focus:ring-kubefirst-primary',
  ],
  {
    variants: {
      variant: {
        default: '',
        error: 'border-red-600 pr-8 focus-visible:ring-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
