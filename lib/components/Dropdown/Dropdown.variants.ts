import { cva } from 'class-variance-authority';

export const dropdownVariants = cva(
  [
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

export const labelVariants = cva([
  'mb-1',
  'cursor-pointer',
  'text-[14px]',
  'leading-[20px]',
  'tracking-[0.1px]',
]);
