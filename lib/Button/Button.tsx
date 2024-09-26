import { ButtonHTMLAttributes, FC, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center border-2 whitespace-nowrap rounded-md text-base transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none gap-2',
  {
    variants: {
      variant: {
        default:
          'bg-kubefirst-purple-light text-white shadow hover:bg-kubefirst-purple-dark',
        secondary:
          'bg-white text-kubefirst-purple-light border-kubefirst-purple-light hover:text-kubefirst-purple-dark hover:border-kubefirst-purple-dark hover:bg-purple-50',
      },
      size: {
        default: 'px-5 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button: FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, variant, size, asChild = false, ...delegated }, ref) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...delegated}
    />
  );
});
