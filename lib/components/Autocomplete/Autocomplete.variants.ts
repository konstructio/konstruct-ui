import { cva } from 'class-variance-authority';

export const autocompleteVariants = cva(
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
    'py-1',
    'px-2',
  ],
  {
    variants: {
      variant: {
        default: '',
      },
      theme: {
        kubefirst: '',
      },
    },
    compoundVariants: [
      { theme: 'kubefirst', class: ['focus:ring-kubefirst-purple-light'] },
    ],
    defaultVariants: {
      theme: 'kubefirst',
      variant: 'default',
    },
  },
);
