import { ElementRef, FC, ReactNode, RefObject, useMemo, useRef } from 'react';

import { useNavigationUlList } from '../hooks';
import { Option } from '../Autocomplete.types';
import { twMerge } from 'tailwind-merge';

type Props = {
  options: Option[];
  placeholder: string | ReactNode;
  inputRef: RefObject<HTMLInputElement>;
  onClick(value: string): void;
};

export const List: FC<Props> = ({
  options,
  placeholder,
  inputRef,
  onClick,
}) => {
  const ulRef = useRef<ElementRef<'ul'>>(null);

  useNavigationUlList({ ulRef: ulRef, inputRef, options });

  const hasOptions = useMemo(() => options.length > 0, [options.length]);

  return (
    <>
      <span
        className={twMerge(
          'p-1 text-center w-full block',
          hasOptions && 'hidden',
        )}
      >
        {placeholder}
      </span>

      <ul
        ref={ulRef}
        className={twMerge(
          'max-h-[250px] overflow-y-auto',
          !hasOptions && 'hidden',
        )}
      >
        {options.map(({ value }) => (
          <li
            key={value}
            tabIndex={0}
            className="focus:bg-slate-50 focus-visible:outline-none"
          >
            <button
              type="button"
              role="button"
              className="cursor-pointer focus:bg-slate-100 focus-visible:outline-none hover:bg-slate-50 px-3 py-1.5 w-full text-left"
              onClick={() => onClick(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
