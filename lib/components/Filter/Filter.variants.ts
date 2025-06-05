import { cva } from 'class-variance-authority';

export const filterVariants = cva(['flex', 'gap-8', 'items-center']);

export const filterButtonVariants = cva([
  'flex',
  'items-center',
  'gap-1',
  'text-slate-500',
  'cursor-pointer',
  'text-sm',
  'w-max',
]);

export const filterButtonIconVariants = cva([
  'text-slate-400',
  'h-[20px]',
  'w-[20px]',
  'transition-all',
  'duration-150',
  'ease-in-out',
]);
