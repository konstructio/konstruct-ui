import { cva } from 'class-variance-authority';

export const itemVariants = cva(
  [
    'cursor-pointer',
    'py-1.5',
    'px-2',
    'last:pb-2',
    'first:pt-2',
    'h-full',
    'flex',
    'items-center',
    'gap-2',
    'hover:bg-gray-50',
    'focus:bg-gray-50',
    'dark:hover:bg-metal-700',
    'dark:focus:bg-metal-700',
  ],
  {
    variants: {
      isSelected: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        isSelected: true,
        class: ['bg-slate-50', 'dark:bg-metal-700'],
      },
    ],
    defaultVariants: {
      isSelected: false,
    },
  },
);
