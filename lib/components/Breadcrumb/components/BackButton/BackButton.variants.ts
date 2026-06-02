import { cva } from 'class-variance-authority';

export const backButtonVariants = cva([
  'inline-flex',
  'items-center',
  'justify-center',
  'text-gray-400',
  'transition-colors',
  'cursor-pointer',
  'rounded-xs',
  'hover:text-gray-500',
  'dark:text-gray-400',
  'dark:hover:text-gray-300',
  'focus-visible:outline-2',
  'focus-visible:outline-offset-2',
  'focus-visible:outline-gray-500',
]);
