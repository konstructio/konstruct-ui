import { cva } from 'class-variance-authority';

export const toastVariants = cva([
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
  'shadow-purple-200',
  'border-purple-100',
  'dark:border-none',
  'dark:shadow-none',
]);

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
  'text-kubefirst-primary',
]);
