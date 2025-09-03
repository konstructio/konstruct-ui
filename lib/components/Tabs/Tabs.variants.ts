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

export const triggerVariants = cva(['cursor-pointer', 'h-[27px]', 'w-fit'], {
  variants: {
    variant: {
      default: '',
      active: [
        'text-zinc-700',
        'font-[600]',
        'civo:border-b-2',
        'civo:border-civo-primary',
        'kubefirst:border-b-2',
        'kubefirst:border-kubefirst-primary',
      ],
      inactive: 'text-slate-500 font-[600]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
