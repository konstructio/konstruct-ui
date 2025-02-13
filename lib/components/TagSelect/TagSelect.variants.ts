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

export const labelVariants = cva(['m-2', 'cursor-pointer'], {
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
    'px-3',
    'py-1',
    'rounded-md',
    'transition-all',
    'w-full',
  ],
  {
    variants: {
      theme: {
        colony: [
          /*'aria-expanded:border-red-400', 'aria-expanded:text-red-400'*/
        ],
        kubefirst: [
          // 'aria-expanded:border-kubefirst-primary',
          // 'aria-expanded:text-kubefirst-secondary',
        ],
        civo: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);
