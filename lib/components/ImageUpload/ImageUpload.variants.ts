import { cva } from 'class-variance-authority';

export const imageUploadVariants = cva(
  ['flex', 'flex-col', 'gap-2', 'w-full'],
  {
    variants: {
      status: {
        default: '',
        uploading: '',
        complete: '',
        error: '',
      },
    },
    defaultVariants: {
      status: 'default',
    },
  },
);

export const inputContainerVariants = cva(
  ['flex', 'gap-2', 'h-15', 'items-center', 'w-full'],
  {
    variants: {
      status: {
        default: '',
        uploading: '',
        complete: '',
        error: '',
      },
    },
    defaultVariants: {
      status: 'default',
    },
  },
);

export const inputFieldVariants = cva(
  [
    'flex',
    'gap-4',
    'grow',
    'h-full',
    'items-center',
    'px-4',
    'py-2',
    'rounded',
    'border',
    'bg-white',
    'border-gray-300',
    'dark:bg-metal-800',
    'dark:border-metal-700',
    'kubefirst-dark:bg-slate-800',
    'kubefirst-dark:border-slate-600',
  ],
  {
    variants: {
      status: {
        default: '',
        uploading: '',
        complete: '',
        error: [
          'border-red-600',
          'dark:border-red-500',
          'kubefirst-dark:border-red-500',
        ],
      },
    },
    defaultVariants: {
      status: 'default',
    },
  },
);

export const labelVariants = cva([
  'flex',
  'gap-1',
  'items-center',
  'text-sm',
  'font-medium',
  'leading-5',
  'text-slate-500',
  'dark:text-slate-50',
  'kubefirst-dark:text-slate-50',
]);

export const helperTextVariants = cva(
  [
    'text-xs',
    'leading-5',
    'text-slate-600',
    'dark:text-slate-200',
    'kubefirst-dark:text-slate-200',
  ],
  {
    variants: {
      status: {
        default: '',
        uploading: '',
        complete: '',
        error: [
          'text-red-700',
          'dark:text-red-400',
          'kubefirst-dark:text-red-500',
        ],
      },
    },
    defaultVariants: {
      status: 'default',
    },
  },
);
