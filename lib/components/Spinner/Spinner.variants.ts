import { cva } from 'class-variance-authority';

export const spinnerVariants = cva(
  [
    'h-full',
    'flex',
    'justify-center',
    'items-center',
    'flex-col',
    'gap-6',
    'animate-in',
    'fade-in-80',
  ],
  {
    variants: {
      size: {
        sm: [],
        md: [],
        lg: [],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

export const spinnerIconVariants = cva(
  [
    'animate-spin',
    'animate-duration-time-2',
    'bg-linear-to-r',
    'from-black/20',
    'from-1%',
    'via-black/50',
    'via-40%',
    'to-aurora-500',
    'dark:from-white/20',
    'dark:via-white/50',
  ],
  {
    variants: {
      size: {
        sm: ['w-20', 'h-20'],
        md: ['w-40', 'h-40'],
        lg: ['w-60', 'h-60'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);
