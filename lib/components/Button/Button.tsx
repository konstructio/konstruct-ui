import { ComponentRef, FC, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

import { buttonVariants } from './Button.variants';
import { ButtonProps } from './Button.types';

/**
 * A customizable button component with multiple variants and styles.
 *
 * @example
 * ```tsx
 * // Primary button (default)
 * <Button>Click me</Button>
 *
 * // Secondary button
 * <Button variant="secondary">Secondary</Button>
 *
 * // Danger button
 * <Button variant="danger">Delete</Button>
 *
 * // Link style button
 * <Button variant="link">Learn more</Button>
 *
 * // Circle icon button
 * <Button shape="circle" size="large"><Icon /></Button>
 *
 * // Compact button
 * <Button appearance="compact">Compact</Button>
 *
 * // As child (renders child element with button styles)
 * <Button asChild><a href="/page">Link</a></Button>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-button--docs Storybook}
 */
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

Button.displayName = 'KonstructButton';

export { Button };
