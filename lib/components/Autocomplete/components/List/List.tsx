import { ComponentRef, FC, useRef } from 'react';

import { cn } from '../../../../utils';
import { useNavigationUlList } from '../../hooks';

import { Props } from './List.types';
import {
  buttonVariants,
  emptyListVariants,
  listItemVariants,
  listVariants,
} from './List.variants';

export const List: FC<Props> = ({
  className,
  inputRef,
  options,
  placeholder,
  placeholderClassName,
  variant,
  wrapperRef,
  onClick,
}) => {
  const ulRef = useRef<ComponentRef<'ul'>>(null);

  useNavigationUlList({ ulRef, inputRef, wrapperRef, options });

  if (options.length === 0) {
    return (
      <span
        className={cn(
          emptyListVariants({
            variant,
            className: placeholderClassName,
          }),
        )}
      >
        {placeholder}
      </span>
    );
  }

  return (
    <ul
      ref={ulRef}
      role="listbox"
      className={cn(listVariants({ variant, className }))}
    >
      {options.map(({ value }) => (
        <li
          key={value}
          role="option"
          tabIndex={0}
          className={cn(listItemVariants({ variant }))}
        >
          <button
            type="button"
            role="button"
            className={cn(buttonVariants({ variant }))}
            onClick={() => onClick(value)}
          >
            {value}
          </button>
        </li>
      ))}
    </ul>
  );
};
