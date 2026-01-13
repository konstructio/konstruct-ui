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
    'dark:border-metal-600',
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
        disabled: false,
        checked: [true, false],
        class: [
          'kubefirst:peer-checked:border-kubefirst-primary',
          'kubefirst:peer-checked:before:bg-kubefirst-primary',
          'peer-checked:border-aurora-500',
          'peer-checked:before:bg-aurora-500',
        ],
      },
      {
        disabled: true,
        checked: true,
        class: [
          'peer-checked:border-zinc-300',
          'peer-checked:before:bg-zinc-300',
          'cursor-not-allowed',
          '[&+span]:cursor-not-allowed',
          'dark:peer-checked:before:bg-aurora-500/50',
          'dark:peer-checked:border-aurora-500/50',
        ],
      },
      {
        disabled: true,
        checked: false,
        class: [
          'peer-checked:border-zinc-300',
          'peer-checked:before:bg-zinc-50',
          'cursor-not-allowed',
          '[&+span]:cursor-not-allowed',
          'bg-gray-50',
          'dark:bg-metal-800',
          'dark:bg-metal-800',
        ],
      },
    ],
    defaultVariants: {
      disabled: false,
    },
  },
);

export const labelRadioVariants = cva(['text-sm', 'text-zinc-700']);
