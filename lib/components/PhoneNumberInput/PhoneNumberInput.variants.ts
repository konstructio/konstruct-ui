import { cva } from 'class-variance-authority';

export const phoneNumberInputVariants = cva(
  [
    'text-sm',
    'relative',
    'border',
    'border-gray-300',
    'rounded',
    'data-[state=open]:border-aurora-500',
    'focus-within:border-aurora-500',
    'transition-colors',
    'duration-150',
    'dark:border-metal-700',
    'dark:bg-metal-800',
    'dark:data-[state=open]:border-metal-700',
    'dark:focus-within:border-metal-700',
  ],
  {
    variants: {
      variant: {
        default: [],
        error: [
          'border-red-600',
          'dark:border-red-500',
          'data-[state=open]:border-red-500',
          'focus-within:border-red-500',
          'pr-8',
          'focus-visible:ring-transparent',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export const labelVariants = cva([
  'cursor-pointer',
  'text-sm',
  'leading-5',
  'tracking-[0.1px]',
  'dark:text-slate-50',
]);
