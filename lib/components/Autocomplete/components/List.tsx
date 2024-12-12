import { ComponentRef, FC, useRef } from 'react';

import { useNavigationUlList } from '../hooks';

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
  theme,
  wrapperRef,
  onClick,
}) => {
  const ulRef = useRef<ComponentRef<'ul'>>(null);

  useNavigationUlList({ ulRef, inputRef, wrapperRef, options });

  if (options.length === 0) {
    return (
      <span
        className={emptyListVariants({
          theme,
          variant,
          className: placeholderClassName,
        })}
      >
        {placeholder}
      </span>
    );
  }

  return (
    <ul
      ref={ulRef}
      role="listbox"
      className={listVariants({ variant, theme, className })}
    >
      {options.map(({ value }) => (
        <li
          key={value}
          role="option"
          tabIndex={0}
          className={listItemVariants({ theme, variant })}
        >
          <button
            type="button"
            role="button"
            className={buttonVariants({ theme, variant })}
            onClick={() => onClick(value)}
          >
            {value}
          </button>
        </li>
      ))}
    </ul>
  );
};
