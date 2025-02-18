import { FC } from 'react';

import { Tag } from '@/components/Tag/Tag';
import { useTheme } from '@/contexts';
import { cn } from '@/utils';

import { useTagSelect } from '../../contexts';

import { ItemProps } from './Item.types';
import { wrapperVariants } from './Item.variants';

export const Item: FC<ItemProps> = ({ option, theme }) => {
  const { theme: contextTheme } = useTheme();
  const { onSelectTag } = useTagSelect();
  const inheritTheme = theme ?? contextTheme;

  return (
    <li
      role="option"
      className={cn(
        wrapperVariants({ theme: inheritTheme, isSelected: option.isSelected }),
      )}
      onClick={() => onSelectTag(option)}
    >
      <Tag {...option} />
    </li>
  );
};
