import { cva } from 'class-variance-authority';

export const dateTimeInputsVariants = cva(['flex', 'gap-8', 'w-full', 'px-1']);

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

/**
 * Marks the date fields as required. It is decorative: the range needs *a* date,
 * not both, so the inputs are deliberately left without `aria-required`.
 */
export const inputRequiredMarkVariants = cva(['ml-1', 'text-red-500']);
