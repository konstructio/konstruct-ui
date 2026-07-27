import { cva } from 'class-variance-authority';

export const collapseTriggerVariants = cva([
  'inline-flex',
  'items-center',
  'justify-center',
  'shrink-0',
  'p-1',
  'rounded',
  'border',
  'border-metal-700',
  'text-metal-50',
  'cursor-pointer',
  'hover:bg-metal-800',
  'focus:outline-none',
  'focus-visible:ring-2',
  'focus-visible:ring-white/40',
]);
