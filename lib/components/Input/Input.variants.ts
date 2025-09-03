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
    'data-[error=false]:civo-dark:focus:ring-aurora-500',
    'data-[error=false]:civo:focus:ring-aurora-500',
    'data-[error=false]:focus:ring-kubefirst-primary',
    'civo-dark:bg-slate-800',
    'civo-dark:border-slate-600',
    'civo-dark:disabled:bg-slate-900',
    'civo-dark:disabled:text-slate-400',
    'civo-dark:text-slate-50',
    'civo-dark:text-white',
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
          'border-red-600 kubefirst-dark:border-red-500 civo-dark:border-red-500 pr-8 focus-visible:ring-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
