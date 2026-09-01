import { cva } from 'class-variance-authority';

/**
 * The surface is one continuous panel divided by hairlines, so the padding lives
 * on the columns rather than here — that is what lets the preset column run to
 * the edge and carry the rule between the two. `overflow-hidden` keeps those
 * flush columns inside the rounded corner.
 */
export const dateRangePickerVariants = cva([
  'flex',
  'rounded-xl',
  'overflow-hidden',
  'max-w-fit',
  'bg-white',
  'dark:bg-metal-800',
  'dark:border-metal-700',
  'shadow',
  'dark:shadow-metal-50/5',
]);

export const rightPanelVariants = cva([
  'flex',
  'flex-col',
  'gap-6',
  'pt-4.5',
  'pb-3.5',
  'px-4',
  'items-center',
]);
