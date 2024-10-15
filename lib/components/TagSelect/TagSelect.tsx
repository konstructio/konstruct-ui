import {
  ElementRef,
  FC,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';

import { useToggle } from '../../hooks';
import { TagProps } from '../Tag/Tag.types';
import { Tag } from '../Tag/Tag';

import { TagSelectProps } from './TagSelect.types';
import { twMerge } from 'tailwind-merge';

export const TagSelect: FC<TagSelectProps> = ({
  options,
  name,
  label,
  placeholder = 'Select a value...',
}) => {
  const id = useId();
  const wrapperRef = useRef<ElementRef<'div'>>(null);
  const inputRef = useRef<ElementRef<'input'>>(null);
  const [isOpen, toggleOpen] = useToggle(false);
  const [selectedTag, setSelectedTag] = useState<TagProps | null>(null);
  const [value, setValue] = useState('');

  const handleOpenDropdown = useCallback(() => {
    toggleOpen();
  }, [toggleOpen]);

  const handleClickTag = useCallback(
    (tag: TagProps) => {
      setSelectedTag(tag);
      toggleOpen(false);
      setValue(tag.label);
    },
    [toggleOpen],
  );

  useEffect(() => {
    const controller = new AbortController();

    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        toggleOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        toggleOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyboard, {
      signal: controller.signal,
    });

    document.addEventListener('mousedown', handleClickOutside, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  }, [toggleOpen, wrapperRef]);

  return (
    <div ref={wrapperRef} className="flex flex-col w-full relative">
      {label ? (
        <label className="m-2 cursor-pointer" htmlFor={name ?? id}>
          {label}
        </label>
      ) : null}

      <div
        id={name ?? id}
        className="w-full border rounded-md flex items-center px-3 py-1 justify-between cursor-pointer"
        role="combobox"
        onClick={handleOpenDropdown}
      >
        {!selectedTag ? (
          <span className="text-base">{placeholder}</span>
        ) : (
          <Tag {...selectedTag} />
        )}

        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-inherit" />
        ) : (
          <ChevronDown className="w-4 h-4 text-inherit" />
        )}
      </div>

      <input
        ref={inputRef}
        type="text"
        name={name}
        className="hidden"
        value={value}
      />

      <ul
        className={twMerge(
          'w-full flex-col gap-3 border rounded-md mt-1 shadow-sm absolute top-full z-10 bg-white transition-all duration-100',
          !isOpen ? 'h-0 hidden' : 'h-max flex',
        )}
      >
        {options.map((tag) => (
          <li className="cursor-pointer py-0.5 px-2 last:pb-2 first:pt-2">
            <button
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
};
