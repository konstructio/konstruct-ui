import { cva } from 'class-variance-authority';

export const wrapperSiderbarVariants = cva(
  [
    'duration-200',
    'ease-linear',
    'flex',
    'flex-col',
    'flex-shrink-0',
    'group/sidebar',
    'h-full',
    'px-4',
    'relative',
    'transition-all',
    'w-[72px]',
    'md:w-[256px]',
  ],
  {
    variants: {
      theme: {
        colony: '',
        kubefirst: ['bg-kubefirst-dark-blue-900'],
        civo: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);

export const dragVariants = cva(
  [
    'absolute',
    'top-0',
    'right-0',
    'h-full',
    'opacity-0',
    'group-hover/sidebar:opacity-100',
    'cursor-col-resize',
    'w-[2px]',
    'shadow',
    'shadow-slate-200',
  ],
  {
    variants: {
      theme: {
        colony: '',
        kubefirst: ['bg-slate-200'],
        civo: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);
