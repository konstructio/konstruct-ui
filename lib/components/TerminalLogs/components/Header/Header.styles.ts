import { cva } from 'class-variance-authority';

export const wrapperVariants = cva(['flex', 'gap-4', 'items-center'], {
  variants: {
    theme: {
      kubefirst: '',
      colony: '',
      civo: '',
    },
  },
  defaultVariants: {
    theme: 'kubefirst',
  },
});

export const tabTriggerVariants = cva(
  [
    'uppercase',
    'text-white',
    'pb-2',
    'data-[state=active]:border-b-2',
    'data-[state=inactive]:text-[#abadc6]',
    'border-white',
    'font-medium',
    'text-xs',
  ],
  {
    variants: {
      theme: {
        kubefirst: '',
        colony: '',
        civo: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);

export const wrapperInputVariants = cva(
  [
    'flex-1',
    'px-3',
    'flex',
    'text-white',
    'items-center',
    'bg-slate-900',
    'rounded-lg',
  ],
  {
    variants: {
      theme: {
        kubefirst: '',
        colony: '',
        civo: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);

export const inputVariants = cva(
  [
    'border-0',
    'w-full',
    'outline-none',
    'text-white',
    'placeholder:text-slate-200',
    'text-sm',
    'focus-visible:ring-0',
    'focus:text-white',
    'focus:caret-slate-300',
  ],
  {
    variants: {
      theme: {
        kubefirst: '',
        colony: '',
        civo: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);

export const actionButtonsWrapperVariants = cva(
  ['flex', 'gap-4', 'text-[#abadc6]'],
  {
    variants: {
      theme: {
        kubefirst: '',
        colony: '',
        civo: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);
