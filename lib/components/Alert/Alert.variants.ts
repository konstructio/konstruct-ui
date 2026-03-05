import { cva } from 'class-variance-authority';

export const alertVariants = cva(
  [
    'relative',
    'border',
    'p-4',
    'rounded-lg',
    'flex',
    'gap-4',
    'items-start',
    'justify-start',
    'text-sm',
    'shadow-sm',
    'overflow-clip',
    'duration-300',
    'data-[state=hidden]:animate-out',
    'data-[state=hidden]:fade-out-0',
    'data-[state=hidden]:zoom-out-95',
  ],
  {
    variants: {
      type: {
        success: [
          'bg-green-50',
          'border-green-200',
          'dark:bg-green-500/10',
          'dark:border-green-500/20',
        ],
        info: [
          'bg-blue-50',
          'border-blue-100',
          'dark:bg-blue-500/10',
          'dark:border-blue-500/20',
        ],
        warning: [
          'bg-yellow-50',
          'border-yellow-200',
          'dark:bg-yellow-500/10',
          'dark:border-yellow-500/20',
        ],
        danger: [
          'bg-red-50',
          'border-red-200',
          'dark:bg-red-500/10',
          'dark:border-red-500/20',
        ],
      },
      isVisible: {
        true: '',
        false: 'hidden',
      },
    },
    defaultVariants: {
      isVisible: true,
    },
  },
);

export const titleVariants = cva(['text-sm', 'font-medium', 'leading-5'], {
  variants: {
    type: {
      success: ['text-green-800', 'dark:text-green-300'],
      info: ['text-blue-800', 'dark:text-blue-300'],
      warning: ['text-yellow-800', 'dark:text-yellow-200'],
      danger: ['text-red-800', 'dark:text-rose-300'],
    },
  },
});

export const descriptionVariants = cva(
  ['text-sm', 'font-normal', 'leading-5'],
  {
    variants: {
      type: {
        success: ['text-green-700', 'dark:text-green-100'],
        info: ['text-blue-700', 'dark:text-blue-200'],
        warning: ['text-yellow-700', 'dark:text-yellow-100'],
        danger: ['text-red-700', 'dark:text-rose-200'],
      },
    },
  },
);

export const iconVariants = cva(['size-5', 'shrink-0'], {
  variants: {
    type: {
      success: ['text-green-600', 'dark:text-green-400'],
      info: ['text-blue-600', 'dark:text-blue-400'],
      warning: ['text-yellow-600', 'dark:text-yellow-400'],
      danger: ['text-red-600', 'dark:text-rose-400'],
    },
  },
});

export const closeButtonVariants = cva(
  [
    'size-4',
    'absolute',
    'right-3',
    'top-3',
    'cursor-pointer',
    'opacity-70',
    'hover:opacity-100',
    'transition-opacity',
  ],
  {
    variants: {
      type: {
        success: ['text-green-600', 'dark:text-green-400'],
        info: ['text-blue-600', 'dark:text-blue-400'],
        warning: ['text-yellow-600', 'dark:text-yellow-400'],
        danger: ['text-red-600', 'dark:text-rose-400'],
      },
    },
  },
);
