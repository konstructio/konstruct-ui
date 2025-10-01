import {
  ComponentRef,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useImperativeHandle,
  useRef,
} from 'react';

import { cn } from '../../../../utils';
import { useNavigationUlList } from '../../hooks/useNavigationList';
import { useDropdownContext } from '../../contexts';
import { ListItem } from '../ListItem/ListItem';

import { ListProps } from './List.types';
import { listVariants } from './List.variants';

export const List: ForwardRefExoticComponent<
  ListProps & RefAttributes<ComponentRef<'ul'>>
> = forwardRef<ComponentRef<'ul'>, ListProps>(
  (
    {
      className,
      isLoading,
      itemClassName,
      name,
      options,
      searchable = false,
      wrapperInputRef,
      wrapperRef,
    },
    ref,
  ) => {
    const ulRef = useRef<ComponentRef<'ul'>>(null);
    const { isOpen, searchTerm } = useDropdownContext();

    useImperativeHandle(ref, () => ulRef.current!, [ulRef]);

    useNavigationUlList({ ulRef, wrapperRef, wrapperInputRef });

    const filteredOptions = searchable
      ? options.filter((option) => {
          const searchLower = searchTerm.toLowerCase();
          const label =
            typeof option.label === 'string' ? option.label.toLowerCase() : '';
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
            value="Loading..."
            label="Loading..."
          />
        ) : isEmpty ? (
          <ListItem
            className={cn('select-none', itemClassName)}
            isClickable={false}
            value="No options"
            label="No options"
          />
        ) : (
          filteredOptions.map((option) => (
            <ListItem
              key={option.value}
              className={cn('select-none', itemClassName)}
              isClickable
              {...option}
            />
          ))
        )}
      </ul>
    );
  },
);
