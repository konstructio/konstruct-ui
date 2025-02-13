import {
  ComponentRef,
  FC,
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
} from 'react';
import { ChevronUp } from 'react-feather';

import { Tag } from '@/components/Tag/Tag';
import { useTheme } from '@/contexts';
import { cn } from '@/utils';

import { useTagSelect } from './hooks/useTagSelect';
import { TagSelectProps } from './TagSelect.types';
import {
  labelVariants,
  tagItemVariants,
  tagListVariants,
  tagSelectVariants,
  wrapperTagSelectVariants,
} from './TagSelect.variants';

export const TagSelect: FC<TagSelectProps> = forwardRef<
  HTMLInputElement,
  TagSelectProps
>(
  (
    {
      label,
      name,
      options,
      placeholder = 'Select a value...',
      theme,
      labelClassName,
      wrapperClassName,
    },
    ref,
  ) => {
    const id = useId();
    const { theme: themeContext } = useTheme();
    const inheritTheme = theme ?? themeContext;
    const inputRef = useRef<ComponentRef<'input'>>(null);
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
      <div
        ref={wrapperRef}
        className={cn(
          wrapperTagSelectVariants({
            theme: inheritTheme,
            className: wrapperClassName,
          }),
        )}
      >
        {label ? (
          <label
            htmlFor={name ?? id}
            className={cn(
              labelVariants({
                theme: inheritTheme,
                className: labelClassName,
              }),
            )}
            onClick={() => handleOpenDropdown(true)}
          >
            {label}
          </label>
        ) : null}

        <div
          id={name ?? id}
          className={cn(tagSelectVariants({ theme: inheritTheme }))}
          role="combobox"
          onClick={() => handleOpenDropdown()}
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
            className={cn(tagListVariants({ theme: inheritTheme }))}
          >
            {options.map((tag) => (
              <li
                className={cn(tagItemVariants({ theme: inheritTheme }))}
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
  },
);
