import { cva } from 'class-variance-authority';

export const dropdownVariants = cva(
  [
    'group',
    'border',
    'cursor-pointer',
    'ease-in-out',
    'flex',
    'items-center',
    'justify-between',
    'px-3',
    'py-1',
    'relative',
    'rounded-md',
    'transition-all',
    'w-full',
    'outline-none',
    'h-9',
    'border-gray-200',
    'focus-visible:bg-zinc-50',
    'aria-expanded:border-aurora-500',
    'aria-expanded:text-aurora-500',
    'kubefirst:aria-expanded:border-kubefirst-primary',
    'kubefirst:aria-expanded:text-kubefirst-secondary',
    'dark:border-slate-600',
    'dark:focus-visible:bg-slate-800',
  ],
  {
    variants: {
      hasError: {
        true: [
          'aria-expanded:border-red-600',
          'aria-expanded:text-red-600',
          'kubefirst:border-red-600',
          'kubefirst:text-red-600',
        ],
        false: '',
      },
    },
    defaultVariants: {
      hasError: false,
    },
  },
);

export const inputVariants = cva([
  'flex-1',
  'bg-transparent',
  'border-none',
  'outline-none',
  'text-zinc-700',
  'text-sm',
  'capitalize',
  'placeholder:text-sm',
  'placeholder:normal-case',
  'placeholder:select-none',
  'dark:placeholder:text-slate-400',
  'dark:text-slate-50',
]);

export const labelVariants = cva([
  'mb-1',
  'cursor-pointer',
  'text-sm',
  'leading-[20px]',
  'tracking-[0.1px]',
  'dark:text-slate-50',
]);
