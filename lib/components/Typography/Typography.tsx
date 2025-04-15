import { FC, useId } from 'react';

import { cn } from '@/utils';

import { HeadingTag, TypographyProps } from './Typography.types';
import { typographyVariants } from './Typography.variants';
import { Slot } from '@radix-ui/react-slot';

const Typography: FC<TypographyProps> = ({
  className,
  theme,
  children,
  variant,
  component,
  asChild = false,
  ...delegated
}) => {
  const id = useId();
  const Component = asChild
    ? Slot
    : (component ?? (variant?.includes('h') ? (variant as HeadingTag) : 'p'));

  return (
    <Component
      id={id}
      data-theme={theme}
      className={cn(
        typographyVariants({
          className,
          variant,
        }),
      )}
      {...delegated}
    >
      {children}
    </Component>
  );
};

Typography.displayName = 'Typography';

export { Typography };
