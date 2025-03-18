import { FunctionComponent } from 'react';
import { BodyProps } from '../Table.types';
import { bodyVariants } from '../Table.variants';
import { cn } from '@/utils';
import { useTheme } from '@/contexts';

export const Body: FunctionComponent<BodyProps> = ({
  children,
  className,
  theme,
  ...delegated
}) => {
  const { theme: themeContext } = useTheme();

  return (
    <tbody
      className={cn(
        bodyVariants({
          className,
          theme: theme ?? themeContext,
        }),
      )}
      {...delegated}
    >
      {children}
    </tbody>
  );
};
