import { cn } from '@/utils';

export const additionalOptionSlotClassName = cn(
  'flex',
  'min-h-10',
  'py-2',
  'px-6',
  'w-full',
  'h-full',
  'gap-1',
  'items-center',
  'text-sm',
  '[&>svg]:-ml-1',
  '[&>svg]:w-3.5',
  '[&>svg]:h-3.5',
  '[&>svg]:shrink-0',
  'cursor-pointer',
  'select-none',
  'hover:bg-gray-50',
  'hover:dark:bg-metal-700',
  'focus:outline-0',
  'text-blue-600',
  'dark:text-aurora-500',
);
