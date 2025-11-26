import { cva } from 'class-variance-authority';

export const dividerVariants = cva(['h-px', 'bg-zinc-200', 'w-full'], {
  variants: {
    variant: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
