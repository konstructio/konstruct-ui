import { FC } from 'react';

import { cn } from '@/utils';
import { Typography } from '@/components';

import { Item } from '../Item/Item';
import { useMultiSelectDropdown } from '../../contexts';

import { ListProps } from './List.types';
import { wrapperVariants } from './List.variants';

export const List: FC<ListProps> = ({ theme }) => {
  const { options, selectedOptions, isLoading, noOptionsText } =
    useMultiSelectDropdown();

  return (
    <ul role="listbox" data-theme={theme} className={cn(wrapperVariants())}>
      {isLoading ? (
        <Item
          key="loading"
          option={{ id: 'loading', label: 'Loading...' }}
          className="select-none pointer-events-none"
          isSelected={false}
        />
      ) : options.length > 0 ? (
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
        <li className="select-none">
          <Typography
            variant="body2"
            className="text-zinc-800 dark:text-slate-50 italic px-2 py-2"
          >
            {noOptionsText ?? 'No options'}
          </Typography>
        </li>
      )}
    </ul>
  );
};
