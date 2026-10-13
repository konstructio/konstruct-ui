import { cva } from 'class-variance-authority';

export const skeletonVariants = cva(
  ['block', 'animate-pulse', 'bg-gray-200', 'dark:bg-metal-700'],
  {
    variants: {
      shape: {
        rect: ['h-5', 'w-full', 'rounded'],
        text: ['h-3.5', 'w-full', 'rounded'],
        circle: ['size-10', 'rounded-full'],
      },
    },
    defaultVariants: {
      shape: 'rect',
    },
  },
);
