import { cva } from 'class-variance-authority';

export const copyButtonVariants = cva(
  [
    'inline-flex',
    'shrink-0',
    'items-center',
    'justify-center',
    'cursor-pointer',
    'rounded-xs',
    'transition-colors',
    'focus-visible:outline-none',
    'focus-visible:ring-1',
    'focus-visible:ring-ring',
    'disabled:pointer-events-none',
    'disabled:opacity-45',
  ],
  {
    variants: {
      iconOnly: {
        true: [
          'text-slate-500',
          'hover:text-slate-800',
          'dark:text-metal-400',
          'dark:hover:text-metal-100',
        ],
        false: '',
      },
    },
    defaultVariants: {
      iconOnly: true,
    },
  },
);
