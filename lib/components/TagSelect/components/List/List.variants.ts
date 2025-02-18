import { cva } from 'class-variance-authority';

export const wrapperVariants = cva(
  [
    'absolute',
    'bg-white',
    'border',
    'duration-100',
    'flex',
    'flex-col',
    'mt-0.5',
    'rounded',
    'shadow-sm',
    'top-full',
    'transition-all',
    'w-full',
    'z-10',
    'animate-in',
    'fade-in-60',
    'zoom-in-95',
    'overflow-hidden',
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
