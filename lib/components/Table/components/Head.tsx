import { FunctionComponent } from 'react';
import { HeadProps } from '../Table.types';
import { headVariants } from '../Table.variants';
import { cn } from '@/utils';
import { useTheme } from '@/contexts';

export const Head: FunctionComponent<HeadProps> = ({
  children,
  className,
  theme,
  ...delegated
}) => {
  const { theme: themeContext } = useTheme();

  return (
    <thead
      className={cn(
        headVariants({
          className,
          theme: theme ?? themeContext,
        }),
      )}
      {...delegated}
    >
      {children}
    </thead>
  );
};
