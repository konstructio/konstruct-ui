import { cva } from 'class-variance-authority';

export const dateRangePickerVariants = cva([
  'flex',
  'rounded-xl',
  'bg-white',
  'dark:bg-metal-800',
  'dark:border-metal-700',
  'overflow-hidden',
]);

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
  'min-w-[160px]',
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

export const rightPanelVariants = cva([
  'flex',
  'flex-col',
  'pt-4',
  'gap-6',
  'items-center',
]);

export const dateTimeInputsVariants = cva(['flex', 'gap-8', 'w-full', 'px-3']);

export const dateTimeGroupVariants = cva([
  'flex',
  'gap-2',
  'items-center',
  'w-[266px]',
]);

export const dateInputWrapperVariants = cva([
  'flex',
  'flex-col',
  'gap-2',
  'w-[152px]',
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

export const calendarPanelVariants = cva([
  'flex',
  'flex-col',
  'gap-4',
  'items-center',
  'w-full',
]);

export const calendarNavigationVariants = cva([
  'flex',
  'items-center',
  'justify-between',
  'w-[552px]',
]);

export const calendarNavGroupVariants = cva([
  'flex',
  'items-center',
  'w-[259px]',
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

export const calendarDividerVariants = cva([
  'w-[552px]',
  'h-px',
  'bg-gray-200',
  'dark:bg-metal-700',
]);

export const calendarGridContainerVariants = cva([
  'flex',
  'gap-8',
  'py-4',
  'w-[552px]',
  'justify-center',
]);

export const calendarGridVariants = cva(['w-[259px]']);
