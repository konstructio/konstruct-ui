import { ElementRef, FC, useId, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { ChevronUp } from 'react-feather';

import { useTheme } from '../../../contexts';
import { DropdownProps } from '../Dropdown.types';
import { dropdownVariants } from '../Dropdown.variants';
import { useDropdown } from '../hooks/useDropdown';

import { List } from './List/List';
import { useDropdownContext } from '../contexts';

export const Wrapper: FC<DropdownProps> = ({
  theme,
  label,
  placeholder,
  name,
  options,
}) => {
  const id = useId();
  const inputRef = useRef<ElementRef<'input'>>(null);
  const { wrapperRef, handleOpen, handleOpenIfClosed } = useDropdown();
  const { isOpen, value } = useDropdownContext();
  const { theme: themeContext } = useTheme();
  const inheritTheme = theme ?? themeContext;

  return (
    <div ref={wrapperRef} className="flex flex-col w-full relative">
      {label ? (
        <label
          className="m-2 cursor-pointer"
          htmlFor={name ?? id}
          onClick={handleOpenIfClosed}
        >
          {label}
        </label>
      ) : null}

      <div
        id={name ?? id}
        className={dropdownVariants({ theme: inheritTheme })}
        role="combobox"
        onClick={handleOpen}
        aria-expanded={isOpen}
      >
        <span className="text-base text-inherit">
          {value ? value : placeholder}
        </span>

        <ChevronUp
          className={twMerge(
            'w-4 h-4 text-inherit transition-all duration-50',
            isOpen ? 'rotate-0' : 'rotate-180',
          )}
        />
      </div>

      <input
        ref={inputRef}
        type="text"
        name={name}
        className="hidden"
        value={value}
        readOnly={true}
      />

      <List options={options} theme={inheritTheme} />
    </div>
  );
};
