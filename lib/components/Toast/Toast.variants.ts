import { cva } from 'class-variance-authority';

export const toastFrameVariants = cva(
  [
    'overflow-hidden',
    'rounded-lg',
    'inset-ring',
    'inset-ring-transparent',
    'shadow-[0px_2px_2px_0px_rgba(100,116,139,0.25)]',
    'dark:bg-metal-950',
    'dark:bg-linear-to-b',
    'dark:shadow-[0px_2px_2px_0px_rgba(0,0,0,0.45)]',
  ],
  {
    variants: {
      type: {
        success: [
          'bg-green-800',
          'dark:from-green-600/10',
          'dark:to-green-600/10',
          'dark:inset-ring-green-600/20',
        ],
        error: [
          'bg-red-800',
          'dark:from-red-500/10',
          'dark:to-red-500/10',
          'dark:inset-ring-red-500/20',
        ],
        warning: [
          'bg-amber-800',
          'dark:from-yellow-400/10',
          'dark:to-yellow-400/10',
          'dark:inset-ring-yellow-400/20',
        ],
        info: [
          'bg-blue-800',
          'dark:from-blue-500/10',
          'dark:to-blue-500/10',
          'dark:inset-ring-blue-500/20',
        ],
      },
    },
    defaultVariants: {
      type: 'info',
    },
  },
);

export const toastVariants = cva([
  'relative',
  'flex',
  'min-h-14',
  'flex-col',
  'justify-center',
  'p-4',
]);

export const toastTitleVariants = cva(
  ['font-medium', 'tracking-normal', 'text-white'],
  {
    variants: {
      type: {
        success: ['dark:text-green-300'],
        error: ['dark:text-red-300'],
        warning: ['dark:text-yellow-200'],
        info: ['dark:text-blue-300'],
      },
    },
    defaultVariants: {
      type: 'info',
    },
  },
);

export const toastDescriptionVariants = cva(['text-white/80'], {
  variants: {
    type: {
      success: ['dark:text-green-100'],
      error: ['dark:text-red-200'],
      warning: ['dark:text-yellow-100'],
      info: ['dark:text-blue-200'],
    },
  },
  defaultVariants: {
    type: 'info',
  },
});

export const toastIconVariants = cva(['shrink-0', 'text-white'], {
  variants: {
    type: {
      success: ['dark:text-green-400'],
      error: ['dark:text-red-400'],
      warning: ['dark:text-yellow-300'],
      info: ['dark:text-blue-400'],
    },
  },
  defaultVariants: {
    type: 'info',
  },
});

export const toastCloseButtonVariants = cva(
  ['shrink-0', 'cursor-pointer', 'text-white'],
  {
    variants: {
      type: {
        success: ['dark:text-green-300'],
        error: ['dark:text-red-300'],
        warning: ['dark:text-yellow-200'],
        info: ['dark:text-blue-300'],
      },
    },
    defaultVariants: {
      type: 'info',
    },
  },
);
