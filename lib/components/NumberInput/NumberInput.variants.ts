import { cva } from 'class-variance-authority';

export const numberInputVariants = cva([
  '[&::-webkit-inner-spin-button]:appearance-none',
  '[&::-webkit-outer-spin-button]:appearance-none',
  '[-moz-appearance:textfield]',
  'appearance-none',
  'border',
  'border-x-0',
  'focus-visible:outline-none',
  'focus-visible:ring-transparent',
  'h-9',
  'max-w-16',
  'text-right',
  'px-3',
  'border-gray-200',
]);

export const buttonVariants = cva(
  [
    'h-9',
    'w-9',
    'flex',
    'items-center',
    'justify-center',
    'border',
    'text-slate-400',
    'border-gray-200',
    'cursor-pointer',
  ],
  {
    variants: {
      button: {
        left: ['rounded-e'],
        rigth: ['rounded-s'],
      },
    },
  },
);

export const labelVariants = cva(['cursor-pointer'], {
  variants: {
    variant: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
