import { cva } from 'class-variance-authority';

export const wrapperTerminalLogsVariants = cva(
  [
    'flex',
    'flex-col',
    'bg-[#1e293b]',
    'rounded',
    'gap-2',
    'p-3',
    'relative',
    'min-h-[550px]',
    'min-w-[550px]',
    'overflow-hidden',
  ],
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
