import { cva } from 'class-variance-authority';

export const breadcrumbWrapperVariants = cva(
  ['text-slate-500', 'cursor-pointer'],
  {
    variants: {
      theme: {
        kubefirst: '',
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
    },
  },
);

export const breadcrumbVariants = cva(['flex', 'gap-1', 'items-center'], {
  variants: {
    theme: {
      kubefirst: '',
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

export const chevronVariants = cva('text-[#abadc6]', {
  variants: {
    theme: {
      kubefirst: '',
      colony: '',
      civo: '',
    },
    size: {
      sm: ['w-3', 'h-3'],
      base: ['w-4', 'h-4'],
      lg: ['w-5', 'h-5'],
      xl: ['w-6', 'h-6'],
    },
  },
  defaultVariants: {
    theme: 'kubefirst',
    size: 'base',
  },
});
