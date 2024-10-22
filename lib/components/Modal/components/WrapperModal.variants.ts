import { cva } from 'class-variance-authority';

export const modalWrapperVariants = cva(
  [
    'relative',
    'overflow-auto',
    'border-none',
    'bg-metal-1000',
    'lg:overflow-hidden',
  ],
  {
    variants: {
      theme: {
        colony: '',
        konstruct: '',
        kubefirst: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);
