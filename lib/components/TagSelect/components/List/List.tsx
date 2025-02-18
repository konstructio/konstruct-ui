import { FC } from 'react';

import { cn } from '@/utils';
import { useTheme } from '@/contexts';

import { Item } from '../Item/Item';

import { ListProps } from './List.types';
import { wrapperVariants } from './List.variants';

export const List: FC<ListProps> = ({ theme, options }) => {
  const { theme: contextTheme } = useTheme();
  const inheritTheme = theme ?? contextTheme;

  return (
    <ul role="listbox" className={cn(wrapperVariants({ theme: inheritTheme }))}>
      {options.map((option) => (
        <Item key={option.id} theme={inheritTheme} option={option} />
      ))}
    </ul>
  );
};
