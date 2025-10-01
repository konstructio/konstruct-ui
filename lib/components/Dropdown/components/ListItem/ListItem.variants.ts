import { cva } from 'class-variance-authority';

export const listItemVariants = cva([
  'cursor-pointer',
  'py-2',
  'px-2',
  'h-full',
  'focus-visible:outline-none',
  'm-0',
  'w-full',
  'flex',
  'items-center',
  'gap-3',
  'transition-bg',
  'duration-250',
  'hover:bg-gray-50',
  'focus:bg-gray-50',
  'dark:hover:bg-slate-700',
  'dark:focus:bg-slate-700',
]);
