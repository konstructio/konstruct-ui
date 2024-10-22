import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    'border-2',
    'disabled:pointer-events-none',
    'focus-visible:outline-none',
    'focus-visible:ring-1',
    'focus-visible:ring-ring',
    'gap-1',
    'inline-flex',
    'items-center',
    'justify-center',
    'rounded-md',
    'text-base',
    'transition-colors',
    'whitespace-nowrap',
    'cursor-pointer',
    'font-semibold',
  ],
  {
    variants: {
      variant: {
        primary: ['text-white', 'border-current'],
        secondary: ['bg-white'],
        danger: [
          'border-current',
          'bg-red-600',
          'text-white',
          'hover:bg-red-700',
        ],
        text: ['bg-transparent', 'border-transparent', 'text-slate-500'],
      },
      theme: {
        colony: '',
        konstruct: '',
        kubefirst: '',
      },
      size: {
        default: 'px-5 py-2',
      },
      disabled: {
        true: ['text-zinc-500', 'border-zinc-200', 'bg-zinc-200'],
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        theme: 'kubefirst',
        disabled: false,
        class: ['bg-kubefirst-purple-light', 'hover:bg-kubefirst-purple-dark'],
      },
      {
        variant: 'primary',
        theme: 'colony',
        disabled: false,
        class: ['bg-red-700', 'hover:bg-red-900'],
      },
      {
        variant: 'primary',
        theme: 'konstruct',
        disabled: false,
        class: ['bg-orange-500', 'hover:bg-orange-700'],
      },
      {
        variant: 'secondary',
        disabled: false,
        class: [
          'text-kubefirst-purple-light',
          'border-kubefirst-purple-light',
          'hover:text-kubefirst-purple-dark',
          'hover:border-kubefirst-purple-dark',
          'hover:bg-purple-50',
        ],
      },
      {
        variant: 'secondary',
        disabled: true,
        class: ['border-zinc-500'],
      },
      {
        variant: 'text',
        disabled: false,
        class: ['hover:text-kubefirst-purple-dark', 'hover:bg-purple-50'],
      },
      {
        variant: 'text',
        disabled: true,
        class: ['bg-transparent', 'border-transparent', 'text-zinc-400'],
      },
    ],
    defaultVariants: {
      variant: 'primary',
      theme: 'kubefirst',
      size: 'default',
      disabled: false,
    },
  },
);
