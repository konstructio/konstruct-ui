import { cva } from 'class-variance-authority';

export const modalVariants = cva([
  'bg-white',
  'border',
  'border-transparent',
  'dark:bg-metal-800',
  'dark:border-slate-700',
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
]);

export const buttonCloseVariants = cva([
  'absolute',
  'right-1.5',
  'top-1.5',
  'cursor-pointer',
  'text-slate-500',
  'dark:text-slate-300',
  'hover:text-slate-700',
  'dark:hover:text-slate-100',
]);
