import { FC } from 'react';

import { Badge } from '@/components/Badge/Badge';
import { Typography } from '@/components/Typography/Typography';
import { cn } from '@/utils';

import { useMultiSelectDropdown } from '../../contexts';

import { ItemProps } from './Item.types';
import { itemVariants } from './Item.variants';

export const Item: FC<ItemProps> = ({
  option,
  theme,
  isSelected,
  className,
}) => {
  const { onSelectOption } = useMultiSelectDropdown();

  return (
    <li
      role="option"
      data-theme={theme}
      className={cn(itemVariants({ isSelected }), className)}
      onClick={() => onSelectOption(option)}
    >
      <Typography variant="body2">{option.label}</Typography>

      {option.badge && <Badge label={option.badge} />}
    </li>
  );
};
