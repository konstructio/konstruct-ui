import { cva } from 'class-variance-authority';

export const wrapperVariants = cva(
  ['cursor-pointer', 'py-1', 'px-2', 'last:mb-2', 'first:mt-2', 'h-full'],
  {
    variants: {
      theme: {
        colony: 'hover:bg-red-100',
        kubefirst: 'hover:bg-purple-100',
        civo: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);
