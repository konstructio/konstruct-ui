import { cva } from 'class-variance-authority';

export const rangeVariants = cva([
  'relative',
  'flex',
  'items-center',
  'w-full',
  'border',
  'border-gray-200',
  'rounded-full',
  'shadow-sm',
]);

export const rangeOutsideVariants = cva([
  'absolute',
  'h-full',
  'bg-kubefirst-secondary',
]);

export const trackVariants = cva(
  ['relative', 'flex-grow', 'bg-gray-100', 'rounded-full'],
  {
    variants: {
      size: {
        sm: ['h-1'],
        md: ['h-2'],
        lg: ['h-3'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

export const thumbVariants = cva(
  [
    'block',
    'w-5',
    'h-5',
    'rounded-full',
    'cursor-pointer',
    'focus-visible:outline-none',
    'shadow-md',
    'bg-white',
    'border',
    'border-gray-300',
  ],
  {
    variants: {
      size: {
        sm: ['w-5', 'h-5'],
        md: ['w-6', 'h-6'],
        lg: ['w-7', 'h-7'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);
