import { cva } from 'class-variance-authority';

export const autocompleteVariants = cva(
  [
    'flex',
    'w-full',
    'rounded-md',
    'border',
    'border-zinc-200',
    'bg-transparent',
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
        kubefirst: ['focus:ring-kubefirst-primary'],
        colony: ['focus:focus:ring-red-400'],
        civo: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
      variant: 'default',
    },
  },
);

export const labelVariants = cva(
  ['pl-1', 'mb-2', 'text-base', 'cursor-pointer'],
  {
    variants: {
      variant: {
        default: '',
      },
      theme: {
        kubefirst: '',
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
