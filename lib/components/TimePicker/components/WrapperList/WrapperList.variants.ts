import { cva } from 'class-variance-authority';

export const wrapperVariants = cva([
  'flex',
  'gap-1.5',
  'p-2',
  'rounded-md',
  'shadow',
  'w-full',
  'max-h-[216px]',
  'absolute mt-1',
  'bg-white',
  'z-10',
]);
