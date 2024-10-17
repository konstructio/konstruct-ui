import { cva } from 'class-variance-authority';

export const textAreaVariants = cva(
  [
    'border',
    'border-gray-200',
    'rounded-md',
    'resize-none',
    'p-2',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
    'shadow-sm',
    'w-full',
    'text-base',
    'placeholder:text-gray-300',
  ],
  {
    variants: {
      theme: {
        colony: '',
        kubefirst: '',
        konstruct: '',
      },
    },
  },
);
