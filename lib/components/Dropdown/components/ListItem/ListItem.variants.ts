import { cva } from 'class-variance-authority';

export const listItemVariants = cva(
  [
    'cursor-pointer',
    'py-2',
    'px-2',
    'h-full',
    'focus-visible:outline-none',
    'm-0',
    'w-full',
    'flex',
    'items-center',
    'gap-3',
    'hover:bg-slate-50',
    'focus:bg-slate-50',
  ],
  {
    variants: {
      theme: {
        kubefirst: [''],
        colony: ['focus:bg-red-100', 'hover:bg-red-100'],
        civo: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);
