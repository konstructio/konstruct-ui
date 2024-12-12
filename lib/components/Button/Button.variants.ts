import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    'border',
    'cursor-pointer',
    'disabled:pointer-events-none',
    'flex',
    'focus-visible:outline-none',
    'focus-visible:ring-1',
    'focus-visible:ring-ring',
    'font-semibold',
    'gap-2',
    'inline-flex',
    'items-center',
    'justify-center',
    'rounded',
    'text-base',
    'transition-colors',
    'whitespace-nowrap',
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
        civo: '',
        colony: '',
        konstruct: '',
        kubefirst: '',
      },
      size: {
        default: 'h-10 p-4 text-sm',
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
        class: ['bg-kubefirst-primary', 'hover:bg-kubefirst-secondary'],
      },
      {
        variant: 'primary',
        theme: 'colony',
        disabled: false,
        class: ['bg-colony-primary', 'hover:bg-colony-secondary'],
      },
      {
        variant: 'primary',
        theme: 'civo',
        disabled: false,
        class: ['bg-civo-primary', 'hover:bg-civo-secondary'],
      },
      {
        variant: 'primary',
        theme: 'konstruct',
        disabled: false,
        class: ['bg-orange-600', 'hover:bg-orange-500'],
      },
      {
        variant: 'secondary',
        disabled: false,
        class: [
          'text-kubefirst-primary',
          'border-kubefirst-primary',
          'hover:text-kubefirst-secondary',
          'hover:border-kubefirst-secondary',
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
        class: ['hover:text-kubefirst-secondary', 'hover:bg-purple-50'],
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
