import { cva } from 'class-variance-authority';

export const cardBaseVariants = cva(
  ['border', 'border-slate-200', 'rounded-xl'],
  {
    variants: {
      isActive: {
        true: 'border-transparent',
        false: '',
      },
      canHover: {
        true: ['group', 'hover:border-transparent'],
        false: '',
      },
    },
  },
);

export const cardVariants = cva(
  ['border', 'border-4', 'p-3', 'text-card-foreground', 'rounded-xl'],
  {
    variants: {
      isActive: {
        true: [
          'border-kubefirst-primary',
          'shadow',
          'civo:border-civo-primary',
        ],
        false: 'border-transparent',
      },
      canHover: {
        true: [
          'cursor-pointer',
          'border-transparent',
          'group-hover:border-kubefirst-primary',
          'civo:group-hover:border-civo-primary',
        ],
        false: '',
      },
    },
    compoundVariants: [
      {
        canHover: undefined,
        isActive: undefined,
        class: 'border-transparent',
      },
    ],
  },
);
