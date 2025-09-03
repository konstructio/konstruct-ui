import { cva } from 'class-variance-authority';

export const loadingVariants = cva([
  'h-8',
  'w-8',
  'animate-spin',
  'text-inherit',
  'text-kubefirst-primary',
  'civo:text-civo-primary',
]);
