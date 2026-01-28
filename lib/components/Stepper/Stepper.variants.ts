import { cva } from 'class-variance-authority';

export const stepperVariants = cva(['flex'], {
  variants: {
    orientation: {
      vertical: ['flex-col'],
      horizontal: ['flex-row', 'items-start'],
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
      horizontal: ['flex-row'],
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
      horizontal: [],
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
});

export const stepVariants = cva(['flex', 'group', 'relative'], {
  variants: {
    orientation: {
      vertical: [],
      horizontal: ['min-w-0'],
    },
    variant: {
      inline: ['flex-row', 'items-center', 'gap-4'],
      stacked: ['flex-col', 'items-center', 'gap-2'],
      horizontal: ['flex-row', 'items-center', 'gap-4'],
    },
    clickable: {
      true: ['cursor-pointer'],
      false: ['cursor-default'],
    },
  },
  defaultVariants: {
    orientation: 'vertical',
    variant: 'inline',
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
          'text-slate-700',
          'border-0',
          'dark:bg-aurora-500',
          'dark:text-metal-900',
        ],
        pending: [
          'border-2',
          'border-slate-300',
          'text-slate-600',
          'bg-transparent',
          'dark:border-metal-200',
          'dark:text-metal-200',
        ],
        error: [
          'bg-red-600',
          'text-white',
          'border-0',
          'dark:bg-red-600',
          'dark:text-white',
        ],
      },
      size: {
        sm: ['w-5', 'h-5', 'text-xs', 'uppercase', 'tracking-wide'],
        md: ['w-[37px]', 'h-[37px]', 'text-sm', 'font-semibold'],
        lg: ['w-[54px]', 'h-[54px]', 'text-lg', 'font-semibold'],
      },
    },
    defaultVariants: {
      status: 'pending',
      size: 'sm',
    },
  },
);

export const stepContentVariants = cva(['flex', 'flex-col', 'gap-0.5'], {
  variants: {
    variant: {
      inline: ['items-start'],
      stacked: ['items-center'],
      horizontal: ['items-start'],
    },
  },
  defaultVariants: {
    variant: 'inline',
  },
});

export const stepLabelVariants = cva(
  [
    'font-medium',
    'transition-colors',
    'duration-200',
    'leading-tight',
    'select-none',
  ],
  {
    variants: {
      status: {
        completed: ['text-slate-700', 'dark:text-metal-200'],
        active: ['text-slate-700', 'dark:text-metal-50'],
        pending: ['text-slate-600', 'dark:text-metal-50'],
        error: ['text-red-700', 'dark:text-red-500'],
      },
      size: {
        sm: ['text-sm'],
        md: ['text-sm'],
        lg: ['text-base'],
      },
      variant: {
        inline: ['text-left'],
        stacked: ['text-center'],
        horizontal: ['text-left'],
      },
    },
    defaultVariants: {
      status: 'pending',
      size: 'sm',
      variant: 'inline',
    },
  },
);

export const stepDescriptionVariants = cva(
  ['transition-colors', 'duration-200', 'leading-tight', 'select-none'],
  {
    variants: {
      status: {
        completed: ['text-slate-500', 'dark:text-slate-400'],
        active: ['text-slate-600', 'dark:text-slate-300'],
        pending: ['text-slate-400', 'dark:text-slate-500'],
        error: ['text-red-500', 'dark:text-red-400'],
      },
      size: {
        sm: ['text-xs'],
        md: ['text-xs'],
        lg: ['text-sm'],
      },
      variant: {
        inline: ['text-left'],
        stacked: ['text-center'],
        horizontal: ['text-left'],
      },
    },
    defaultVariants: {
      status: 'pending',
      size: 'sm',
      variant: 'inline',
    },
  },
);

export const stepConnectorVariants = cva(
  ['transition-colors', 'duration-200'],
  {
    variants: {
      orientation: {
        vertical: ['w-0.5'],
        horizontal: ['h-0.5', 'flex-1', 'min-w-4'],
      },
      status: {
        completed: ['bg-aurora-500', 'dark:bg-aurora-500'],
        active: ['bg-aurora-500', 'dark:bg-aurora-500'],
        pending: ['bg-slate-300', 'dark:bg-metal-400'],
        error: ['bg-red-700', 'dark:bg-red-600'],
      },
      size: {
        sm: [],
        md: [],
        lg: [],
      },
      variant: {
        inline: [],
        stacked: [],
        horizontal: [],
      },
    },
    compoundVariants: [
      // Vertical inline connectors by size
      {
        orientation: 'vertical',
        variant: 'inline',
        size: 'sm',
        class: ['h-6', 'ml-[9px]', 'my-1'],
      },
      {
        orientation: 'vertical',
        variant: 'inline',
        size: 'md',
        class: ['h-6', 'ml-[17px]', 'my-1'],
      },
      {
        orientation: 'vertical',
        variant: 'inline',
        size: 'lg',
        class: ['h-6', 'ml-[26px]', 'my-1'],
      },
      // Vertical stacked connectors by size
      {
        orientation: 'vertical',
        variant: 'stacked',
        size: 'sm',
        class: ['h-6', 'mx-auto', 'my-1'],
      },
      {
        orientation: 'vertical',
        variant: 'stacked',
        size: 'md',
        class: ['h-7', 'mx-auto', 'my-2'],
      },
      {
        orientation: 'vertical',
        variant: 'stacked',
        size: 'lg',
        class: ['h-8', 'mx-auto', 'my-2'],
      },
    ],
    defaultVariants: {
      orientation: 'vertical',
      status: 'pending',
      size: 'sm',
      variant: 'inline',
    },
  },
);

export const horizontalConnectorWrapperVariants = cva(
  ['flex', 'items-center', 'flex-1'],
  {
    variants: {
      variant: {
        inline: ['mt-2.5'],
        stacked: ['mt-[26px]'],
        horizontal: ['mt-0'],
      },
    },
    defaultVariants: {
      variant: 'inline',
    },
  },
);
