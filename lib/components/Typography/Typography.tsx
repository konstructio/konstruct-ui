import { forwardRef, ForwardRefExoticComponent } from 'react';

import { cn } from '@/utils';

import { HeadingTag, TypographyProps } from './Typography.types';
import { typographyVariants } from './Typography.variants';

const Typography: ForwardRefExoticComponent<Omit<TypographyProps, 'ref'>> =
  forwardRef<HTMLHeadingElement | HTMLParagraphElement, TypographyProps>(
    ({ className, theme, children, variant, component, ...delegated }, ref) => {
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
    },
  );

Typography.displayName = 'Typography';

export { Typography };
