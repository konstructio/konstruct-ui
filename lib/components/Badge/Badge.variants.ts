import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
  [
    'flex',
    'items-center',
    'justify-center',
    'gap-1.5',
    'rounded-md',
    'px-2',
    'py-1',
    'w-max',
    'shadow-xs',
    'data-[state=hidden]:animate-out',
    'data-[state=hidden]:fade-out-0',
    'data-[state=hidden]:zoom-out-95',
  ],
  {
    variants: {
      variant: {
        default: ['bg-gray-100', 'text-gray-800'],
        danger: ['bg-red-100', 'text-red-800'],
        info: ['bg-blue-100', 'text-blue-800'],
        success: ['bg-green-100', 'text-green-800'],
        warning: ['bg-yellow-100', 'text-yellow-800'],
      },
      size: {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
        xlarge: 'text-xl',
        xxlarge: 'text-2xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  },
);

export const buttonDismissVariants = cva(
  [
    'rounded-full',
    'inline-flex',
    'items-center',
    'justify-center',
    'focus:outline-none',
    'text-inherit',
    'cursor-pointer',
  ],
  {
    variants: {
      size: {
        small: ['h-3', 'w-3'],
        medium: ['h-3.5', 'w-3.5'],
        large: ['h-4', 'w-4'],
        xlarge: ['h-5', 'w-5'],
        xxlarge: ['h-6', 'w-6'],
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  },
);
