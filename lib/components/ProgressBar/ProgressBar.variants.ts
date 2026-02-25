import { cva } from 'class-variance-authority';

export const progressBarTrackVariants = cva([
  'relative',
  'h-2',
  'w-full',
  'rounded',
  'bg-gray-300',
  'dark:bg-gray-700',
]);

export const progressBarFillVariants = cva(
  [
    'absolute',
    'inset-y-0',
    'left-0',
    'rounded',
    'transition-[width,background-color]',
    'duration-500',
  ],
  {
    variants: {
      status: {
        default: 'bg-metal-600',
        success: 'bg-green-600',
        warning: 'bg-amber-500',
        error: 'bg-red-500',
      },
    },
    defaultVariants: {
      status: 'default',
    },
  },
);
