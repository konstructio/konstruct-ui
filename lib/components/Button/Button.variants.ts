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
    'transition-colors',
    'whitespace-nowrap',
  ],
  {
    variants: {
      variant: {
        primary: ['text-white'],
        secondary: ['bg-white'],
        danger: [
          'border-red-600',
          'bg-red-600',
          'text-white',
          'hover:bg-red-700',
          'hover:border-red-700',
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
        class: [
          'border-kubefirst-primary',
          'bg-kubefirst-primary',
          'hover:bg-kubefirst-secondary',
          'hover:border-kubefirst-secondary',
        ],
      },
      {
        variant: 'primary',
        theme: 'colony',
        disabled: false,
        class: [
          'bg-colony-primary',
          'border-colony-primary',
          'hover:bg-colony-secondary',
          'hover:border-colony-secondary',
        ],
      },
      {
        variant: 'primary',
        theme: 'civo',
        disabled: false,
        class: [
          'bg-civo-primary',
          'border-civo-primary',
          'hover:bg-civo-secondary',
          'hover:border-civo-secondary',
        ],
      },
      {
        variant: 'primary',
        theme: 'konstruct',
        disabled: false,
        class: [
          'bg-orange-600',
          'border-orange-600',
          'hover:bg-orange-500',
          'hover:border-orange-500',
        ],
      },
      {
        variant: 'secondary',
        theme: 'kubefirst',
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
        theme: 'colony',
        disabled: false,
        class: [
          'text-colony-primary',
          'border-colony-primary',
          'hover:text-colony-secondary',
          'hover:border-colony-secondary',
          'hover:bg-pink-50',
        ],
      },
      {
        variant: 'secondary',
        theme: 'civo',
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
        theme: 'konstruct',
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
        variant: 'primary',
        disabled: true,
        class: ['bg-zinc-200', 'border-zinc-200', 'text-zinc-500'],
      },
      {
        variant: 'secondary',
        disabled: true,
        class: ['bg-white', 'border-zinc-500', 'text-zinc-500'],
      },
      {
        variant: 'text',
        theme: 'kubefirst',
        disabled: false,
        class: ['hover:text-kubefirst-primary', 'hover:bg-purple-50'],
      },
      {
        variant: 'text',
        theme: 'colony',
        disabled: false,
        class: ['hover:text-colony-primary', 'hover:bg-pink-50'],
      },
      {
        variant: 'text',
        theme: 'civo',
        disabled: false,
        class: ['hover:text-civo-primary', 'hover:bg-blue-50'],
      },
      {
        variant: 'text',
        theme: 'konstruct',
        disabled: false,
        class: ['hover:text-orange-700', 'hover:bg-orange-50'],
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
