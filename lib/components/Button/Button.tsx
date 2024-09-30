import { FC, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '../../utils';

import { buttonVariants } from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button: FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      className,
      variant,
      theme,
      size,
      disabled = false,
      asChild = false,
      ...delegated
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({ variant, disabled, theme, size, className }),
        )}
        disabled={disabled}
        {...delegated}
      />
    );
  },
);
