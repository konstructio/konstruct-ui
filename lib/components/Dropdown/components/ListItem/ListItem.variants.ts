import { cva } from 'class-variance-authority';

export const listItemVariants = cva(
  ['cursor-pointer', 'py-1', 'px-2', 'h-full', 'focus-visible:outline-none'],
  {
    variants: {
      theme: {
        kubefirst: ['focus:bg-purple-100', 'hover:bg-purple-100'],
        colony: ['focus:bg-red-100', 'hover:bg-red-100'],
        civo: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);
