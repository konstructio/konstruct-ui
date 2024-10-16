import {
  ElementRef,
  FC,
  forwardRef,
  useId,
  useImperativeHandle,
  useRef,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { ChevronUp } from 'react-feather';

import { Tag } from '../Tag/Tag';
import { useTheme } from '../../contexts';

import { TagSelectProps } from './TagSelect.types';
import { useTagSelect } from './hooks/useTagSelect';
import {
  tagItemVariants,
  tagListVariants,
  tagSelectVariants,
} from './TagSelect.variants';

export const TagSelect: FC<TagSelectProps> = forwardRef<
  HTMLInputElement,
  TagSelectProps
>(({ label, name, options, placeholder = 'Select a value...', theme }, ref) => {
  const id = useId();
  const { theme: themeContext } = useTheme();
  const inputRef = useRef<ElementRef<'input'>>(null);
  const {
    isOpen,
    selectedTag,
    value,
    wrapperRef,
    handleClickTag,
    handleOpenDropdown,
  } = useTagSelect();

  useImperativeHandle(ref, () => inputRef.current!, [inputRef]);

  return (
    <div ref={wrapperRef} className="flex flex-col w-full relative">
      {label ? (
        <label className="m-2 cursor-pointer" htmlFor={name ?? id}>
          {label}
        </label>
      ) : null}

      <div
        id={name ?? id}
        className={tagSelectVariants({ theme: theme ?? themeContext })}
        role="combobox"
        onClick={handleOpenDropdown}
        aria-expanded={isOpen}
      >
        {!selectedTag ? (
          <span className="text-base text-inherit">{placeholder}</span>
        ) : (
          <Tag {...selectedTag} />
        )}

        <ChevronUp
          className={twMerge(
            'w-4 h-4 text-inherit transition-all duration-50',
            isOpen ? 'rotate-180' : 'rotate-0',
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

      <ul
        role="listbox"
        className={twMerge(
          tagListVariants({ theme: theme ?? themeContext }),
          isOpen ? 'opacity-100' : 'opacity-0 -z-50',
        )}
      >
        {options.map((tag) => (
          <li
            className={tagItemVariants({ theme: theme ?? themeContext })}
            role="option"
          >
            <button
              type="button"
              role="button"
              className="m-0 p-0 w-full"
              onClick={() => handleClickTag(tag)}
            >
              <Tag label={tag.label} color={tag.color} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});
