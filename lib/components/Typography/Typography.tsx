import { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';

import { cn } from '@/utils';

import { HeadingTag, TypographyProps } from './Typography.types';
import { typographyVariants } from './Typography.variants';

/**
 * A flexible typography component for consistent text styling.
 * Automatically selects semantic HTML elements based on variant.
 *
 * @example
 * ```tsx
 * <Typography variant="h1">Main Heading</Typography>
 * <Typography variant="body1">Paragraph text</Typography>
 * <Typography variant="subtitle1" component="span">Inline text</Typography>
 * <Typography variant="h3" component="label" htmlFor="input">Label</Typography>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-typography--docs Storybook}
 */
const Typography: ForwardRefExoticComponent<
  Omit<TypographyProps, 'ref'> &
    RefAttributes<HTMLParagraphElement & HTMLHeadingElement & HTMLLabelElement>
> = forwardRef<
  HTMLParagraphElement & HTMLHeadingElement & HTMLLabelElement,
  TypographyProps
>(({ className, theme, children, variant, component, ...delegated }, ref) => {
  const Component =
    component ?? (variant?.includes('h') ? (variant as HeadingTag) : 'p');

  return (
    <Component
      ref={ref}
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
});

Typography.displayName = 'KonstructTypography';

export { Typography };
