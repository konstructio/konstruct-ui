import { cva } from 'class-variance-authority';

export const dividerVariants = cva(['h-[1px]', 'bg-zinc-200', 'w-full'], {
  variants: {
    variant: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
