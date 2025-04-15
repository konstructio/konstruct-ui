import { cva } from 'class-variance-authority';

export const wrapperVariants = cva([
  '[&_[cmdk-group-heading]]:font-medium',
  '[&_[cmdk-group-heading]]:px-2',
  '[&_[cmdk-group-heading]]:text-muted-foreground',
  '[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0',
  '[&_[cmdk-group]]:px-2',
  '[&_[cmdk-input-wrapper]_svg]:h-5',
  '[&_[cmdk-input-wrapper]_svg]:w-5',
  '[&_[cmdk-input]]:h-12',
  '[&_[cmdk-item]]:px-2',
  '[&_[cmdk-item]]:py-3',
  '[&_[cmdk-item]_svg]:h-5',
  '[&_[cmdk-item]_svg]:w-5',
  'bg-popover',
  'flex',
  'items-center',
  'justify-center',
  'overflow-hidden',
  'text-popover-foreground',
  'border',
  'rounded-md',
  'border-neutral-900/35',
  'bg-neutral-900/30',
]);

export const inputVariants = cva([
  'bg-transparent',
  'disabled:cursor-not-allowed',
  'disabled:opacity-50',
  'flex',
  'h-10',
  'outline-none',
  'placeholder:text-muted-foreground',
  'py-3',
  'rounded-md',
  'text-sm',
  'w-full',
  'text-white/80',
]);

export const searchInconInputVariants = cva([
  'mr-2',
  'h-4',
  'w-4',
  'shrink-0',
  'opacity-80',
  'text-white',
]);
