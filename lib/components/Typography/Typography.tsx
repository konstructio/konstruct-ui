import { FunctionComponent, useId } from 'react';

import { useTheme } from '../../contexts';
import { TypographyProps } from './Typography.types';
import { typographyVariants } from './Typography.variants';

const Typography: FunctionComponent<TypographyProps> = ({
  className,
  theme,
  variant,
  children,
  ...delegated
}) => {
  const id = useId();
  const { theme: themeContext } = useTheme();

  console.log(variant);
  return (
    <p
      id={id}
      className={typographyVariants({
        className,
        theme: theme ?? themeContext,
        variant: variant ?? 'body1',
      })}
      {...delegated}
    >
      {children}
    </p>
  );
};

Typography.displayName = 'Typography';

export { Typography };
