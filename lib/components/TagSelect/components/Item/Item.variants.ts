import { cva } from 'class-variance-authority';

export const wrapperVariants = cva(
  ['cursor-pointer', 'py-1.5', 'px-2', 'last:pb-2', 'first:pt-2', 'h-full'],
  {
    variants: {
      theme: {
        colony: '',
        kubefirst: ['hover:bg-purple-100'],
        civo: '',
      },
      isSelected: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        theme: 'kubefirst',
        isSelected: true,
        class: ['bg-purple-100'],
      },
    ],
    defaultVariants: {
      theme: 'kubefirst',
      isSelected: false,
    },
  },
);
