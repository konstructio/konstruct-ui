import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  [
    'bg-white',
    'border-gray-300',
    'border',
    'civo:focus:ring-civo-primary',
    'disabled:bg-gray-50',
    'disabled:cursor-not-allowed',
    'disabled:text-slate-500',
    'flex',
    'focus-visible:outline-none',
    'focus-visible:ring-1',
    'focus:ring-kubefirst-primary',
    'h-9',
    'placeholder:text-slate-400',
    'px-2.5',
    'py-2',
    'rounded',
    'shadow-2xs',
    'text-slate-800',
    'text-sm',
    'w-full',
    'transition-all',
  ],
  {
    variants: {
      variant: {
        default: '',
        error: 'border-red-600 pr-8 focus-visible:ring-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
