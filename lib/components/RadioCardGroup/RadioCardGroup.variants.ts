import { cva } from 'class-variance-authority';

export const radioCardGroupVariants = cva(['flex'], {
  variants: {
    theme: {
      colony: '',
      kubefirst: '',
      civo: '',
    },
    direction: {
      row: ['flex-row', 'gap-8'],
      col: ['flex-col', 'gap-4'],
    },
  },
  defaultVariants: {
    theme: 'kubefirst',
    direction: 'col',
  },
});
