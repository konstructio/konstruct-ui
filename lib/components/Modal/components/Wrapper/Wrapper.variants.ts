import { cva } from 'class-variance-authority';

export const modalVariants = cva([
  'bg-metal-1000',
  'bg-white',
  'border-none',
  'flex',
  'flex-col',
  'justify-between',
  'min-h-[450px]',
  'min-w-[500px]',
  'relative',
  'rounded-md',
  'shadow-xs',
  'animate-in',
  'fade-in-0',
  'zoom-in-95',
  'duration-150',
  'shadow-kubefirst-primary',
]);

export const buttonCloseVariants = cva([
  'absolute',
  'right-1.5',
  'top-1.5',
  'text-inherit',
  'cursor-pointer',
  'text-kubefirst-primary',
]);
