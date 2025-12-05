import { cva } from 'class-variance-authority';

export const wrapperVariants = cva([
  'flex',
  'flex-col',
  'w-full',
  'relative',
  'text-slate-500',

  'mb-1',
  'cursor-pointer',
  'text-sm',
  'leading-5',
  'tracking-[0.1px]',
  'dark:text-slate-50',
]);

export const labelVariants = cva(['cursor-pointer', 'mb-1']);

export const multiSelectDropdownVariants = cva([
  'h-9',
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
]);
