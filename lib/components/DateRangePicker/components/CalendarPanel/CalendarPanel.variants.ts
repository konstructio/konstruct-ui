import { cva } from 'class-variance-authority';

export const calendarPanelVariants = cva([
  'flex',
  'flex-col',
  'items-center',
  'w-full',
]);

export const calendarNavigationVariants = cva([
  'flex',
  'items-center',
  'justify-between',
  'w-138',
]);

export const calendarNavGroupVariants = cva([
  'flex',
  'items-center',
  'w-64.75',
]);

export const calendarNavButtonVariants = cva([
  'flex',
  'items-center',
  'justify-center',
  'p-2',
  'rounded-full',
  'cursor-pointer',
  'text-slate-500',
  'dark:text-metal-300',
  'hover:bg-slate-100',
  'dark:hover:bg-metal-700',
  'transition-colors',
]);

export const calendarNavButtonDisabledVariants = cva([
  'opacity-45',
  'cursor-not-allowed',
  'hover:bg-transparent',
]);

export const calendarMonthTitleVariants = cva([
  'flex-1',
  'text-center',
  'text-base',
  'font-medium',
  'text-slate-700',
  'dark:text-white',
  'leading-6',
]);

export const calendarGridContainerVariants = cva([
  'flex',
  'gap-8',
  'py-4',
  'w-138',
  'justify-center',
]);

export const calendarGridVariants = cva(['w-64.75']);
