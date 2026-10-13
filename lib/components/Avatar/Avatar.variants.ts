import { cva } from 'class-variance-authority';

export const avatarVariants = cva(
  [
    'inline-flex',
    'shrink-0',
    'items-center',
    'justify-center',
    'overflow-hidden',
    'rounded-full',
    'bg-sky-400/15',
    'font-medium',
    'uppercase',
    'text-sky-600',
    'select-none',
    'dark:text-sky-400',
  ],
  {
    variants: {
      size: {
        sm: ['size-7', 'text-[10px]'],
        md: ['size-10', 'text-sm'],
        lg: ['size-14', 'text-lg'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);
