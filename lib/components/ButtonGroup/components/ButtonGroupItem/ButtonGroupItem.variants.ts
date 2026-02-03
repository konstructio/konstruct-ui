import { cva } from 'class-variance-authority';

/**
 * Individual button item variants - outer container with borders
 */
export const buttonGroupItemVariants = cva(
  [
    'flex',
    'flex-1',
    'items-start',
    'cursor-pointer',
    'select-none',
    'transition-colors',
    'p-2',
    'border-metal-700',
    'border-t',
    'border-b',
    'bg-metal-900',
    'first:border-l',
    'first:rounded-l-lg',
    'last:border-r',
    'last:rounded-r-lg',
    'focus:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-aurora-500',
    'focus-visible:ring-inset',
  ],
  {
    variants: {
      disabled: {
        true: 'pointer-events-none opacity-50',
        false: '',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

/**
 * Animated pill background (selected state indicator)
 */
export const buttonGroupPillVariants = cva([
  'absolute',
  'inset-2',
  'bg-metal-800',
  'rounded-lg',
]);

/**
 * Inner content container (the content layer above the pill)
 */
export const buttonGroupItemContentVariants = cva(
  ['flex', 'flex-col', 'flex-1', 'rounded-lg', 'px-4', 'py-2'],
  {
    variants: {
      hasDescription: {
        true: 'items-start text-left justify-start',
        false: 'items-center text-center justify-center',
      },
    },
    defaultVariants: {
      hasDescription: false,
    },
  },
);

/**
 * Label text variants inside button item
 */
export const buttonGroupLabelVariants = cva(
  [
    'text-sm',
    'font-medium',
    'leading-5',
    'tracking-[0.1px]',
    'flex',
    'items-center',
    'gap-2',
    'transition-colors',
    'ease-in-out',
  ],
  {
    variants: {
      selected: {
        true: 'text-aurora-500',
        false: 'text-metal-50',
      },
    },
    defaultVariants: {
      selected: false,
    },
  },
);

/**
 * Description text variants inside button item
 */
export const buttonGroupDescriptionVariants = cva([
  'text-sm',
  'font-normal',
  'leading-5',
  'tracking-[0.15px]',
  'text-metal-300',
]);
