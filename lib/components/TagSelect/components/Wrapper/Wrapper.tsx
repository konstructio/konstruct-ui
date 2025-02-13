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
          <List
            theme={inheritTheme}
            options={options}
            handleClickTag={handleClickTag}
          />
        ) : null}
      </div>
    );
  },
);
