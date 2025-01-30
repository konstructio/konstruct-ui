import { cva } from 'class-variance-authority';

export const cardBaseVariants = cva(
  ['border', 'border-slate-200', 'rounded-xl'],
  {
    variants: {
      theme: {
        colony: '',
        kubefirst: '',
        civo: '',
      },
      isActive: {
        true: 'border-transparent',
        false: '',
      },
      canHover: {
        true: ['group', 'hover:border-transparent'],
        false: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);

export const cardVariants = cva(
  ['border', 'border-4', 'p-3', 'text-card-foreground', 'rounded-xl'],
  {
    variants: {
      theme: {
        colony: '',
        kubefirst: '',
        civo: '',
      },
      isActive: {
        true: '',
        false: 'border-transparent',
      },
      canHover: {
        true: 'cursor-pointer border-transparent',
        false: '',
      },
    },
    compoundVariants: [
      {
        theme: 'colony',
        isActive: true,
        class: ['border-colony-primary', 'shadow-sm'],
      },
      {
        theme: 'kubefirst',
        isActive: true,
        class: ['border-kubefirst-primary', 'shadow-sm'],
      },
      {
        theme: 'civo',
        isActive: true,
        class: ['border-civo-primary', 'shadow-sm'],
      },
      {
        theme: 'colony',
        canHover: true,
        class: 'group-hover:border-colony-primary',
      },
      {
        theme: 'kubefirst',
        canHover: true,
        class: 'group-hover:border-kubefirst-primary',
      },
      {
        theme: 'civo',
        canHover: true,
        class: 'group-hover:border-civo-primary',
      },
      {
        canHover: undefined,
        isActive: undefined,
        class: 'border-transparent',
      },
    ],
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);
