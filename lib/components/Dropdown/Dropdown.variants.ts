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
    'aria-expanded:border-kubefirst-primary',
    'aria-expanded:text-kubefirst-secondary',
    'focus-visible:bg-zinc-50',
    'civo:aria-expanded:border-aurora-500',
    'civo:aria-expanded:text-aurora-500',
  ],
  {
    variants: {
      hasError: {
        true: [
          'border-red-600',
          'text-red-600',
          'civo:aria-expanded:border-red-600',
          'civo:aria-expanded:text-red-600',
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
