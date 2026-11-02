import { cva } from 'class-variance-authority';

export const listItemVariants = cva([
  'cursor-pointer',
  'tap-target',
  'py-1.5',
  'px-6',
  'h-full',
  'focus-visible:outline-none',
  'm-0',
  'w-full',
  'flex',
  'items-center',
  'gap-3',
  'transition-bg',
  'duration-250',
  'min-h-10',
  'hover:bg-gray-50',
  'active:bg-gray-50',
  'focus:bg-gray-50',
  'dark:hover:bg-metal-700',
  'dark:active:bg-metal-700',
  'dark:focus:bg-metal-700',
]);
