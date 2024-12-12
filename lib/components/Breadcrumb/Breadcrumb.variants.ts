import { cva } from 'class-variance-authority';

export const breadcrumbVariants = cva(['flex', 'gap-1.5', 'items-center'], {
  variants: {
    theme: {
      kubefirst: '',
      konstruct: '',
      colony: '',
      civo: '',
    },
    size: {
      sm: '',
      base: '',
      lg: '',
      xl: '',
    },
  },
  defaultVariants: {
    theme: 'kubefirst',
    size: 'base',
  },
});

export const breadcrumbItemVariants = cva(['text-slate-400', 'font-semibold'], {
  variants: {
    theme: {
      kubefirst: '',
      konstruct: '',
      colony: '',
      civo: '',
    },
    size: {
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
  },
  defaultVariants: {
    theme: 'kubefirst',
    size: 'base',
  },
});

export const chevronVariants = cva('', {
  variants: {
    theme: {
      kubefirst: 'text-kubefirst-primary',
      konstruct: 'text-orange-500',
      colony: 'text-red-500',
      civo: '',
    },
    size: {
      sm: ['w-2', 'h-2'],
      base: ['w-3', 'h-3'],
      lg: ['w-4', 'h-4'],
      xl: ['w-5', 'h-5'],
    },
  },
  defaultVariants: {
    theme: 'kubefirst',
    size: 'base',
  },
});
