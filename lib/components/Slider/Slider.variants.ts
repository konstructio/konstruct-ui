import { cva } from 'class-variance-authority';

export const sliderVariants = cva(
  ['relative', 'flex', 'items-center', 'w-full'],
  {
    variants: {
      theme: {
        kubefirst: '',
        colony: '',
        civo: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);

export const trackVariants = cva(['relative', 'flex-grow', 'rounded-full'], {
  variants: {
    theme: {
      kubefirst: ['bg-kubefirst-secondary'],
      colony: ['bg-red-500'],
      civo: '',
    },
    size: {
      sm: ['h-1'],
      md: ['h-2'],
      lg: ['h-3'],
    },
  },
  defaultVariants: {
    theme: 'kubefirst',
    size: 'md',
  },
});

export const thumbVariants = cva(
  [
    'block',
    'w-5',
    'h-5',
    'rounded-full',
    'cursor-pointer',
    'focus-visible:outline-none',
    'shadow-md',
    'bg-white',
    'border',
    'border-gray-300',
  ],
  {
    variants: {
      theme: {
        kubefirst: '',
        colony: '',
        civo: '',
      },
      size: {
        sm: ['w-5', 'h-5'],
        md: ['w-6', 'h-6'],
        lg: ['w-7', 'h-7'],
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
      size: 'md',
    },
  },
);
