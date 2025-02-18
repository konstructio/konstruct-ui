import {
  ComponentRef,
  FC,
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
} from 'react';
import { ChevronUp, X } from 'react-feather';

import { Tag } from '@/components/Tag/Tag';
import { useTheme } from '@/contexts';
import { cn } from '@/utils';

import { useTagSelect as useTagSelectContext } from '../../contexts';
import { useTagSelect } from '../../hooks/useTagSelect';
import { TagSelectProps } from '../../TagSelect.types';
import {
  labelVariants,
  tagSelectVariants,
  wrapperVariants,
} from '../../TagSelect.variants';
import { List } from '../List/List';

import { WrapperProps } from './Wrapper.types';

export const Wrapper: FC<WrapperProps> = forwardRef<
  HTMLInputElement,
  TagSelectProps
>(
  (
    {
      label,
      labelClassName,
      name,
      options,
      placeholder = 'Select a value...',
      theme,
      wrapperClassName,
    },
    ref,
  ) => {
    const id = useId();
    const { theme: themeContext } = useTheme();
    const { selectedTags } = useTagSelectContext();
    const inheritTheme = theme ?? themeContext;
    const inputRef = useRef<ComponentRef<'input'>>(null);
    const { isOpen, wrapperRef, handleOpenDropdown } = useTagSelect();

    useImperativeHandle(ref, () => inputRef.current!, [inputRef]);

    useEffect(() => {
      if (inputRef.current) {
        const values = selectedTags.map(({ id, label }) => ({
          id,
          value: label,
        }));

        inputRef.current.value = JSON.stringify(values);
      }
    }, [selectedTags]);

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
          {selectedTags.length === 0 ? (
            <span className="text-base text-inherit select-none">
              {placeholder}
            </span>
          ) : (
            <>
              {selectedTags.map((tag) => (
                <Tag
                  key={tag.id}
                  {...tag}
                  rightIcon={<X className="w-3 h-3" />}
                />
              ))}
            </>
          )}

          <ChevronUp
            className={cn(
              'w-4 h-4 text-inherit transition-all duration-50',
              isOpen ? 'rotate-0' : 'rotate-180',
            )}
          />
        </div>

        <input ref={inputRef} type="text" name={name} className="hidden" />

        {isOpen ? <List theme={inheritTheme} options={options} /> : null}
      </div>
    );
  },
);
