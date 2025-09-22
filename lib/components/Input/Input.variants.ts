import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  [
    'bg-white',
    'border-gray-300',
    'border',
    'disabled:bg-gray-50',
    'disabled:cursor-not-allowed',
    'disabled:text-slate-500',
    'flex',
    'focus-visible:outline-none',
    'focus-visible:ring-1',
    'h-10',
    'placeholder:text-slate-400',
    'px-2.5',
    'py-2',
    'rounded',
    'text-slate-800',
    'text-sm',
    'w-full',
    'transition-all',
    'data-[error=false]:dark:focus:ring-aurora-500',
    'data-[error=false]:focus:ring-aurora-500',
    'data-[error=false]:kubefirst:focus:ring-kubefirst-primary',
    'dark:bg-slate-800',
    'dark:border-slate-600',
    'dark:disabled:bg-slate-900',
    'dark:disabled:text-slate-400',
    'dark:text-slate-50',
    'dark:text-white',
    'kubefirst-dark:bg-slate-800',
    'kubefirst-dark:border-slate-600',
    'kubefirst-dark:disabled:bg-slate-900',
    'kubefirst-dark:disabled:text-slate-400',
    'kubefirst-dark:text-slate-50',
    'kubefirst-dark:text-white',
  ],
  {
    variants: {
      variant: {
        default: '',
        error:
          'border-red-600 kubefirst-dark:border-red-500 dark:border-red-500 dark:border-red-500 pr-8 focus-visible:ring-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
