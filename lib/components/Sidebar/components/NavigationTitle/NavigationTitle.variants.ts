import { cva } from 'class-variance-authority';

export const navigationTitleVariants = cva([
  'text-sm',
  'font-bold',
  'px-4',
  'mt-3',
  'mb-2',
  'text-white',
  'selection:bg-powder-500',
  'selection:text-white',
]);

export const navigationTitleButtonVariants = cva([
  'flex',
  'w-full',
  'cursor-pointer',
  'items-center',
  'justify-between',
  'gap-2',
  'rounded',
  'text-left',
  'uppercase',
  'outline-none',
  'focus-visible:ring-1',
  'focus-visible:ring-inset',
  'focus-visible:ring-aurora-500',
]);
