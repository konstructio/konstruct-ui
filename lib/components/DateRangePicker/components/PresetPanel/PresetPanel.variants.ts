import { cva } from 'class-variance-authority';

export const presetPanelVariants = cva([
  'flex',
  'flex-col',
  'gap-6',
  'pt-4',
  'pl-4',
  'pr-8',
  'pb-4',
  'bg-slate-100',
  'rounded-lg',
  'dark:bg-metal-900',
  'min-w-40',
]);

export const presetTitleVariants = cva([
  'text-xs',
  'font-medium',
  'uppercase',
  'text-slate-700',
  'dark:text-metal-300',
  'tracking-[0.25px]',
  'leading-4',
]);
