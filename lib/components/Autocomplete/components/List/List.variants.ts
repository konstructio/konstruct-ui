import { cva } from 'class-variance-authority';

export const listVariants = cva([
  'max-h-[250px]',
  'overflow-y-auto',
  'bg-white',
]);

export const emptyListVariants = cva([
  'p-1',
  'text-center',
  'w-full',
  'block',
  'bg-white',
]);

export const listItemVariants = cva([
  'focus-visible:outline-none',
  'kubefirst:focus:bg-purple-100',
  'kubefirst:hover:bg-purple-100',
  'border-transparent',
  'focus:bg-aurora-50',
  'hover:bg-aurora-50',
]);

export const buttonVariants = cva([
  'cursor-pointer',
  'focus-visible:outline-none',
  'px-3',
  'py-1.5',
  'w-full',
  'text-left',
  'focus:bg-aurora-50',
  'hover:bg-aurora-50',
  'kubefirst:focus:bg-purple-100',
  'kubefirst:hover:bg-purple-100',
]);
