import { FC } from 'react';

import { listItemVariants } from './ListItem.variants';
import { ListItemProps } from './ListItem.types';

export const ListItem: FC<ListItemProps> = ({ theme, label }) => (
  <li className={listItemVariants({ theme })} role="option">
    <button
      type="button"
      role="button"
      className="m-0 p-0 w-full"
      onClick={() => {}}
    >
      <span>{label}</span>
    </button>
  </li>
);
