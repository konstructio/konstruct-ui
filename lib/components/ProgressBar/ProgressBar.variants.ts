import { cva } from 'class-variance-authority';

export const progressBarVariants = cva([
  'h-2',
  'rounded-full',
  'overflow-hidden',
  'mt-4',
  'bg-zinc-200',
]);

export const progressBarProgress = cva(
  ['h-full', 'bg-[length:100%_100%]', 'animate-gradient-move'],
  {
    variants: {
      status: {
        success: '',
        progress: '',
        error: '',
      },
    },
    compoundVariants: [
      {
        status: 'progress',
        class: ['bg-linear-to-r from-[#81e2b4] to-kubefirst-primary'],
      },
      {
        status: 'success',
        class: ['bg-[#81E2B4]'],
      },
    ],
    defaultVariants: {
      status: 'success',
    },
  },
);
