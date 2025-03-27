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
  ({ isLoading, options, theme, wrapperRef, wrapperInputRef, name }, ref) => {
    const ulRef = useRef<ComponentRef<'ul'>>(null);
    const { isOpen } = useDropdownContext();

    useImperativeHandle(ref, () => ulRef.current!, [ulRef]);

    useNavigationUlList({ ulRef, wrapperRef, wrapperInputRef });

    const isEmpty = options.length === 0;

    return (
      <ul
        ref={ulRef}
        title={name}
        role="listbox"
        className={cn(listVariants({ theme }), isOpen ? 'flex' : 'hidden')}
      >
        {isLoading ? (
          <ListItem
            theme={theme}
            isClickable={false}
            value="Loading..."
            label="Loading..."
          />
        ) : isEmpty ? (
          <ListItem
            theme={theme}
            isClickable={false}
            value="No options"
            label="No options"
          />
        ) : (
          options.map((option) => (
            <ListItem
              key={option.value}
              theme={theme}
              isClickable
              {...option}
            />
          ))
        )}
      </ul>
    );
  },
);
