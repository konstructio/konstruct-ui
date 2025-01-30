import { cva } from 'class-variance-authority';

export const listVariants = cva(['max-h-[250px]', 'overflow-y-auto'], {
  variants: {
    variant: {
      default: 'bg-white',
    },
    theme: {
      kubefirst: '',
      colony: '',
      civo: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    theme: 'kubefirst',
  },
});

export const emptyListVariants = cva(
  ['p-1', 'text-center', 'w-full block', 'bg-white'],
  {
    variants: {
      variant: {
        default: '',
      },
      theme: {
        kubefirst: '',
        colony: '',
        civo: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      theme: 'kubefirst',
    },
  },
);

export const listItemVariants = cva(['focus-visible:outline-hidden'], {
  variants: {
    variant: {
      default: '',
    },
    theme: {
      kubefirst: ['focus:bg-purple-100', 'hover:bg-purple-100'],
      colony: ['focus:bg-red-100', 'hover:bg-red-100'],
      civo: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    theme: 'kubefirst',
  },
});

export const buttonVariants = cva(
  [
    'cursor-pointer',
    'focus-visible:outline-hidden',
    'px-3',
    'py-1.5',
    'w-full',
    'text-left',
  ],
  {
    variants: {
      variant: {
        default: '',
      },
      theme: {
        kubefirst: ['focus:bg-purple-100', 'hover:bg-purple-100'],
        colony: ['focus:bg-red-100', 'hover:bg-red-100'],
        civo: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      theme: 'kubefirst',
    },
  },
);
