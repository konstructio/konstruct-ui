import { cva } from 'class-variance-authority';

/**
 * Wrapper variants for the outer container with label
 */
export const buttonGroupWrapperVariants = cva(['flex', 'flex-col', 'gap-2'], {
  variants: {
    fullWidth: {
      true: 'w-full',
      false: 'w-fit',
    },
  },
  defaultVariants: {
    fullWidth: false,
  },
});

/**
 * Group container variants - no outer border, just flex container
 */
export const buttonGroupVariants = cva(['inline-flex', 'items-stretch'], {
  variants: {
    fullWidth: {
      true: 'w-full',
      false: 'w-fit',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: '',
    },
  },
  defaultVariants: {
    fullWidth: false,
    disabled: false,
  },
});
