import { cva } from 'class-variance-authority';

export const dropdownVariants = cva([
  'border',
  'cursor-pointer',
  'ease-in-out',
  'flex',
  'items-center',
  'justify-between',
  'px-3',
  'py-1',
  'relative',
  'rounded-md',
  'transition-all',
  'w-full',
  'outline-none',
  'h-9',
  'border-gray-200',
  'aria-expanded:border-kubefirst-primary',
  'aria-expanded:text-kubefirst-secondary',
  'focus-visible:bg-zinc-50',
  'colony:aria-expanded:border-red-400',
  'colony:aria-expanded:text-red-400',
  'civo:aria-expanded:border-civo-primary',
  'civo:aria-expanded:text-civo-primary',
]);

export const labelVariants = cva([
  'mb-1',
  'cursor-pointer',
  'text-[14px]',
  'leading-[20px]',
  'tracking-[0.1px]',
]);
