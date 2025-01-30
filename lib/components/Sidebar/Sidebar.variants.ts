import { cva } from 'class-variance-authority';

export const wrapperSiderbarVariants = cva(
  ['flex', 'flex-col', 'px-4', 'w-[300px]', 'h-full'],
  {
    variants: {
      theme: {
        colony: '',
        kubefirst: ['bg-kubefirst-dark-blue-900'],
        civo: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);
