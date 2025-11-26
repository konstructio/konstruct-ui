import { cva } from 'class-variance-authority';

export const phoneNumberInputVariants = cva(
  [
    'relative',
    'border',
    'border-gray-300',
    'rounded',
    'data-[state=open]:border-aurora-500',
    'focus-within:border-aurora-500',
    'transition-colors',
    'duration-150',
    'dark:border-slate-500',
    'dark:bg-slate-800',
    'dark:data-[state=open]:border-slate-500',
    'dark:focus-within:border-slate-500',
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
