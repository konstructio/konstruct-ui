import { cva } from 'class-variance-authority';

export const dateRangePickerVariants = cva([
  'flex',
  'rounded-xl',
  'max-w-fit',
  'bg-white',
  'dark:bg-metal-800',
  'dark:border-metal-700',
  'shadow',
  'dark:shadow-metal-50/5',
  'pt-4.5',
  'pb-3.5',
  'px-4',
]);

export const rightPanelVariants = cva([
  'flex',
  'flex-col',
  'pt-4',
  'gap-6',
  'pr-4',
  'items-center',
]);
