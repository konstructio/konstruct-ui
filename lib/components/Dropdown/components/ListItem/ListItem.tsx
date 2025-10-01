import { ComponentRef, FC, KeyboardEvent, useCallback, useRef } from 'react';

import { Typography } from '@/components/Typography/Typography';
import { cn } from '@/utils';

import { useDropdownContext } from '../../contexts';
import { Option } from '../../Dropdown.types';

import { ListItemProps } from './ListItem.types';
import { listItemVariants } from './ListItem.variants';

export const ListItem: FC<ListItemProps> = ({
  isClickable,
  className,
  ...option
}) => {
  const { setValue, toggleOpen } = useDropdownContext();
  const liRef = useRef<ComponentRef<'li'>>(null);

  const handleClick = useCallback(
    (option: Option) => {
      setValue(option.value);
      toggleOpen(false);
    },
    [setValue, toggleOpen],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLLIElement>, option: Option) => {
      if (event.key === 'Enter') {
        event.stopPropagation();
        handleClick(option);
      }
    },
    [handleClick],
  );

  return (
    <li
      ref={liRef}
      role="option"
      className={cn(listItemVariants({ className }))}
      tabIndex={0}
      onClick={(e) => {
        if (isClickable) {
          handleClick(option);
          e.stopPropagation();
        }
      }}
      onKeyDown={(event) => handleKeyDown(event, option)}
    >
      {option.leftIcon ? (
        <span className="w-4 h-4 flex justify-center items-center">
          {option.leftIcon}
        </span>
      ) : null}

      <Typography variant="body2" className="text-zinc-700 dark:text-slate-50">
        {option.label}
      </Typography>
    </li>
  );
};
