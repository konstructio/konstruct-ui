import { cva } from 'class-variance-authority';

export const wrapperVariants = cva(
  [
    'absolute',
    'bg-white',
    'border',
    'duration-100',
    'ease-in-out',
    'flex',
    'flex-col',
    'mt-1',
    'rounded-md',
    'shadow-sm',
    'top-full',
    'transition-all',
    'w-full',
    'z-10',
  ],
  {
    variants: {
      theme: {
        colony: [
          /*'border-red-400'*/
        ],
        kubefirst: [
          /*'border-kubefirst-primary'*/
        ],
        civo: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);
