import { FunctionComponent, useId } from 'react';

import { useTheme } from '../../contexts';
import { TypographyProps } from './Typography.types';
import { typographyVariants } from './Typography.variants';

const Typography: FunctionComponent<TypographyProps> = ({
  className,
  theme,
  children,
  ...delegated
}) => {
  const id = useId();
  const { theme: themeContext } = useTheme();

  return (
    <p
      id={id}
      className={typographyVariants({
        className,
        theme: theme ?? themeContext,
      })}
      {...delegated}
    >
      {children}
    </p>
  );
};

Typography.displayName = 'Typography';

export { Typography };
