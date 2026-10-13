import { cva } from 'class-variance-authority';

export const fieldVariants = cva(
  [
    'flex',
    'items-center',
    'h-9',
    'border',
    'border-x-0',
    'border-gray-300',
    'bg-white',
    'dark:bg-metal-800',
    'dark:border-metal-700',
  ],
  {
    variants: {
      fullWidth: {
        true: ['flex-1', 'w-full'],
        false: [],
      },
      hasError: {
        true: ['border-red-600', 'dark:border-red-500'],
        false: [],
      },
      disabled: {
        true: ['bg-gray-100', 'dark:bg-metal-900'],
        false: [],
      },
    },
    defaultVariants: {
      fullWidth: false,
      hasError: false,
      disabled: false,
    },
  },
);

export const counterVariants = cva(
  [
    '[&::-webkit-inner-spin-button]:appearance-none',
    '[&::-webkit-outer-spin-button]:appearance-none',
    '[-moz-appearance:textfield]',
    'appearance-none',
    'bg-transparent',
    'border-none',
    'focus-visible:outline-none',
    'focus-visible:ring-transparent',
    'h-full',
    'max-w-16',
    'text-right',
    'px-3',
    'text-slate-800',
    'disabled:text-slate-400',
    'dark:text-metal-50',
    'dark:disabled:text-metal-400',
  ],
  {
    variants: {
      fullWidth: {
        true: ['max-w-none', 'flex-1', 'min-w-0', 'w-full'],
        false: [],
      },
    },
    defaultVariants: {
      fullWidth: false,
    },
  },
);

export const unitVariants = cva([
  'pr-3',
  'text-sm',
  'select-none',
  'text-slate-400',
  'dark:text-slate-500',
]);

export const buttonVariants = cva(
  [
    'h-9',
    'w-9',
    'shrink-0',
    'flex',
    'items-center',
    'justify-center',
    'border',
    'text-slate-500',
    'border-gray-300',
    'bg-white',
    'cursor-pointer',
    'hover:bg-aurora-50',
    'hover:text-slate-600',
    'disabled:hover:bg-white',
    'disabled:bg-white',
    'disabled:text-slate-400',
    'dark:bg-metal-800',
    'dark:border-metal-700',
    'dark:text-aurora-500',
    'dark:hover:bg-aurora-900',
    'dark:hover:text-aurora-500',
    'dark:disabled:text-metal-400',
    'dark:disabled:hover:bg-metal-800',
    'dark:disabled:bg-metal-800',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      button: {
        left: ['rounded-e'],
        rigth: ['rounded-s'],
      },
      hasError: {
        true: ['border-red-600', 'dark:border-red-500'],
        false: [],
      },
    },
    defaultVariants: {
      hasError: false,
    },
  },
);

export const labelVariants = cva(['cursor-pointer'], {
  variants: {
    variant: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
