import { cva } from 'class-variance-authority';

export const wrapperVariants = cva(
  [
    'cursor-pointer',
    'py-1.5',
    'px-2',
    'last:pb-2',
    'first:pt-2',
    'h-full',
    'hover:bg-gray-50',
    'focus:bg-gray-50',
    'dark:hover:bg-slate-700',
    'dark:focus:bg-slate-700',
    'flex',
    'items-center',
    'gap-4',
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
        class: ['bg-slate-50'],
      },
    ],
    defaultVariants: {
      isSelected: false,
    },
  },
);
