import { cva } from 'class-variance-authority';

export const tableVariants = cva(
  [
    'table-auto',
    'w-full',
    'border-collapse',
    'border-spacing-0',
    'rounded',
    'shadow-sm',
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

export const rowVariants = cva(
  [
    'h-8',
    'text-inherit',
    '[&>td]:py-3',
    '[&>td]:px-4',
    'text-slate-700',
    'hover:bg-zinc-100',
    'hover:cursor-pointer',
  ],
  {
    variants: {
      theme: {
        kubefirst: '',
        colony: '',
        civo: '',
      },
      isSelected: {
        true: 'bg-purple-50',
        false: '',
      },
    },
  },
);

export const headVariants = cva(
  [
    'h-[18px]',
    'bg-slate-100',
    '[&>tr>th]:py-3',
    '[&>tr>th]:px-4',
    '[&>tr>th]:uppercase',
    'text-left',
  ],
  {
    variants: {
      theme: {
        kubefirst: '',
        colony: '',
        civo: '',
      },
    },
  },
);
export const bodyVariants = cva([], {
  variants: {
    theme: {
      kubefirst: '',
      colony: '',
      civo: '',
    },
  },
});
