import { cva } from 'class-variance-authority';

export const stepperVariants = cva(['flex'], {
  variants: {
    orientation: {
      vertical: ['flex-col'],
      horizontal: ['flex-row', 'items-start', 'w-full'],
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
});

export const stepListVariants = cva(['flex', 'list-none', 'p-0', 'm-0'], {
  variants: {
    orientation: {
      vertical: ['flex-col'],
      horizontal: ['flex-row', 'w-full'],
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
});

export const stepItemVariants = cva(['list-none'], {
  variants: {
    orientation: {
      vertical: [],
      horizontal: ['flex-1'],
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
});

export const stepVariants = cva(['flex', 'group', 'relative'], {
  variants: {
    orientation: {
      vertical: ['flex-row', 'items-start', 'gap-3'],
      horizontal: ['flex-col', 'items-center', 'flex-1', 'min-w-0'],
    },
    clickable: {
      true: ['cursor-pointer'],
      false: ['cursor-default'],
    },
  },
  defaultVariants: {
    orientation: 'vertical',
    clickable: false,
  },
});

export const stepIndicatorVariants = cva(
  [
    'flex',
    'items-center',
    'justify-center',
    'rounded-full',
    'shrink-0',
    'font-medium',
    'transition-all',
    'duration-200',
  ],
  {
    variants: {
      status: {
        completed: [
          'bg-transparent',
          'border-2',
          'border-aurora-500',
          'text-aurora-500',
          'dark:border-aurora-500',
          'dark:text-aurora-500',
        ],
        active: [
          'bg-aurora-500',
          'text-white',
          'border-0',
          'dark:bg-aurora-500',
          'dark:text-slate-900',
        ],
        pending: [
          'border-2',
          'border-slate-300',
          'text-slate-400',
          'bg-transparent',
          'dark:border-slate-600',
          'dark:text-slate-500',
        ],
        error: [
          'bg-red-500',
          'text-white',
          'border-0',
          'dark:bg-red-500',
          'dark:text-white',
        ],
      },
      size: {
        default: ['w-7', 'h-7', 'text-sm'],
        small: ['w-6', 'h-6', 'text-xs'],
        large: ['w-9', 'h-9', 'text-base'],
      },
    },
    defaultVariants: {
      status: 'pending',
      size: 'default',
    },
  },
);

export const stepContentVariants = cva(['flex', 'flex-col', 'gap-0.5'], {
  variants: {
    orientation: {
      vertical: ['pt-0.5'],
      horizontal: ['mt-2', 'items-center'],
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
});

export const stepLabelVariants = cva(
  ['font-medium', 'transition-colors', 'duration-200', 'leading-tight'],
  {
    variants: {
      status: {
        completed: ['text-slate-700', 'dark:text-slate-200'],
        active: ['text-slate-800', 'dark:text-white'],
        pending: ['text-slate-400', 'dark:text-slate-500'],
        error: ['text-red-600', 'dark:text-red-400'],
      },
      size: {
        default: ['text-sm'],
        small: ['text-xs'],
        large: ['text-base'],
      },
      orientation: {
        vertical: [],
        horizontal: ['text-center'],
      },
    },
    defaultVariants: {
      status: 'pending',
      size: 'default',
      orientation: 'vertical',
    },
  },
);

export const stepDescriptionVariants = cva(
  ['transition-colors', 'duration-200', 'leading-tight'],
  {
    variants: {
      status: {
        completed: ['text-slate-500', 'dark:text-slate-400'],
        active: ['text-slate-600', 'dark:text-slate-300'],
        pending: ['text-slate-400', 'dark:text-slate-500'],
        error: ['text-red-500', 'dark:text-red-400'],
      },
      size: {
        default: ['text-xs'],
        small: ['text-[10px]'],
        large: ['text-sm'],
      },
      orientation: {
        vertical: [],
        horizontal: ['text-center'],
      },
    },
    defaultVariants: {
      status: 'pending',
      size: 'default',
      orientation: 'vertical',
    },
  },
);

export const stepConnectorVariants = cva(
  ['transition-colors', 'duration-200'],
  {
    variants: {
      orientation: {
        vertical: ['w-0.5', 'min-h-5', 'ml-[13px]', 'my-1.5'],
        horizontal: ['h-0.5', 'flex-1', 'min-w-4'],
      },
      status: {
        completed: ['bg-aurora-500', 'dark:bg-aurora-500'],
        active: ['bg-aurora-500', 'dark:bg-aurora-500'],
        pending: ['bg-slate-200', 'dark:bg-slate-700'],
        error: ['bg-red-500', 'dark:bg-red-500'],
      },
      size: {
        default: [],
        small: [],
        large: [],
      },
    },
    compoundVariants: [
      {
        orientation: 'vertical',
        size: 'small',
        class: ['ml-[11px]', 'min-h-4'],
      },
      {
        orientation: 'vertical',
        size: 'large',
        class: ['ml-[17px]', 'min-h-6'],
      },
    ],
    defaultVariants: {
      orientation: 'vertical',
      status: 'pending',
      size: 'default',
    },
  },
);

export const horizontalConnectorWrapperVariants = cva(
  ['flex', 'items-center', 'flex-1'],
  {
    variants: {
      size: {
        default: ['mt-3.5'],
        small: ['mt-3'],
        large: ['mt-4.5'],
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);
