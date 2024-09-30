import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  [
    'flex',
    'w-full',
    'rounded-md',
    'border',
    'border-zinc-200',
    'bg-transparent',
    'text-base',
    'text-zinc-700',
    'transition-colors',
    'placeholder:text-muted-foreground',
    'focus-visible:outline-none',
    'focus-visible:ring-1',
    'focus-visible:ring-ring',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
    'shadow-sm',
  ],
  {
    variants: {
      variant: {
        default: '',
        error: ['border-red-600', 'pr-8', 'focus-visible:ring-transparent'],
      },
      size: {
        default: 'h-9 px-3 py-1',
      },
      theme: {
        kubefirst: '',
      },
    },
    compoundVariants: [
      { theme: 'kubefirst', class: ['focus:ring-kubefirst-purple-light'] },
    ],
    defaultVariants: {
      variant: 'default',
      theme: 'kubefirst',
      size: 'default',
    },
  },
);
