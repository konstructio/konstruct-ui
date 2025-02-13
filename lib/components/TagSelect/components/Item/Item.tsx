import { FC } from 'react';

import { Tag } from '@/components/Tag/Tag';
import { useTheme } from '@/contexts';
import { cn } from '@/utils';

import { ItemProps } from './Item.types';
import { wrapperVariants } from './Item.variants';

export const Item: FC<ItemProps> = ({ option, theme, handleClickTag }) => {
  const { theme: contextTheme } = useTheme();
  const inheritTheme = theme ?? contextTheme;

  return (
    <li className={cn(wrapperVariants({ theme: inheritTheme }))} role="option">
      <button
        type="button"
        role="button"
        className="m-0 p-0 w-full"
        onClick={() => handleClickTag(option)}
      >
        <Tag {...option} />
      </button>
    </li>
  );
};
