import {
  ElementRef,
  FC,
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
} from 'react';
import { ChevronUp } from 'react-feather';

import { useTheme } from '../../contexts';
import { cn } from '../../utils';
import { Tag } from '../Tag/Tag';

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

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = value;
    }
  }, [value]);

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
          className={cn(
            'w-4 h-4 text-inherit transition-all duration-50',
            isOpen ? 'rotate-0' : 'rotate-180',
          )}
        />
      </div>

      <input ref={inputRef} type="text" name={name} className="hidden" />

      {isOpen ? (
        <ul
          role="listbox"
          className={cn(tagListVariants({ theme: theme ?? themeContext }))}
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
      ) : null}
    </div>
  );
});
