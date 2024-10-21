import { cva } from 'class-variance-authority';

export const listVariants = cva(['max-h-[250px]', 'overflow-y-auto'], {
  variants: {
    variant: {
      default: 'bg-white',
    },
    theme: {
      kubefirst: '',
      konstruct: '',
      colony: '',
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
        konstruct: '',
        colony: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      theme: 'kubefirst',
    },
  },
);

export const listItemVariants = cva(['focus-visible:outline-none'], {
  variants: {
    variant: {
      default: '',
    },
    theme: {
      kubefirst: '',
      konstruct: '',
      colony: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    theme: 'kubefirst',
  },
  compoundVariants: [
    {
      theme: 'konstruct',
      class: ['focus:bg-orange-100', 'hover:bg-orange-100'],
    },
    {
      theme: 'kubefirst',
      class: ['focus:bg-purple-100', 'hover:bg-purple-100'],
    },
    {
      theme: 'colony',
      class: ['focus:bg-red-100', 'hover:bg-red-100'],
    },
  ],
});

export const buttonVariants = cva(
  [
    'cursor-pointer',
    'focus-visible:outline-none',
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
        kubefirst: '',
        konstruct: '',
        colony: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      theme: 'kubefirst',
    },
    compoundVariants: [
      {
        theme: 'konstruct',
        class: ['focus:bg-orange-100', 'hover:bg-orange-100'],
      },
      {
        theme: 'kubefirst',
        class: ['focus:bg-purple-100', 'hover:bg-purple-100'],
      },
      {
        theme: 'colony',
        class: ['focus:bg-red-100', 'hover:bg-red-100'],
      },
    ],
  },
);
