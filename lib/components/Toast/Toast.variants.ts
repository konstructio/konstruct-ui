import { cva } from 'class-variance-authority';

export const toastVariants = cva(
  [
    'rounded-md',
    'p-4',
    'flex',
    'flex-row',
    'relative',
    'overflow-hidden',
    'h-14',
    'items-center',
    'gap-8',
    'data-[state=open]:animate-slide-in',
    'data-[state=closed]:animate-hide',
    'data-[swipe=move]:translate-x-4',
    'data-[swipe=cancel]:translate-x-0',
    'data-[swipe=end]:animate-swipe-out',
    'text-white',
    'shadow-[0px_2px_4px_0px_rgba(100,116,139,0.25)]',
  ],
  {
    variants: {
      variant: {
        success: ['bg-green-800'],
        error: ['bg-red-800'],
        warning: ['bg-amber-800'],
      },
    },
    defaultVariants: {
      variant: 'success',
    },
  },
);

export const viewportToastVariants = cva([
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
]);

export const closeToastVariants = cva([
  'top-2',
  'right-2',
  'w-4',
  'h-4',
  'text-white',
]);
