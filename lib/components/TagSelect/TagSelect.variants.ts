import { cva } from 'class-variance-authority';

export const wrapperVariants = cva([
  'flex',
  'flex-col',
  'w-full',
  'relative',
  'text-zinc-500',
]);

export const labelVariants = cva(['my-2', 'cursor-pointer']);

export const tagSelectVariants = cva([
  'border',
  'cursor-pointer',
  'duration-250',
  'ease-in-out',
  'flex',
  'items-center',
  'justify-between',
  'px-2',
  'py-1',
  'rounded',
  'transition-all',
  'w-full',
  'border-gray-200',
]);
