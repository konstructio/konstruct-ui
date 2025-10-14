import {
  ComponentRef,
  FC,
  KeyboardEvent,
  ReactNode,
  useCallback,
  useRef,
} from 'react';

import { Typography } from '@/components/Typography/Typography';
import { cn } from '@/utils';

import { useDropdownContext } from '../../contexts';
import { Option } from '../../Dropdown.types';

import { ListItemProps } from './ListItem.types';
import { listItemVariants } from './ListItem.variants';

export const ListItem: FC<ListItemProps> = ({
  isClickable,
  className,
  inputRef,
  ...option
}) => {
  const { searchTerm, highlightSearchEnabled, setValue, toggleOpen } =
    useDropdownContext();
  const liRef = useRef<ComponentRef<'li'>>(null);

  const handleClick = useCallback(
    (option: Option) => {
      setValue(option.value, inputRef);
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

  const getLabelValue = useCallback(
    (value: string | ReactNode) => {
      if (typeof value !== 'string') {
        return value;
      }

      const newValue =
        highlightSearchEnabled && searchTerm.length > 0
          ? value.split(new RegExp(`(${searchTerm})`, 'gi')).map((value) => {
              if (value.toLowerCase() === searchTerm.toLowerCase()) {
                return (
                  <mark
                    key={value}
                    className="bg-transparent font-semibold text-slate-800 dark:text-slate-50"
                  >
                    {value}
                  </mark>
                );
              }

              return value;
            })
          : [value];

      return (
        <Typography
          variant="body2"
          className="text-zinc-700 dark:text-slate-50"
        >
          {newValue}
        </Typography>
      );
    },
    [highlightSearchEnabled, searchTerm],
  );

  return (
    <li
      ref={liRef}
      role="option"
      data-action="false"
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

      {getLabelValue(option.label)}
    </li>
  );
};
