import { cva } from 'class-variance-authority';

export const wrapperRadioVariants = cva(
  ['inline-flex', 'items-center', 'cursor-pointer', 'gap-2', 'w-max'],
  {
    variants: {
      disabled: {
        true: ['cursor-not-allowed'],
        false: ['cursor-pointer'],
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

export const radioVariants = cva(
  [
    'border',
    'border-zinc-400',
    'duration-300',
    'inline-block',
    'rounded-full',
    'transition-all',
    'flex',
    'flex-col',
    'items-center',
    'justify-center',
    "before:content-['']",
    'before:rounded-full',
    'before:w-0',
    'before:h-0',
    'before:duration-100',
    'before:transition-all',
    'h-4',
    'w-4',
    'peer-checked:before:h-[70%]',
    'peer-checked:before:w-[70%]',
  ],
  {
    variants: {
      theme: {
        colony: '',
        kubefirst: '',
        civo: '',
      },
      disabled: {
        true: '',
        false: '',
      },
      checked: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        theme: 'kubefirst',
        disabled: false,
        checked: [true, false],
        class: [
          'peer-checked:border-kubefirst-primary',
          'peer-checked:before:bg-kubefirst-primary',
        ],
      },
      {
        theme: 'kubefirst',
        disabled: true,
        checked: true,
        class: [
          'peer-checked:border-zinc-400',
          'peer-checked:before:bg-zinc-400',
          'cursor-not-allowed',
          '[&+span]:cursor-not-allowed',
        ],
      },
      {
        theme: 'kubefirst',
        disabled: true,
        checked: false,
        class: [
          'peer-checked:border-zinc-300',
          'peer-checked:border-zinc-300',
          'peer-checked:before:bg-zinc-300',
          'cursor-not-allowed',
          '[&+span]:cursor-not-allowed',
          'bg-zinc-50',
        ],
      },
    ],
    defaultVariants: {
      theme: 'kubefirst',
      disabled: false,
    },
  },
);

export const labelRadioVariants = cva(['text-sm', 'text-zinc-700']);
