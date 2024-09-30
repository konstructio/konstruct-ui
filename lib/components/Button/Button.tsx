import { ButtonHTMLAttributes, FC, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../utils';

const buttonVariants = cva(
  [
    'border-[1px]',
    'disabled:pointer-events-none',
    'focus-visible:outline-none',
    'focus-visible:ring-1',
    'focus-visible:ring-ring',
    'gap-2',
    'inline-flex',
    'items-center',
    'justify-center',
    'rounded-md',
    'text-base',
    'transition-colors',
    'whitespace-nowrap',
  ],
  {
    variants: {
      variant: {
        primary: ['text-white', 'border-current'],
        secondary: ['bg-white'],
      },
      theme: {
        kubefirst: '',
        'kubefirst-pro': '',
        colony: '',
      },
      size: {
        default: 'px-5 py-2',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        theme: 'kubefirst',
        class: ['bg-kubefirst-purple-light', 'hover:bg-kubefirst-purple-dark'],
      },
      {
        variant: 'secondary',
        theme: 'kubefirst',
        class: [
          'text-kubefirst-purple-light',
          'border-kubefirst-purple-light',
          'hover:text-kubefirst-purple-dark',
          'hover:border-kubefirst-purple-dark',
          'hover:bg-purple-50',
        ],
      },
    ],
    defaultVariants: {
      variant: 'primary',
      theme: 'kubefirst',
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
>(({ className, variant, theme, size, asChild = false, ...delegated }, ref) => {
  const Comp = asChild ? Slot : 'button';

  console.log(buttonVariants({ variant, theme, size, className }));

  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants({ variant, theme, size, className }))}
      {...delegated}
    />
  );
});
