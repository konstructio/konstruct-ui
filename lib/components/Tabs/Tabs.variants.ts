import { cva } from 'class-variance-authority';

export const rootVariants = cva([''], {
  variants: {
    variant: {
      horizontal: '',
      vertical: `flex gap-6`,
    },
  },
  defaultVariants: {
    variant: 'horizontal',
  },
});

export const contentVariants = cva([''], {
  variants: {
    variant: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const listVariants = cva(['flex'], {
  variants: {
    variant: {
      default: 'flex gap-6',
      horizontal: '',
      vertical: 'flex-col min-w-[132px] h-full items-center',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const triggerVariants = cva(
  [
    'cursor-pointer',
    'h-[27px]',
    'w-fit',
    'block',
    'relative',
    'after:absolute',
    'after:bottom-0',
    'after:left-0',
    'after:right-0',
    'after:h-[2px]',
    'after:bg-aurora-500',
    'after:origin-bottom',
    'after:content-[""]',
    'after:scale-y-0',
    'after:transition-transform',
    'after:duration-500',
    'after:transform-gpu',
    'after:will-change-transform',
    'kubefirst:after:bg-kubefirst-primary',
  ],
  {
    variants: {
      variant: {
        default: '',
        active: [
          'text-zinc-700',
          'font-semibold',
          'after:scale-y-100',
          'hover:after:scale-y-140',
        ],
        inactive: 'text-slate-500 font-[600]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
