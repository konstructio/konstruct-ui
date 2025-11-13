import {
  ComponentRef,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useImperativeHandle,
  useRef,
} from 'react';

import { cn } from '@/utils';

import { useDropdownContext } from '../../contexts';
import { useNavigationUlList } from '../../hooks/useNavigationList';

import { ListItem } from '../ListItem/ListItem';

import { ListProps } from './List.types';
import { listVariants } from './List.variants';
import { Slot } from '@radix-ui/react-slot';

export const List: ForwardRefExoticComponent<
  ListProps & RefAttributes<ComponentRef<'ul'>>
> = forwardRef<ComponentRef<'ul'>, ListProps>(
  (
    {
      additionalOptions,
      className,
      inputRef,
      isLoading,
      itemClassName,
      name,
      options,
      searchable = false,
      listItemSecondRowClassName,
      wrapperInputRef,
      wrapperRef,
    },
    ref,
  ) => {
    const ulRef = useRef<ComponentRef<'ul'>>(null);
    const { isOpen, searchTerm, canFilter } = useDropdownContext();

    useImperativeHandle(ref, () => ulRef.current!, [ulRef]);

    useNavigationUlList({
      ulRef,
      wrapperRef,
      wrapperInputRef,
      inputRef,
      searchable,
    });

    const filteredOptions =
      searchable && canFilter
        ? options.filter((option) => {
            const searchLower = searchTerm.toLowerCase();
            const label =
              typeof option.label === 'string'
                ? option.label.toLowerCase()
                : '';
            return label.includes(searchLower);
          })
        : options;

    const isEmpty = filteredOptions.length === 0;

    return (
      <ul
        ref={ulRef}
        title={name}
        role="listbox"
        className={cn(listVariants({ className }))}
        data-state={isOpen ? 'open' : 'closed'}
      >
        {isLoading ? (
          <ListItem
            className={cn('select-none', itemClassName)}
            isClickable={false}
            inputRef={inputRef}
            value="Loading..."
            label="Loading..."
            listItemSecondRowClassName={listItemSecondRowClassName}
          />
        ) : isEmpty ? (
          <ListItem
            className={cn('select-none', itemClassName)}
            isClickable={false}
            inputRef={inputRef}
            value="No options"
            label="No options"
            listItemSecondRowClassName={listItemSecondRowClassName}
          />
        ) : (
          <>
            {filteredOptions.map((option) => (
              <ListItem
                key={option.value}
                className={cn('select-none', itemClassName)}
                isClickable
                inputRef={inputRef}
                listItemSecondRowClassName={listItemSecondRowClassName}
                {...option}
              />
            ))}

            {additionalOptions?.map((option, index) => (
              <li key={index} role="option" data-action="true">
                <Slot className="flex p-2 w-full h-full gap-1 items-center text-sm [&>svg]:w-3.5 [&>svg]:h-3.5 [&>svg]:shrink-0 cursor-pointer select-none hover:bg-gray-50 hover:dark:bg-slate-700 focus:outline-0">
                  {option}
                </Slot>
              </li>
            ))}
          </>
        )}
      </ul>
    );
  },
);
