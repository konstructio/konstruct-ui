import { FC, MouseEvent, KeyboardEvent, useCallback, useRef } from 'react';

import { cn } from '@/utils';

import { buttonVariants, liVariants } from '../../TimePicker.variants';
import { useTimePickerContext } from '../../contexts';

import { MeridianListProps } from './MeridianList.types';

const MeridianList: FC<MeridianListProps> = ({
  listClassName,
  listItemClassName,
  listItemButtonClassName,
  onClose,
}) => {
  const wrapperRef = useRef<HTMLUListElement>(null);
  const { format, isAM, onSelectAM, onSelectPM } = useTimePickerContext();

  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>, callback: () => void) => {
      event.currentTarget?.blur();
      callback();
    },
    [],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>, isCurrentlyAM: boolean) => {
      const buttons = wrapperRef.current?.querySelectorAll('button');
      if (!buttons) return;

      const isTabForward = event.key === 'Tab' && !event.shiftKey;
      const isTabBackward = event.key === 'Tab' && event.shiftKey;
      const isArrow = event.key === 'ArrowDown' || event.key === 'ArrowUp';

      if (isArrow || isTabForward || isTabBackward) {
        event.preventDefault();
        // Navigate between AM and PM without selecting
        if (isCurrentlyAM) {
          (buttons[1] as HTMLButtonElement)?.focus();
        } else {
          (buttons[0] as HTMLButtonElement)?.focus();
        }
      } else if (event.key === 'Enter') {
        event.preventDefault();
        // Select the current option
        if (isCurrentlyAM) {
          onSelectAM();
        } else {
          onSelectPM();
        }
        // Close the list
        onClose?.();
      }
    },
    [onSelectAM, onSelectPM, onClose],
  );

  if (format === '24') {
    return null;
  }

  return (
    <ul
      ref={wrapperRef}
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
          tabIndex={isAM ? 0 : -1}
          className={cn(
            buttonVariants({ className: listItemButtonClassName }),
            {
              'dark:text-slate-50': !isAM,
            },
          )}
          onClick={(event) => handleClick(event, onSelectAM)}
          onKeyDown={(event) => handleKeyDown(event, true)}
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
          tabIndex={!isAM ? 0 : -1}
          className={cn(
            buttonVariants({ className: listItemButtonClassName }),
            {
              'dark:text-slate-50': isAM,
            },
          )}
          onClick={(event) => handleClick(event, onSelectPM)}
          onKeyDown={(event) => handleKeyDown(event, false)}
        >
          PM
        </button>
      </li>
    </ul>
  );
};

MeridianList.displayName = 'MeridianList';

export { MeridianList };
