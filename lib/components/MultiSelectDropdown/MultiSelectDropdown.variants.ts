import { cva } from 'class-variance-authority';

export const wrapperVariants = cva([
  'flex',
  'flex-col',
  'gap-2',
  'w-full',
  'relative',
  'cursor-pointer',
]);

export const labelVariants = cva(['cursor-pointer', 'select-none']);

export const multiSelectDropdownVariants = cva([
  'min-h-9',
  'border',
  'cursor-pointer',
  'duration-250',
  'ease-in-out',
  'flex',
  'items-center',
  'justify-between',
  'px-2',
  'py-1',
  'rounded-md',
  'transition-all',
  'w-full',
  'border-gray-200',
  'dark:border-metal-700',
  'dark:bg-metal-800',
]);
