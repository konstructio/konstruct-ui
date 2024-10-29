import {
  ElementRef,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useImperativeHandle,
  useRef,
} from 'react';
import { twMerge } from 'tailwind-merge';

import { useNavigationUlList } from '../../hooks/useNavigationList';
import { useDropdownContext } from '../../contexts';
import { ListItem } from '../ListItem/ListItem';

import { ListProps } from './List.types';
import { listVariants } from './List.variants';

export const List: ForwardRefExoticComponent<
  ListProps & RefAttributes<ElementRef<'ul'>>
> = forwardRef<ElementRef<'ul'>, ListProps>(
  ({ options, theme, wrapperRef, wrapperInputRef }, ref) => {
    const ulRef = useRef<ElementRef<'ul'>>(null);
    const { isOpen } = useDropdownContext();

    useImperativeHandle(ref, () => ulRef.current!, [ulRef]);

    useNavigationUlList({ ulRef, wrapperRef, wrapperInputRef });

    return (
      <ul
        ref={ulRef}
        role="listbox"
        className={twMerge(listVariants({ theme }), isOpen ? 'flex' : 'hidden')}
      >
        {options.map((option) => (
          <ListItem key={option.value} theme={theme} {...option} />
        ))}
      </ul>
    );
  },
);
