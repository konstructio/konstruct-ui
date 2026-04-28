import { cva } from 'class-variance-authority';

export const hamburgerTriggerVariants = cva([
  'fixed',
  'top-4',
  'left-4',
  'z-30',
  'inline-flex',
  'items-center',
  'justify-center',
  'w-10',
  'h-10',
  'rounded-md',
  'bg-kubefirst-dark-blue-900',
  'text-white',
  'cursor-pointer',
  'focus:outline-none',
  'focus-visible:ring-2',
  'focus-visible:ring-white/40',
]);
