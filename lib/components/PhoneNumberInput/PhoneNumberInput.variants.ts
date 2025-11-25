import { cva } from 'class-variance-authority';

export const phoneNumberInputVariants = cva([
  'relative',
  'border',
  'border-gray-300',
  'rounded',
  'data-[state=open]:border-aurora-500',
  'focus-within:border-aurora-500',
  'transition-colors',
  'duration-150',
]);

export const labelVariants = cva([
  'mb-1',
  'cursor-pointer',
  'text-sm',
  'leading-5',
  'tracking-[0.1px]',
  'dark:text-slate-50',
]);
