import { cva } from 'class-variance-authority';

export const wrapperVariants = cva(
  ['flex', 'flex-col', 'w-full', 'relative', 'text-zinc-500'],
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

export const labelVariants = cva(['my-2', 'cursor-pointer'], {
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
});

export const tagSelectVariants = cva(
  [
    'border',
    'cursor-pointer',
    'duration-250',
    'ease-in-out',
    'flex',
    'items-center',
    'justify-between',
    'px-2',
    'py-1',
    'rounded',
    'transition-all',
    'w-full',
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
