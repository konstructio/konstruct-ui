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
    'py-2.5',
    'cursor-pointer',
    'hover:rounded-xl',
    'font-normal',
    'text-black',
  ],
  {
    variants: {
      theme: {
        colony: '',
        kubefirst: [
          'text-[#9ea2c6]',
          'hover:text-white',
          'hover:bg-[#252a41]',
          'selection:bg-powder-500',
          'selection:text-white',
        ],
        civo: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);
