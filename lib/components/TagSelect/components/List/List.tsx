import { FC } from 'react';

import { cn } from '@/utils';

import { Item } from '../Item/Item';
import { useTagSelect } from '../../contexts';

import { ListProps } from './List.types';
import { wrapperVariants } from './List.variants';

export const List: FC<ListProps> = ({ theme }) => {
  const { tags } = useTagSelect();

  return (
    <ul role="listbox" data-theme={theme} className={cn(wrapperVariants())}>
      {tags.length > 0 ? (
        tags.map((tag) => <Item key={tag.id} option={tag} />)
      ) : (
        <span className="text-center text-sm px-4 py-2">
          There is not options available
        </span>
      )}
    </ul>
  );
};
