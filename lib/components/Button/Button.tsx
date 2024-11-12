import { FC, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '../../utils';
import { useTheme } from '../../contexts';

import { buttonVariants } from './Button.variants';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
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
