import { cva } from 'class-variance-authority';

export const textAreaVariants = cva(
  [
    'border',
    'border-gray-200',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
    'focus-visible:outline-none',
    'focus-visible:ring-1',
    'focus-visible:ring-ring',
    'p-2',
    'placeholder:text-gray-300',
    'resize-none',
    'rounded-md',
    'shadow-sm',
    'text-base',
    'w-full',
  ],
  {
    variants: {
      theme: {
        colony: 'focus:ring-red-700',
        kubefirst: 'focus:ring-kubefirst-purple-light',
        konstruct: 'focus:ring-orange-600',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);