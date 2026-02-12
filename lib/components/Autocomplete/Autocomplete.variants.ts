import { cva } from 'class-variance-authority';

export const autocompleteVariants = cva([
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
  'shadow-2xs',
  'py-1',
  'px-2',
  'focus:ring-aurora-500',
  'kubefirst:focus:ring-kubefirst-primary',
]);

export const labelVariants = cva(['pl-1', 'text-base', 'cursor-pointer']);
