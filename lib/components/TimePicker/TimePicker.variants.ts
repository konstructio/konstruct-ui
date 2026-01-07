import { cva } from 'class-variance-authority';

export const timePickerVariants = cva([
  'border',
  'rounded',
  'p-2.5',
  'w-full',
  'flex',
  'items-center',
  'justify-between',
  'border-gray-300',
  'dark:border-metal-700',
  'cursor-pointer',
  'transition-all',
  'transition-duration-100',
  'data-[open=true]:border-aurora-500',
  'text-sm',
  'text-slate-800',
  'dark:text-slate-50',
]);

export const ulVariants = cva([
  'snap-y',
  'snap-mandatory',
  'overflow-y-scroll',
  'scrollbar-none',
  'flex',
  'flex-col',
  'dark:text-metal-50',
]);

export const liVariants = cva([
  'w-15',
  'h-10',
  'snap-start',
  'rounded',
  'transition-all',
  'transition-duration-100',
  'focus-within:outline-2',
  'border-2',
  'border-transparent',
  'outline-none',
  'hover:bg-gray-100',
  'hover:border-2',
  'hover:border-white',
  'data-[active=true]:bg-blue-600',
  'data-[active=true]:hover:border-blue-200',
  'data-[active=true]:text-white',
  'data-[active=true]:font-medium',
  'focus-visible:border-blue-200',
  'focus-within:border-blue-200',
  'dark:focus-within:border-aurora-50',
  'dark:data-[active=true]:bg-aurora-500',
  'dark:data-[active=true]:text-metal-900',
]);

export const buttonVariants = cva([
  'flex',
  'items-center',
  'justify-center',
  'cursor-pointer',
  'w-full',
  'h-full',
  'px-6',
  'py-3',
  'outline-none',
  'focus:border-blue-200',
  'text-sm',
]);
