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
  ({ options, theme, wrapperRef, wrapperInputRef, name }, ref) => {
    const ulRef = useRef<ComponentRef<'ul'>>(null);
    const { isOpen } = useDropdownContext();

    useImperativeHandle(ref, () => ulRef.current!, [ulRef]);

    useNavigationUlList({ ulRef, wrapperRef, wrapperInputRef });

    return (
      <ul
        ref={ulRef}
        title={name}
        role="listbox"
        className={cn(listVariants({ theme }), isOpen ? 'flex' : 'hidden')}
      >
        {options.map((option) => (
          <ListItem key={option.value} theme={theme} {...option} />
        ))}
      </ul>
    );
  },
);
