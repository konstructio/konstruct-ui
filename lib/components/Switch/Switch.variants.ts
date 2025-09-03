import { cva } from 'class-variance-authority';

export const switchVariants = cva([
  'w-[44px]',
  'h-[22px]',
  'flex',
  'items-center',
  'rounded-full',
  'shadow',
  'focus:shadow-md',
  'data-[state=unchecked]:bg-zinc-200',
  'transition-all',
  'delay-10',
  'duration-250',
  'cursor-pointer',
  'bg-kubefirst-primary',
]);

export const thumbVariants = cva([
  'block',
  'w-[18px]',
  'h-[18px]',
  'bg-white',
  'rounded-full',
  'shadow-md',
  'transition-all',
  'translate-x-1',
  'data-[state=checked]:translate-x-5.5',
  'delay-10',
  'duration-300',
]);
