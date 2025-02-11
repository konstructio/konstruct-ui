import { cva } from 'class-variance-authority';

export const wrapperTerminalLogsVariants = cva(
  [
    'flex',
    'flex-col',
    'bg-[#1e293b]',
    'rounded',
    'gap-2',
    'p-4',
    'h-full',
    'w-full',
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
