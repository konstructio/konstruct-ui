import { cva } from 'class-variance-authority';

export const switchVariants = cva(
  [
    'w-12',
    'h-7',
    'flex',
    'items-center',
    'rounded-full',
    'shadow',
    'focus:shadow-md',
    'data-[state=unchecked]:bg-zinc-200',
    'transition-all',
    'delay-10',
    'duration-250',
  ],
  {
    variants: {
      theme: {
        konstruct: 'bg-orange-600',
        kubefirst: 'bg-kubefirst-primary',
        colony: 'bg-red-600',
        civo: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);

export const thumbVariants = cva(
  [
    'block',
    'w-6',
    'h-6',
    'bg-white',
    'rounded-full',
    'shadow-md',
    'transition-all',
    'translate-x-1',
    'data-[state=checked]:translate-x-5',
    'delay-10',
    'duration-300',
  ],
  {
    variants: {
      theme: {
        konstruct: '',
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
