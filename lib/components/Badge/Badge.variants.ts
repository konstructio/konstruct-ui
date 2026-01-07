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
        default: [
          'bg-gray-100',
          'text-gray-800',
          'dark:text-gray-300',
          'dark:bg-gray-300/15',
        ],
        danger: [
          'bg-red-100',
          'text-red-800',
          'dark:text-red-400',
          'dark:bg-red-400/10',
        ],
        info: [
          'bg-blue-100',
          'text-blue-800',
          'dark:text-sky-400',
          'dark:bg-sky-400/10',
        ],
        success: [
          'bg-green-100',
          'text-green-800',
          'dark:text-green-400',
          'dark:bg-green-400/10',
        ],
        warning: [
          'bg-yellow-100',
          'text-yellow-800',
          'dark:text-amber-300',
          'dark:bg-amber-300/10',
        ],
        violet: [
          'bg-violet-50',
          'text-violet-800',
          'dark:text-purple-400',
          'dark:bg-purple-400/8',
        ],
        orange: [
          'bg-orange-50',
          'text-orange-800',
          'dark:text-orange-400',
          'dark:bg-orange-400/10',
        ],
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
        default: ['text-gray-700', 'dark:text-gray-300'],
        danger: ['text-red-700', 'dark:text-red-400'],
        info: ['text-blue-700', 'dark:text-sky-400'],
        success: ['text-green-700', 'dark:text-green-400'],
        warning: ['text-yellow-700', 'dark:text-amber-300'],
        violet: ['text-violet-700', 'dark:text-purple-400'],
        orange: ['text-orange-800', 'dark:text-orange-400'],
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
