import { cva } from 'class-variance-authority';

export const dateTimeInputsVariants = cva(['flex', 'gap-8', 'w-full', 'px-3']);

export const dateTimeGroupVariants = cva([
  'flex',
  'gap-2',
  'items-center',
  'w-66.5',
]);

export const dateInputWrapperVariants = cva([
  'flex',
  'flex-col',
  'gap-2',
  'w-38',
]);

export const timeInputWrapperVariants = cva([
  'flex',
  'flex-col',
  'gap-2',
  'flex-1',
]);

export const inputLabelVariants = cva([
  'text-sm',
  'font-medium',
  'text-slate-500',
  'dark:text-metal-400',
  'leading-5',
]);
