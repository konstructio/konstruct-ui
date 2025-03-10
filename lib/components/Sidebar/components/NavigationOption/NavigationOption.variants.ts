import { cva } from 'class-variance-authority';

export const navigationOptionVariants = cva(
  [
    '[&>a]:flex',
    '[&>a]:gap-2',
    '[&>a]:no-underline',
    '[&>a]:text-inherit',
    '[&>a]:w-full',
    'cursor-pointer',
    'flex',
    'font-normal',
    'font-normal',
    'gap-2',
    'rounded-xl',
    'md:px-4',
    'md:py-2.5',
    'p-2',
    'text-black',
    'w-full',
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
      isActive: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        theme: 'kubefirst',
        isActive: true,
        class: ['text-white', 'bg-[#252a41]'],
      },
    ],
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);
