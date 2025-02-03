import { cva } from 'class-variance-authority';

export const navigationOptionVariants = cva(
  [
    'font-normal',
    'flex',
    'gap-2',
    'w-full',
    '[&>a]:w-full',
    '[&>a]:flex',
    '[&>a]:gap-2',
    'px-4',
    'py-3',
    'cursor-pointer',
    'hover:rounded-xl',
    'hover:bg-[#252a41]',
    'font-normal',
  ],
  {
    variants: {
      theme: {
        colony: '',
        kubefirst: ['text-[#9ea2c6]', 'hover:text-white'],
        civo: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);
