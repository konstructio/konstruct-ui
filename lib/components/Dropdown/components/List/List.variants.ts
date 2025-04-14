import { cva } from 'class-variance-authority';

export const listVariants = cva(
  [
    'absolute',
    'bg-white',
    'border',
    'duration-100',
    'ease-in-out',
    'flex-col',
    'mt-1',
    'overflow-hidden',
    'rounded-md',
    'shadow-sm',
    'top-full',
    'transition-all',
    'w-full',
    'z-10',
    'max-h-[185px]',
    'overflow-y-auto',
    'border-gray-200',
  ],
  {
    variants: {
      theme: {
        colony: ['border-red-400'],
        kubefirst: ['text-zinc-700'],
        civo: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);
