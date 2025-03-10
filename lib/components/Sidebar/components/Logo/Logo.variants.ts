import { cva } from 'class-variance-authority';

export const logoVariants = cva(
  [
    'md:px-4',
    'md:py-5',
    'flex',
    'flex-col',
    'items-center',
    'items-center',
    'justify-center',
    'gap-1',
    'group',
    'relative',
    'mb-8',
    '[&>p]:pl-14',
    '[&>p]:-mt-2',
    '[&>img]:pt-3',
    '[&>*>p]:absolute',
    '[&>*>p]:bottom-0',
    '[&>*>p]:-mt-2',
    '[&>*>img]:pt-3',
    'cursor-pointer',
  ],
  {
    variants: {
      theme: {
        colony: '',
        kubefirst: '',
        civo: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);
