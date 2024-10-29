import { FC, useCallback } from 'react';

import { useDropdownContext } from '../../contexts';
import { Option } from '../../Dropdown.types';

import { ListItemProps } from './ListItem.types';
import { listItemVariants } from './ListItem.variants';

export const ListItem: FC<ListItemProps> = ({ theme, ...option }) => {
  const { setValue, toggleOpen } = useDropdownContext();

  const handleClick = useCallback(
    (option: Option) => {
      setValue(option);
      toggleOpen(false);
    },
    [setValue, toggleOpen],
  );

  return (
    <li className={listItemVariants({ theme })} role="option" tabIndex={0}>
      <button
        type="button"
        role="button"
        className="m-0 p-0 w-full flex items-center gap-3"
        onClick={() => handleClick(option)}
      >
        {option.leftIcon ? (
          <span className="w-4 h-4 flex justify-center items-center">
            {option.leftIcon}
          </span>
        ) : null}

        {option.label}
      </button>
    </li>
  );
};
