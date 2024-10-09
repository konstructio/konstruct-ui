import { cva } from 'class-variance-authority';

export const radioVariants = cva(
  [
    'border-2',
    'border-gray-400',
    'duration-300',
    'h-4',
    'inline-block',
    'rounded-full',
    'transition-all',
    'w-4',
    'flex',
    'flex-col',
    'items-center',
    'justify-center',
    "before:content-['']",
    'before:rounded-full',
    'before:w-0',
    'before:h-0',
    'before:duration-100',
    'beofr:transition-all',
    'peer-checked:before:h-[70%]',
    'peer-checked:before:w-[70%]',
  ],
  {
    variants: {
      theme: {
        colony: [
          'peer-checked:border-red-700',
          'peer-checked:before:bg-red-700',
        ],
        kubefirst: [
          'peer-checked:border-kubefirst-purple-light',
          'peer-checked:before:bg-kubefirst-purple-light',
        ],
        konstruct: [
          'peer-checked:border-orange-600',
          'peer-checked:before:bg-orange-600',
        ],
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);
