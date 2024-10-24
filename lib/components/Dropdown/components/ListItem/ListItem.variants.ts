import { cva } from 'class-variance-authority';

export const listItemVariants = cva(
  ['cursor-pointer', 'py-1', 'px-2', 'h-full'],
  {
    variants: {
      theme: {
        colony: 'hover:bg-red-100',
        konstruct: 'hover:bg-orange-100',
        kubefirst: 'hover:bg-purple-100',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);
