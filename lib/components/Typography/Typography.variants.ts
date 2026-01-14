import { cva } from 'class-variance-authority';

export const typographyVariants = cva(
  ['text-slate-800', 'dark:text-metal-50'],
  {
    variants: {
      variant: {
        h1: ['text-[57px]', 'leading-16'],
        h2: ['text-[45px]', 'leading-13'],
        h3: ['text-4xl', 'leading-11'],
        h4: ['text-[32px]', 'leading-10'],
        h5: ['text-[28px]', 'leading-9'],
        h6: ['text-2xl', 'font-medium', 'leading-8', 'tracking-[0.15px]'],
        subtitle1: ['text-[22px]', 'leading-7'],
        subtitle2: ['text-sm', 'font-medium', 'leading-6', 'tracking-[0.15px]'],
        subtitle3: [
          'text-[14px]',
          'font-medium',
          'leading-5',
          'tracking-[0.1px]',
        ],
        labelLarge: [
          'text-sm',
          'font-medium',
          'text-slate-500',
          'dark:text-metal-50',
        ],
        labelMedium: [
          'text-[12px]',
          'font-medium',
          'leading-4',
          'tracking-[0.5px]',
          'uppercase',
        ],
        labelSmall: [
          'text-[11px]',
          'font-medium',
          'leading-4',
          'tracking-[0.5px]',
          'uppercase',
        ],
        buttonSmall: [
          'text-[14px]',
          'font-semibold',
          'leading-5',
          'tracking-[0.25px]',
        ],
        body1: ['text-base', 'leading-6', 'tracking-[0.5px]'],
        body2: ['text-sm', 'leading-5', 'tracking-[0.25px]'],
        body3: ['text-xs', 'leading-4', 'tracking-[0.4px]'],
        tooltip: ['text-sm', 'leading-5.5'],
      },
    },
    defaultVariants: {
      variant: 'body1',
    },
  },
);
