import { ElementRef, FC, useId, useRef } from 'react';
import { ChevronUp } from 'react-feather';
import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../contexts';

import { List } from './components';
import { useDropdown } from './hooks/useDropdown';
import { DropdownProps } from './Dropdown.types';
import { dropdownVariants } from './Dropdown.variants';

export const Dropdown: FC<DropdownProps> = ({
  label,
  name,
  theme,
  placeholder,
  options,
}) => {
  const id = useId();
  const { theme: themeContext } = useTheme();
  const inputRef = useRef<ElementRef<'input'>>(null);
  const inheritTheme = theme ?? themeContext;
  const {
    wrapperRef,
    isOpen,
    value,
    handleOpenDropdown,
    handleOpenDropdownIfClosed,
  } = useDropdown();

  return (
    <div ref={wrapperRef} className="flex flex-col w-full relative">
      {label ? (
        <label
          className="m-2 cursor-pointer"
          htmlFor={name ?? id}
          onClick={handleOpenDropdownIfClosed}
        >
          {label}
        </label>
      ) : null}

      <div
        id={name ?? id}
        className={dropdownVariants({ theme: inheritTheme })}
        role="combobox"
        onClick={handleOpenDropdown}
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
      />

      {isOpen ? <List options={options} theme={inheritTheme} /> : null}
    </div>
  );
};
