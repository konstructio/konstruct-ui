import { cva } from 'class-variance-authority';

export const dateRangePickerVariants = cva([
  'flex',
  'rounded-xl',
  'max-w-fit',
  'bg-white',
  'dark:bg-metal-800',
  'dark:border-metal-700',
  'overflow-hidden',
  'shadow',
]);

export const rightPanelVariants = cva([
  'flex',
  'flex-col',
  'pt-4',
  'gap-6',
  'items-center',
]);
