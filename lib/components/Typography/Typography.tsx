import { FunctionComponent, useId } from 'react';

import { useTheme } from '@/contexts';

import { HeadingTag, TypographyProps } from './Typography.types';
import { typographyVariants } from './Typography.variants';

const Typography: FunctionComponent<TypographyProps> = ({
  className,
  theme,
  children,
  variant,
  component,
  ...delegated
}) => {
  const id = useId();
  const { theme: themeContext } = useTheme();

  const Component =
    component ?? (variant?.includes('h') ? (variant as HeadingTag) : 'p');

  return (
    <Component
      id={id}
      className={typographyVariants({
        className,
        theme: theme ?? themeContext,
        variant,
      })}
      {...delegated}
    >
      {children}
    </Component>
  );
};

Typography.displayName = 'Typography';

export { Typography };
