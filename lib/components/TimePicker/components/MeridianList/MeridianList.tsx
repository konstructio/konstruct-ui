import { FC, MouseEvent, useCallback } from 'react';

import { cn } from '@/utils';

import { buttonVariants, liVariants } from '../../TimePicker.variants';
import { useTimePickerContext } from '../../contexts';

import { MeridianListProps } from './MeridianList.types';

const MeridianList: FC<MeridianListProps> = ({
  listClassName,
  listItemClassName,
  listItemButtonClassName,
}) => {
  const { format, isAM, onSelectAM, onSelectPM } = useTimePickerContext();

  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>, callback: () => void) => {
      event.currentTarget?.blur();
      callback();
    },
    [],
  );

  if (format === '24') {
    return null;
  }

  return (
    <ul
      className={cn('flex items-center justify-center flex-col', listClassName)}
      aria-label="meridian"
      role="listbox"
    >
      <li
        className={cn(liVariants({ className: listItemClassName }))}
        data-active={isAM}
        role="presentation"
      >
        <button
          type="button"
          role="option"
          className={cn(
            buttonVariants({ className: listItemButtonClassName }),
            {
              'dark:text-slate-50': !isAM,
            },
          )}
          onClick={(event) => handleClick(event, onSelectAM)}
        >
          AM
        </button>
      </li>

      <li
        className={cn(liVariants({ className: listItemClassName }))}
        data-active={!isAM}
        role="presentation"
      >
        <button
          type="button"
          role="option"
          className={cn(
            buttonVariants({ className: listItemButtonClassName }),
            {
              'dark:text-slate-50': isAM,
            },
          )}
          onClick={(event) => handleClick(event, onSelectPM)}
        >
          PM
        </button>
      </li>
    </ul>
  );
};

MeridianList.displayName = 'MeridianList';

export { MeridianList };
