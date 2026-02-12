import { cva } from 'class-variance-authority';

/**
 * Animated pill background (selected state indicator)
 */
export const buttonGroupPillVariants = cva([
  'absolute',
  'top-2',
  'bottom-2',
  'bg-metal-800',
  'rounded-lg',
  'pointer-events-none',
]);

/**
 * Wrapper variants for the outer container with label
 */
export const buttonGroupWrapperVariants = cva([
  'flex',
  'flex-col',
  'gap-2',
  'w-full',
]);

/**
 * Group container variants - no outer border, just flex container
 */
export const buttonGroupVariants = cva(
  [
    'inline-flex',
    'items-stretch',
    'w-full',
    'relative',
    'bg-metal-900',
    'rounded-lg',
  ],
  {
    variants: {
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);
