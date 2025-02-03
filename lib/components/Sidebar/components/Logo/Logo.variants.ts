import { cva } from 'class-variance-authority';

export const logoVariants = cva(
  [
    'px-4',
    'py-5',
    'flex',
    'flex-col',
    'items-center',
    'items-center',
    'justify-center',
    'gap-1',
    'group',
    'relative',
    'mb-8',
    '[&>span]:text-gray-100',
    '[&>span]:text-xs',
    '[&>span]:font-semibold',
    '[&>span]:pl-14',
    '[&>span]:-mt-2',
    '[&>img]:pt-3',
    '[&>*>span]:text-gray-100',
    '[&>*>span]:text-xs',
    '[&>*>span]:font-semibold',
    '[&>*>span]:absolute',
    '[&>*>span]:bottom-0',
    '[&>*>span]:-mt-2',
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
