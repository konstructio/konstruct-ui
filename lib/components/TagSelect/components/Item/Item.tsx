import { FC } from 'react';

import { Tag } from '@/components/Tag/Tag';
import { cn } from '@/utils';

import { useTagSelect } from '../../contexts';

import { ItemProps } from './Item.types';
import { wrapperVariants } from './Item.variants';

export const Item: FC<ItemProps> = ({ option, theme }) => {
  const { onSelectTag } = useTagSelect();

  return (
    <li
      role="option"
      data-theme={theme}
      className={cn(wrapperVariants({ isSelected: option.isSelected }))}
      onClick={() => onSelectTag(option)}
    >
      <Tag {...option} />
    </li>
  );
};
