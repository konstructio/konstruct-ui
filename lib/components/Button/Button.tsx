import { ComponentRef, FC, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '../../utils';
import { useTheme } from '../../contexts';

import { buttonVariants } from './Button.variants';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = forwardRef<ComponentRef<'button'>, ButtonProps>(
  (
    {
      className,
      variant,
      theme,
      size,
      version,
      disabled = false,
      asChild = false,
      ...delegated
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    const { theme: themeContext } = useTheme();
    const inheritTheme = theme ?? themeContext;

    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            disabled,
            theme: inheritTheme,
            size,
            className,
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
