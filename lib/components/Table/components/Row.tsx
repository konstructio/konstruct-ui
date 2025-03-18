import { FunctionComponent } from 'react';
import { RowProps } from '../Table.types';
import { rowVariants } from '../Table.variants';
import { cn } from '@/utils';
import { useTheme } from '@/contexts';

export const Row: FunctionComponent<RowProps> = ({
  children,
  className,
  theme,
  width,
  isSelected,
  onSelect,
  ...delegated
}) => {
  const { theme: themeContext } = useTheme();

  return (
    <tr
      style={{ width: width }}
      onClick={onSelect}
      className={cn(
        rowVariants({
          className,
          theme: theme ?? themeContext,
          isSelected,
        }),
      )}
      {...delegated}
    >
      {children}
    </tr>
  );
};
