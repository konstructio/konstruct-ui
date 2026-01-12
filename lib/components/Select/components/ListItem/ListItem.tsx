import { ComponentRef, FC, KeyboardEvent, useCallback, useRef } from 'react';

import { cn } from '@/utils';

import { Typography } from '../../../Typography/Typography';
import { useSelectContext } from '../../contexts';
import { Option } from '../../Select.types';

import { ListItemProps } from './ListItem.types';
import { listItemVariants } from './ListItem.variants';

function highlightText(value: string, searchTerm: string) {
  const escaped = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');

  return value.split(regex).map((part, index) => {
    if (part.toLowerCase() === searchTerm.toLowerCase()) {
      return (
        <mark
          key={index}
          className="bg-transparent font-semibold text-metal-800 dark:text-metal-50"
        >
          {part}
        </mark>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

export const ListItem: FC<ListItemProps> = ({
  isEmpty,
  isClickable,
  className,
  inputRef,
  listItemSecondRowClassName,
  ...option
}) => {
  const { searchTerm, highlightSearchEnabled, setValue, toggleOpen } =
    useSelectContext();
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
    ({ label, rightComponent, subLabel, rightComponentClassName }: Option) => {
      if (isEmpty) {
        return (
          <Typography
            variant="body2"
            className="text-zinc-800 dark:text-metal-50 italic"
          >
            {label}
          </Typography>
        );
      }

      if (typeof label !== 'string') {
        return label;
      }

      const newValue =
        highlightSearchEnabled && searchTerm.length > 0
          ? highlightText(label, searchTerm)
          : [label];

      return (
        <Typography
          variant="body2"
          className="text-zinc-700 dark:text-metal-50 font-medium"
        >
          {rightComponent ? (
            <span
              className={cn('flex gap-2 items-center', rightComponentClassName)}
            >
              {newValue} {rightComponent}
            </span>
          ) : (
            newValue
          )}

          {subLabel ? (
            <span
              className={cn(
                'block font-normal text-sm text-metal-800 dark:text-metal-50',
                listItemSecondRowClassName,
              )}
            >
              {subLabel}
            </span>
          ) : null}
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
        <span
          className={cn(
            'w-4 h-4 flex justify-center',
            {
              'items-center': !option.subLabel,
              'items-baseline -tranmetal-y-2': !!option.subLabel,
            },
            option.leftIconClassName,
          )}
        >
          {option.leftIcon}
        </span>
      ) : null}

      {getLabelValue(option)}
    </li>
  );
};
