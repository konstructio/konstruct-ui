import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
  [
    'flex',
    'items-center',
    'justify-center',
    'gap-2',
    'rounded',
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
        violet: ['bg-violet-50', 'text-violet-800'],
      },
      size: {
        default: 'text-sm leading-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
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
    'text-gray-700',
  ],
  {
    variants: {
      variant: {
        default: ['text-gray-700'],
        danger: ['text-red-700'],
        info: ['text-blue-700'],
        success: ['text-green-700'],
        warning: ['text-yellow-700'],
        violet: ['text-violet-700'],
      },
      size: {
        default: ['h-3.5', 'w-3.5'],
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
