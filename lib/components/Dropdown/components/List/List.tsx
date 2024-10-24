import { FC } from 'react';

import { useDropdownContext } from '../../contexts';
import { ListItem } from '../ListItem/ListItem';

import { ListProps } from './List.types';
import { listVariants } from './List.variants';

export const List: FC<ListProps> = ({ options, theme }) => {
  const { isOpen } = useDropdownContext();

  if (!isOpen) {
    return null;
  }

  return (
    <ul role="listbox" className={listVariants({ theme })}>
      {options.map((option) => (
        <ListItem key={option.value} theme={theme} {...option} />
      ))}
    </ul>
  );
};
