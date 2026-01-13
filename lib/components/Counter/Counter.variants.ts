import { cva } from 'class-variance-authority';

export const counterVariants = cva([
  '[&::-webkit-inner-spin-button]:appearance-none',
  '[&::-webkit-outer-spin-button]:appearance-none',
  '[-moz-appearance:textfield]',
  'appearance-none',
  'border',
  'border-x-0',
  'focus-visible:outline-none',
  'focus-visible:ring-transparent',
  'h-9',
  'max-w-16',
  'text-right',
  'px-3',
  'border-gray-300',
  'text-slate-800',
  'bg-white',
  'dark:bg-metal-800',
  'dark:border-metal-700',
  'dark:text-metal-50',
]);

export const buttonVariants = cva(
  [
    'h-9',
    'w-9',
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
