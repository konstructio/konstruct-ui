import { FC, forwardRef, useId, useImperativeHandle } from 'react';
import { ChevronUp, X } from 'react-feather';

import { Tag } from '@/components/Tag/Tag';
import { useTheme } from '@/contexts';
import { cn } from '@/utils';

import { useTagSelect as useTagSelectContext } from '../../contexts';
import { useTagSelect } from '../../hooks/useTagSelect';
import {
  labelVariants,
  tagSelectVariants,
  wrapperVariants,
} from '../../TagSelect.variants';
import { List } from '../List/List';

import { WrapperProps } from './Wrapper.types';

export const Wrapper: FC<WrapperProps> = forwardRef<
  HTMLInputElement,
  WrapperProps
>(
  (
    {
      label,
      labelClassName,
      name,
      placeholder = 'Select a value...',
      theme,
      wrapperClassName,
    },
    ref,
  ) => {
    const id = useId();
    const { theme: themeContext } = useTheme();
    const { selectedTags, isOpen, onOpen, onRemoveTag, inputRef } =
      useTagSelectContext();
    const { wrapperRef, handleOpen } = useTagSelect();
    const inheritTheme = theme ?? themeContext;

    useImperativeHandle(ref, () => inputRef!.current!, [inputRef]);

    return (
      <div
        ref={wrapperRef}
        className={cn(
          wrapperVariants({
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
            onClick={() => onOpen(true)}
          >
            {label}
          </label>
        ) : null}

        <div
          id={name ?? id}
          className={cn(tagSelectVariants({ theme: inheritTheme }))}
          role="combobox"
          onClick={handleOpen}
          aria-expanded={isOpen}
        >
          {selectedTags.length === 0 ? (
            <span className="text-base text-inherit select-none">
              {placeholder}
            </span>
          ) : (
            <div className="flex flex-wrap gap-1.5">
              {selectedTags.map((tag) => (
                <Tag
                  key={tag.id}
                  {...tag}
                  className="select-none"
                  rightIcon={
                    <X className="w-3 h-3" onClick={() => onRemoveTag(tag)} />
                  }
                  data-value={tag.label}
                />
              ))}
            </div>
          )}

          <ChevronUp
            className={cn(
              'w-4 h-4 text-inherit transition-all duration-50 shrink-0',
              isOpen ? 'rotate-0' : 'rotate-180',
            )}
          />
        </div>

        <input ref={inputRef} type="text" name={name} className="hidden" />

        {isOpen ? <List theme={inheritTheme} /> : null}
      </div>
    );
  },
);
