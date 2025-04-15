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
  'overflow-auto',
  'relative',
  'rounded-md',
  'shadow-xs',
  'lg:overflow-hidden',
  'animate-in',
  'fade-in-0',
  'zoom-in-95',
  'duration-150',
  'shadow-kubefirst-primary',
  'colony:shadow-red-400',
]);

export const buttonCloseVariants = cva([
  'absolute',
  'right-1.5',
  'top-1.5',
  'text-inherit',
  'cursor-pointer',
  'text-kubefirst-primary',
  'colony:text-red-400',
]);
