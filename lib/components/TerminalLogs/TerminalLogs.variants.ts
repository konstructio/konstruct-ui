import { cva } from 'class-variance-authority';

export const terminalLogsVariantas = cva([], {
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
});
