import { FC } from 'react';

import { cn } from '@/utils';

import { Item } from '../Item/Item';
import { useMultiSelectDropdown } from '../../contexts';

import { ListProps } from './List.types';
import { wrapperVariants } from './List.variants';
import { Typography } from '@/components';

export const List: FC<ListProps> = ({ theme }) => {
  const { options, selectedOptions } = useMultiSelectDropdown();

  return (
    <ul role="listbox" data-theme={theme} className={cn(wrapperVariants())}>
      {options.length > 0 ? (
        options.map((option) => (
          <Item
            key={option.id}
            option={option}
            isSelected={selectedOptions.some(
              (selected) => selected.id === option.id,
            )}
          />
        ))
      ) : (
        <Typography
          variant="body2"
          className="text-zinc-800 dark:text-slate-50 italic px-2 py-2"
        >
          No options
        </Typography>
      )}
    </ul>
  );
};
