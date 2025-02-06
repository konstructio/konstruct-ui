import { cva } from 'class-variance-authority';

export const breadcrumbItemVariants = cva(
  ['group', 'font-semibold', 'text-inherit'],
  {
    variants: {
      theme: {
        kubefirst: '',
        colony: '',
        civo: '',
      },
      size: {
        sm: 'text-xs',
        base: 'text-sm',
        lg: 'text-base',
        xl: 'text-lg',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
      size: 'base',
    },
  },
);

export const breadcrumbLinkVariants = cva(['text-inherit'], {
  variants: {
    theme: {
      kubefirst: '',
      colony: '',
      civo: '',
    },
    isActive: {
      true: '',
      false: ['text-slate-400', 'cursor-auto'],
    },
  },
  defaultVariants: {
    theme: 'kubefirst',
    isActive: true,
  },
  compoundVariants: [
    {
      isActive: true,
      class: [
        'group-focus-within:no-underline',
        'group-focus-within:outline',
        'group-focus-within:outline-8',
        'group-focus-within:outline-offset-4',
        'group-focus-within:outline-slate-500',
        'group-focus-within:rounded-sm',
        'group-hover:rounded-sm',
        'hover:no-underline',
        'hover:text-slate-500',
      ],
    },
    {
      isActive: undefined,
      class: [
        'group-focus-within:no-underline',
        'group-focus-within:outline',
        'group-focus-within:outline-8',
        'group-focus-within:outline-offset-4',
        'group-focus-within:outline-slate-500',
        'group-focus-within:rounded-sm',
        'group-hover:rounded-sm',
        'hover:no-underline',
        'hover:text-slate-500',
      ],
    },
  ],
});

export const breadcrumbLabelVariants = cva(['text-inherit'], {
  variants: {
    theme: {
      kubefirst: '',
      colony: '',
      civo: '',
    },
    isActive: {
      true: '',
      false: ['text-slate-400'],
    },
  },
  defaultVariants: {
    theme: 'kubefirst',
    isActive: true,
  },
});
