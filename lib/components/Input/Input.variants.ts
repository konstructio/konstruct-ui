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
    'h-9',
    'px-3',
    'py-1',
  ],
  {
    variants: {
      variant: {
        default: '',
        error: ['border-red-600', 'pr-8', 'focus-visible:ring-transparent'],
      },
      theme: {
        kubefirst: '',
        colony: '',
        konstruct: '',
      },
    },
    compoundVariants: [
      { theme: 'kubefirst', class: ['focus:ring-kubefirst-purple-light'] },
    ],
    defaultVariants: {
      variant: 'default',
      theme: 'kubefirst',
    },
  },
);
