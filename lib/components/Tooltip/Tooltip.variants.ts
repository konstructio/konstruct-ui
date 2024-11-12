import { cva } from 'class-variance-authority';

export const tooltipVariants = cva(
  [
    'absolute',
    'w-max',
    'p-2.5',
    'rounded-lg',
    'shadow-md',
    'transition-all',
    'ease-linear',
    'opacity-0',
    'duration-250',
    'aria-expanded:opacity-100',
    'delay-100',
  ],
  {
    variants: {
      theme: {
        kubefirst: 'bg-kubefirst-purple-light',
        konstruct: 'bg-orange-500',
        colony: 'bg-red-700',
      },
      position: {
        top: ['-top-[110%]', 'left-[50%]', '-translate-x-1/2'],
        bottom: ['-bottom-[110%]', 'right-[50%]', 'translate-x-1/2'],
        right: ['top-1/2', 'ml-1', 'left-[100%]', '-translate-y-2/4'],
        left: ['top-1/2', 'mr-1', 'right-[100%]', '-translate-y-2/4'],
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
      position: 'right',
    },
  },
);

export const arrowVariants = cva(['absolute', 'w-0', 'h-0'], {
  variants: {
    theme: {
      kubefirst: 'border-kubefirst-purple-light',
      konstruct: 'border-orange-500',
      colony: 'border-red-700',
    },
    position: {
      top: [
        'top-full',
        'right-1/2',
        'translate-x-2/4',
        'border-l-4',
        'border-l-transparent',
        'border-r-4',
        'border-r-transparent',
        'border-t-4',
      ],
      bottom: [
        'bottom-full',
        'right-1/2',
        'translate-x-2/4',
        'border-l-4',
        'border-l-transparent',
        'border-r-4',
        'border-r-transparent',
        'border-b-4',
      ],
      right: [
        'right-full',
        'top-1/2',
        '-translate-y-2/4',
        'border-t-4',
        'border-t-transparent',
        'border-b-4',
        'border-b-transparent',
        'border-r-4',
      ],
      left: [
        'left-full',
        'top-1/2',
        '-translate-y-2/4',
        'border-t-4',
        'border-t-transparent',
        'border-b-4',
        'border-b-transparent',
        'border-l-4',
      ],
    },
  },
  defaultVariants: {
    theme: 'kubefirst',
    position: 'right',
  },
});
