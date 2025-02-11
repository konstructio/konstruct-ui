import { cva } from 'class-variance-authority';

export const conciseTabTerminalVariants = cva(
  ['text-white', 'flex-1', 'h-full', 'w-full'],
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

export const verboseTabTerminalVariants = cva(
  [
    'w-full',
    'h-full',
    'rounded',
    'overflow-hidden',
    '[&>div.xterm]:w-full',
    '[&>div.xterm]:h-full',
    '[&>div.xterm>div.xterm-screen]:px-4',
    '[&>div.xterm>div.xterm-screen]:py-2',
    '[&>div.xterm>div.xterm-viewport]:h-full',
    '[&>div.xterm>div.xterm-viewport]:w-full',
    '[&>div.xterm>div.xterm-screen]:w-full',
    '[&>div.xterm>div.xterm-screen]:h-full',
    '[&>div.xterm>div.xterm-viewport::-webkit-scrollbar]:w-[5px]',
    '[&>div.xterm>div.xterm-viewport::-webkit-scrollbar-track]:bg-slate-700/80',
    '[&>div.xterm>div.xterm-viewport::-webkit-scrollbar-thumb]:bg-slate-500/90',
    '[&>div.xterm>div.xterm-viewport::-webkit-scrollbar-thumb]:rounded-full',
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
