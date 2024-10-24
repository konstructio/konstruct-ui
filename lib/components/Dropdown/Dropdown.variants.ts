import { cva } from 'class-variance-authority';

export const dropdownVariants = cva(
  [
    'border',
    'cursor-pointer',
    'duration-250',
    'ease-in-out',
    'flex',
    'items-center',
    'justify-between',
    'px-3',
    'py-1',
    'relative',
    'rounded-md',
    'transition-all',
    'w-full',
  ],
  {
    variants: {
      theme: {
        konstruct: '',
        kubefirst: '',
        colony: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);

export const dropdownListVariants = cva([], {
  variants: {
    theme: {
      konstruct: '',
      kubefirst: '',
      colony: '',
    },
  },
  defaultVariants: {
    theme: 'kubefirst',
  },
});
