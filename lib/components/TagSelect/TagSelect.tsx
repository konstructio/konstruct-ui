import {
  ElementRef,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';

import { useToggle } from '../../hooks';
import { TagProps } from '../Tag/Tag.types';
import { Tag } from '../Tag/Tag';

import { TagSelectProps } from './TagSelect.types';

export const TagSelect: FC<TagSelectProps> = ({ options }) => {
  const wrapperRef = useRef<ElementRef<'div'>>(null);
  const [isOpen, toggleOpen] = useToggle(false);
  const [selectedTag, setSelectedTag] = useState<TagProps | null>(null);

  const handleOpenDropdown = useCallback(() => {
    toggleOpen();
  }, [toggleOpen]);

  const handleClickTag = useCallback(
    (tag: TagProps) => setSelectedTag(tag),
    [],
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
    <div ref={wrapperRef} className="flex flex-col w-full">
      <div
        className="w-full border rounded-md flex items-center px-3 py-1 justify-between cursor-pointer"
        role="combobox"
        onClick={handleOpenDropdown}
      >
        {!selectedTag ? (
          <span className="text-base">TagSelect</span>
        ) : (
          <Tag {...selectedTag} />
        )}

        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-inherit" />
        ) : (
          <ChevronDown className="w-4 h-4 text-inherit" />
        )}
      </div>

      {isOpen && (
        <ul className="w-full flex flex-col gap-3 border rounded-md mt-1 shadow-sm">
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
      )}
    </div>
  );
};
