import { cva } from 'class-variance-authority';

export const actionsTriggerVariants = cva(
  [
    'text-slate-400',
    'group-hover:text-slate-800',
    'group-hover:bg-aurora-50',
    'dark:text-metal-400',
    'dark:group-hover:text-aurora-500',
    'dark:group-hover:bg-aurora-900',
  ],
  {
    variants: {
      isOpen: {
        true: [
          'text-slate-800',
          'bg-aurora-50',
          'dark:text-aurora-500',
          'dark:bg-aurora-900',
        ],
        false: [],
      },
    },
    defaultVariants: {
      isOpen: false,
    },
  },
);

export const actionsPanelVariants = cva([
  'bg-white',
  'py-2',
  'rounded-lg',
  'shadow-lg',
  'border',
  'border-zinc-100',
  'dark:bg-metal-800',
  'dark:border-metal-700',
]);

export const actionsItemVariants = cva([
  'w-full',
  'text-slate-800',
  'cursor-pointer',
  'p-0',
  'h-9',
  'flex',
  'gap-2',
  'text-sm',
  'font-normal',
  'justify-start',
  'rounded-none',
  'px-6',
  'hover:bg-gray-50',
  'hover:text-slate-800',
  'hover:no-underline',
  'focus:no-underline',
  'dark:hover:bg-metal-700',
  'dark:focus:bg-metal-700',
]);
