import { FC } from 'react';

import { cn } from '@/utils';
import { useTheme } from '@/contexts';

import { Item } from '../Item/Item';
import { useTagSelect } from '../../contexts';

import { ListProps } from './List.types';
import { wrapperVariants } from './List.variants';

export const List: FC<ListProps> = ({ theme }) => {
  const { tags } = useTagSelect();
  const { theme: contextTheme } = useTheme();
  const inheritTheme = theme ?? contextTheme;

  return (
    <ul role="listbox" className={cn(wrapperVariants({ theme: inheritTheme }))}>
      {tags.length > 0 ? (
        tags.map((tag) => (
          <Item key={tag.id} theme={inheritTheme} option={tag} />
        ))
      ) : (
        <span className="text-center text-sm px-4 py-2">
          There is not options available
        </span>
      )}
    </ul>
  );
};
