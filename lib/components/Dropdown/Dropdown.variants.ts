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
  ],
  {
    variants: {
      theme: {
        kubefirst: [
          'aria-expanded:border-kubefirst-primary',
          'aria-expanded:text-kubefirst-secondary',
          'focus-visible:bg-purple-100',
        ],
        colony: [
          'aria-expanded:border-red-400',
          'aria-expanded:text-red-400',
          'focus-visible:bg-red-100',
        ],
        civo: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);

export const labelVariants = cva(
  [
    'mb-1',
    'cursor-pointer',
    'text-[14px]',
    'leading-[20px]',
    'tracking-[0.1px]',
  ],
  {
    variants: {
      theme: {
        kubefirst: '',
        colony: '',
        civo: '',
      },
    },
  },
);
