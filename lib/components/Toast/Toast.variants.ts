import { cva } from 'class-variance-authority';

export const toastVariants = cva(
  [
    'bg-white',
    'rounded-md',
    'shadow-md',
    'p-4',
    'flex',
    'flex-col',
    'relative',
    'border',
    'overflow-hidden',
    'data-[state=open]:animate-slide-in',
    'data-[state=closed]:animate-hide',
    'data-[swipe=move]:translate-x-4',
    'data-[swipe=cancel]:translate-x-0',
    'data-[swipe=end]:animate-swipe-out',
  ],
  {
    variants: {
      theme: {
        kubefirst: ['shadow-purple-200', 'border-purple-100'],
        colony: ['shadow-red-200', 'border-red-100'],
        civo: '',
      },
    },
    defaultVariants: {
      theme: 'kubefirst',
    },
  },
);

export const viewportToastVariants = cva(
  [
    'fixed',
    'bottom-0',
    'right-0',
    'flex',
    'flex-col',
    'p-[var(--viewport-padding)]',
    'gap-8',
    'w-[390px]',
    'max-w-[100vw]',
    'm-0',
    'z-50',
    'outline-none',
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

export const closeToastVariants = cva(['top-2', 'right-2', 'w-4', 'h-4'], {
  variants: {
    theme: {
      kubefirst: ['text-kubefirst-primary'],
      colony: ['text-red-400'],
      civo: '',
    },
  },
  defaultVariants: {
    theme: 'kubefirst',
  },
});
