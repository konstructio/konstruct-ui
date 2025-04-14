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
    'shadow-xs',
    'top-full',
    'transition-all',
    'w-full',
    'z-10',
    'animate-in',
    'fade-in-50',
    'overflow-hidden',
    'border-gray-200',
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
