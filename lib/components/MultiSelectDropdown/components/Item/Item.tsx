import { FC } from 'react';

import { cn } from '@/utils';

import { useMultiSelectDropdown } from '../../contexts';

import { ItemProps } from './Item.types';
import { wrapperVariants } from './Item.variants';
import { Tag, Typography } from '@/components';

export const Item: FC<ItemProps> = ({ option, theme, isSelected }) => {
  const { onSelectOption } = useMultiSelectDropdown();

  return (
    <li
      role="option"
      data-theme={theme}
      className={cn(wrapperVariants({ isSelected }))}
      onClick={() => onSelectOption(option)}
    >
      <Typography variant="body2" className="text-slate-800">
        {option.label}
      </Typography>
      <Tag
        id={option.id}
        label={option.tagLabel}
        color={option.tagColor}
        isSelected={isSelected}
      />
    </li>
  );
};
