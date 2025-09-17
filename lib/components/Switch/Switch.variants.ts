import { cva } from 'class-variance-authority';

export const switchVariants = cva([
  'w-[40px]',
  'h-[20px]',
  'flex',
  'items-center',
  'rounded-full',
  'shadow',
  'focus:shadow-md',
  'data-[state=unchecked]:bg-gray-300',
  'dark:data-[state=unchecked]:bg-gray-600',
  'transition-all',
  'delay-10',
  'duration-250',
  'cursor-pointer',
  'bg-aurora-500',
  'kubefirst:bg-kubefirst-primary',
]);

export const thumbVariants = cva([
  'block',
  'w-[16px]',
  'h-[16px]',
  'bg-white',
  'dark:bg-gray-400',
  'dark:data-[state=checked]:bg-white',
  'rounded-full',
  'shadow-md',
  'transition-all',
  'translate-x-1',
  'data-[state=checked]:translate-x-5',
  'delay-10',
  'duration-300',
]);
