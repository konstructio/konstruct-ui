import { cva } from 'class-variance-authority';

export const progressBarVariants = cva(
  ['h-2', 'rounded-full', 'overflow-hidden', 'mt-4', 'bg-zinc-200'],
  {
    variants: {
      theme: {
        kubefirst: '',
        colony: '',
        civo: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);

export const progressBarProgress = cva(
  ['h-full', 'bg-[length:100%_100%]', 'animate-gradient-move'],
  {
    variants: {
      theme: {
        kubefirst: '',
        colony: '',
        civo: '',
      },
      status: {
        success: '',
        progress: '',
        error: '',
      },
    },
    compoundVariants: [
      {
        status: 'progress',
        theme: 'kubefirst',
        class: ['bg-kubefirst-gradient'],
      },
      {
        status: 'success',
        theme: 'kubefirst',
        class: ['bg-[#81E2B4]'],
      },
      {
        status: 'progress',
        theme: 'colony',
        class: ['bg-kubefirst-gradient'],
      },
    ],
    defaultVariants: {
      theme: 'kubefirst',
      status: 'success',
    },
  },
);
