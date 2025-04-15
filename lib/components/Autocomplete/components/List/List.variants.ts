import { cva } from 'class-variance-authority';

export const listVariants = cva(['max-h-[250px]', 'overflow-y-auto'], {
  variants: {
    variant: {
      default: 'bg-white',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const emptyListVariants = cva(
  ['p-1', 'text-center', 'w-full', 'block', 'bg-white'],
  {
    variants: {
      variant: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export const listItemVariants = cva(
  [
    'focus-visible:outline-none',
    'focus:bg-purple-100',
    'hover:bg-purple-100',
    'border-transparent',
    'colony:focus:bg-red-100',
    'colony:hover:bg-red-100',
    'civo:focus:bg-blue-100',
    'civo:hover:bg-blue-100',
  ],
  {
    variants: {
      variant: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export const buttonVariants = cva(
  [
    'cursor-pointer',
    'focus-visible:outline-none',
    'px-3',
    'py-1.5',
    'w-full',
    'text-left',
    'focus:bg-purple-100',
    'hover:bg-purple-100',
    'colony:focus:bg-red-100',
    'colony:hover:bg-red-100',
    'civo:focus:bg-blue-100',
    'civo:hover:bg-blue-100',
  ],
  {
    variants: {
      variant: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
