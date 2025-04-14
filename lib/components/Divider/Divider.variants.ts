import { cva } from 'class-variance-authority';

export const dividerVariants = cva(
  ['h-[1px]', 'bg-zinc-200', 'w-full', 'border-gray-200'],
  {
    variants: {
      variant: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
