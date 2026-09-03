import { cva } from 'class-variance-authority';

export const radioCardVariants = cva(
  ['flex', 'items-center', 'p-0', 'border'],
  {
    variants: {
      hasContent: {
        true: ['flex-col', 'items-stretch'],
        false: [],
      },
    },
    defaultVariants: {
      hasContent: false,
    },
  },
);
