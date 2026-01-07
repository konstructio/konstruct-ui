import { cva } from 'class-variance-authority';

export const cardBaseVariants = cva(
  ['rounded-xl', 'border', 'border-gray-200', 'dark:border-metal-700'],
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
        true: ['border-aurora-500', 'shadow'],
        false: 'border-transparent',
      },
      canHover: {
        true: [
          'cursor-pointer',
          'border-transparent',
          'group-hover:border-aurora-500',
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
