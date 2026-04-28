import { cva } from 'class-variance-authority';

export const wrapperSiderbarVariants = cva(
  [
    'duration-200',
    'ease-linear',
    'flex',
    'flex-col',
    'shrink-0',
    'group/sidebar',
    'h-full',
    'px-4',
    'relative',
    'transition-all',
    'bg-kubefirst-dark-blue-900',
  ],
  {
    variants: {
      mode: {
        expanded: ['w-64'],
        collapsed: ['w-18'],
      },
    },
    defaultVariants: {
      mode: 'expanded',
    },
  },
);

export const dragVariants = cva([
  'absolute',
  'top-0',
  'right-0',
  'h-full',
  'opacity-0',
  'group-hover/sidebar:opacity-100',
  'cursor-col-resize',
  'w-0.5',
  'shadow',
  'shadow-slate-200',
  'bg-slate-200',
]);
