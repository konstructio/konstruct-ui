import { cva } from 'class-variance-authority';

export const drawerVariants = cva(
  [
    'bg-white',
    'dark:bg-metal-900',
    'duration-300',
    'ease-in-out',
    'fixed',
    'flex',
    'flex-col',
    'group/drawer',
    'inset-y-0',
    'shadow-xl',
    'transform',
    'transition-transform',
    'z-50',
  ],
  {
    variants: {
      position: {
        left: [
          'left-0',
          'border-r',
          'border-slate-200',
          'dark:border-metal-700',
        ],
        right: [
          'right-0',
          'border-l',
          'border-slate-200',
          'dark:border-metal-700',
        ],
      },
    },
    defaultVariants: {
      position: 'right',
    },
  },
);

export const overlayVariants = cva([
  'fixed',
  'inset-0',
  'z-40',
  'bg-black',
  'transition-opacity',
  'duration-300',
]);

export const buttonCloseVariants = cva([
  'absolute',
  'right-3',
  'top-3',
  'cursor-pointer',
  'text-slate-500',
  'hover:text-slate-700',
  'dark:text-metal-400',
  'dark:hover:text-metal-300',
  'transition-colors',
  'z-10',
]);

export const resizeHandleVariants = cva(
  [
    'absolute',
    'bg-slate-200',
    'dark:bg-metal-700',
    'border-none',
    'cursor-col-resize',
    'h-full',
    'opacity-0',
    'p-0',
    'top-0',
    'transition-opacity',
    'w-1',
    'z-50',
    'group-hover/drawer:opacity-100',
    'hover:opacity-100!',
    'focus:outline-none',
  ],
  {
    variants: {
      position: {
        left: ['right-0'],
        right: ['left-0'],
      },
    },
    defaultVariants: {
      position: 'right',
    },
  },
);
