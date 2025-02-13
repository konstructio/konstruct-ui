import { cva } from 'class-variance-authority';

export const alertVariants = cva(
  [
    'relative',
    'border',
    'py-4',
    'px-5',
    'rounded',
    'flex',
    'gap-2',
    'items-center',
    'justify-start',
    '[&>*]:flex',
    '[&>*]:gap-2',
    '[&>*]:items-center',
    '[&>*]:justify-start',
    'text-sm',
    'shadow-sm',
    'duration-300',
    'data-[state=hidden]:animate-out',
    'data-[state=hidden]:fade-out-0',
    'data-[state=hidden]:zoom-out-95',
  ],
  {
    variants: {
      theme: {
        kubefirst: '',
        colony: '',
        civo: '',
      },
      type: {
        sucess: '',
        info: [
          'border-blue-100',
          'bg-blue-50',
          'text-zinc-700',
          '[&>*>svg]:text-blue-600',
          'shadow-blue-50/40',
        ],
        warning: '',
        danger: '',
      },
      isVisible: {
        true: '',
        false: 'hidden',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
      isVisible: true,
    },
  },
);

export const closeButtonVariants = cva(
  ['w-4', 'h-4', 'absolute', 'right-2', 'top-2', 'text-inherit'],
  {
    variants: {
      theme: {
        kubefirst: '',
        colony: '',
        civo: '',
      },
      type: {
        sucess: '',
        info: ['text-blue-600'],
        warning: '',
        danger: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);
