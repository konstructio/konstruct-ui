import { ComponentRef, FC, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

import { buttonVariants } from './Button.variants';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = forwardRef<ComponentRef<'button'>, ButtonProps>(
  (
    {
      appearance,
      asChild = false,
      className,
      disabled = false,
      shape,
      size,
      theme,
      variant,
      version,
      ...delegated
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        data-theme={theme}
        className={cn(
          buttonVariants({
            appearance,
            className,
            disabled,
            shape,
            size,
            variant,
            version,
          }),
        )}
        disabled={disabled}
        {...delegated}
      />
    );
  },
);

Button.displayName = 'Button';

export { Button };
