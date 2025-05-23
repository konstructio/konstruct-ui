import { cva } from 'class-variance-authority';

export const textAreaVariants = cva([
  'border',
  'border-gray-200',
  'disabled:cursor-not-allowed',
  'disabled:opacity-50',
  'focus-visible:outline-none',
  'focus-visible:ring-1',
  'focus-visible:ring-ring',
  'p-2',
  'placeholder:text-gray-300',
  'resize-none',
  'rounded-md',
  'shadow-xs',
  'w-full',
  'focus:ring-kubefirst-primary',
  'colony:focus:ring-red-700',
]);
