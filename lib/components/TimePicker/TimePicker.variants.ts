import { cva } from 'class-variance-authority';

export const timePickerVariants = cva();

export const ulVariants = cva([
  'snap-y',
  'snap-mandatory',
  'overflow-y-scroll',
  'scrollbar-none',
]);

export const liVariants = cva([
  'w-[60px]',
  'h-[40px]',
  'snap-start',
  'rounded',
  'transition-all',
  'focus-within:outline-2',
  'border-2',
  'border-transparent',
  'outline-none',
  'data-[active=true]:bg-blue-600',
  'data-[active=true]:text-white',
  'focus-visible:border-blue-200',
  'focus-within:border-blue-200',
]);

export const buttonVariants = cva([
  'flex',
  'items-center',
  'justify-center',
  'cursor-pointer',
  'w-full',
  'h-full',
  'px-6',
  'py-3',
  'outline-none',
  'focus:border-blue-200',
]);
