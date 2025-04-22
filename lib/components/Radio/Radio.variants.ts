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
    'border-gray-300',
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
          'peer-checked:border-kubefirst-primary',
          'peer-checked:before:bg-kubefirst-primary',
          'civo:peer-checked:border-civo-primary',
          'civo:peer-checked:before:bg-civo-primary',
        ],
      },
      {
        disabled: true,
        checked: true,
        class: [
          'peer-checked:border-gray-300',
          'peer-checked:before:bg-gray-300',
          'cursor-not-allowed',
          '[&+span]:cursor-not-allowed',
        ],
      },
      {
        disabled: true,
        checked: false,
        class: [
          'peer-checked:border-gray-200',
          'peer-checked:border-gray-200',
          'peer-checked:before:bg-gray-200',
          'cursor-not-allowed',
          '[&+span]:cursor-not-allowed',
          'bg-gray-50',
        ],
      },
    ],
    defaultVariants: {
      disabled: false,
    },
  },
);

export const labelRadioVariants = cva(['text-sm', 'text-zinc-700']);
