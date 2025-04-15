import { cva } from 'class-variance-authority';

export const wrapperVariants = cva(
  [
    'cursor-pointer',
    'py-1.5',
    'px-2',
    'last:pb-2',
    'first:pt-2',
    'h-full',
    'hover:bg-purple-100',
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
        class: ['bg-purple-100'],
      },
    ],
    defaultVariants: {
      isSelected: false,
    },
  },
);
