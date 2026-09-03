import {
  ChangeEvent,
  FocusEvent,
  forwardRef,
  KeyboardEvent,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';

import { LoaderIcon } from '@/assets/icons/components';
import { cn, composeIds } from '@/utils';

import { Badge } from '../Badge/Badge';
import { Typography } from '../Typography/Typography';

import { Props } from './TagsInput.types';

const DEFAULT_DELIMITERS = ['Enter', ','];

/**
 * A free-text tags field. Typing a delimiter (Enter or comma) adds a tag,
 * Backspace on an empty input removes the last one, and `suggestions` offers
 * existing tags in a keyboard-navigable list. Mirrors the `Input` API for
 * label, error and helper text.
 *
 * @example
 * ```tsx
 * <TagsInput
 *   label="Tags"
 *   value={tags}
 *   suggestions={existingTags}
 *   helperText="Press Enter or comma to add a tag"
 *   onChange={setTags}
 * />
 * ```
 */
const TagsInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      commitOnBlur = true,
      delimiters = DEFAULT_DELIMITERS,
      disabled = false,
      error,
      errorClassName,
      helperText,
      helperTextClassName,
      id,
      isLoading = false,
      isRequired = false,
      label,
      labelAction,
      loadingText = 'Loading suggestions',
      placeholder,
      suggestions = [],
      theme,
      value,
      onBlur,
      onChange,
      onFocus,
      ...delegated
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const listboxId = `${inputId}-suggestions`;
    const errorId = `${inputId}-error`;
    const helperTextId = `${inputId}-helper-text`;
    const innerRef = useRef<HTMLInputElement | null>(null);
    const [draft, setDraft] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);

    const hasError = typeof error === 'string' && error.length > 0;
    const hasHelperText = !hasError && !!helperText;
    const describedBy = composeIds(
      hasError && errorId,
      hasHelperText && helperTextId,
    );

    const filteredSuggestions = useMemo(() => {
      const query = draft.trim().toLowerCase();

      return suggestions.filter((suggestion) => {
        return (
          !value.includes(suggestion) &&
          suggestion.toLowerCase().includes(query)
        );
      });
    }, [draft, suggestions, value]);

    const isListVisible =
      isOpen && !disabled && (isLoading || filteredSuggestions.length > 0);

    const setRefs = (node: HTMLInputElement | null) => {
      innerRef.current = node;

      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    const addTag = (tag: string) => {
      const trimmed = tag.trim();

      if (trimmed && !value.includes(trimmed)) {
        onChange([...value, trimmed]);
      }

      setDraft('');
      setActiveIndex(-1);
    };

    const removeTag = (tag: string) => {
      onChange(value.filter((current) => current !== tag));
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'ArrowDown' && filteredSuggestions.length > 0) {
        event.preventDefault();
        setIsOpen(true);
        setActiveIndex((current) => (current + 1) % filteredSuggestions.length);

        return;
      }

      if (event.key === 'ArrowUp' && filteredSuggestions.length > 0) {
        event.preventDefault();
        setActiveIndex((current) => {
          return current <= 0 ? filteredSuggestions.length - 1 : current - 1;
        });

        return;
      }

      if (event.key === 'Escape') {
        setIsOpen(false);
        setActiveIndex(-1);

        return;
      }

      if (delimiters.includes(event.key)) {
        event.preventDefault();

        if (isOpen && activeIndex >= 0 && filteredSuggestions[activeIndex]) {
          addTag(filteredSuggestions[activeIndex]);

          return;
        }

        addTag(draft);

        return;
      }

      if (event.key === 'Backspace' && draft === '' && value.length > 0) {
        event.preventDefault();
        removeTag(value[value.length - 1]);
      }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setDraft(event.target.value);
      setIsOpen(true);
      setActiveIndex(-1);
    };

    const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
      setIsOpen(true);
      onFocus?.(event);
    };

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
      if (commitOnBlur) {
        addTag(draft);
      }

      setIsOpen(false);
      setActiveIndex(-1);
      onBlur?.(event);
    };

    return (
      <div className="flex w-full flex-col gap-2" data-theme={theme}>
        {label || labelAction ? (
          <div className="flex items-center justify-between">
            {label ? (
              <Typography
                component="label"
                variant="labelLarge"
                htmlFor={inputId}
                className="cursor-pointer text-slate-800 dark:text-metal-50"
              >
                {label}
                {isRequired ? (
                  <span
                    aria-hidden="true"
                    className="ml-1 text-red-600 dark:text-red-500"
                  >
                    *
                  </span>
                ) : null}
              </Typography>
            ) : null}

            {labelAction}
          </div>
        ) : null}

        <div
          role="presentation"
          className={cn(
            'relative flex min-h-10 w-full flex-wrap items-center gap-2 rounded border bg-white px-2.5 py-2 transition-all',
            'focus-within:border-transparent focus-within:ring-1',
            'dark:bg-metal-800',
            hasError
              ? 'border-red-600 focus-within:ring-red-600 dark:border-red-500 dark:focus-within:ring-red-500'
              : 'border-gray-200 focus-within:ring-aurora-500 dark:border-metal-700',
            disabled && 'cursor-not-allowed bg-gray-100 dark:bg-metal-900',
            className,
          )}
          onClick={() => {
            innerRef.current?.focus();
          }}
        >
          {value.map((tag) => (
            <Badge
              key={tag}
              label={tag}
              dismissible
              onDismiss={() => {
                if (!disabled) {
                  removeTag(tag);
                }
              }}
            />
          ))}

          <input
            {...delegated}
            ref={setRefs}
            id={inputId}
            type="text"
            role="combobox"
            value={draft}
            placeholder={value.length === 0 ? placeholder : undefined}
            disabled={disabled}
            autoComplete="off"
            aria-expanded={isListVisible}
            aria-controls={isListVisible ? listboxId : undefined}
            aria-autocomplete="list"
            aria-invalid={hasError || undefined}
            aria-describedby={describedBy}
            aria-required={isRequired || undefined}
            className="min-w-24 flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed dark:text-metal-50 dark:placeholder:text-metal-400"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          {isLoading ? (
            <span role="status" className="flex items-center">
              <LoaderIcon
                size={16}
                aria-hidden="true"
                className="animate-spin text-metal-400"
              />
              <span className="sr-only">{loadingText}</span>
            </span>
          ) : null}

          {isListVisible ? (
            <div
              id={listboxId}
              role="listbox"
              className="absolute left-0 top-full z-10 mt-1 flex max-h-44 w-full flex-col overflow-y-auto rounded border border-gray-200 bg-white py-2 shadow-2xs animate-in fade-in-50 zoom-in-95 duration-200 dark:border-metal-700 dark:bg-metal-800"
            >
              {isLoading ? (
                <span className="select-none px-6 py-1.5 text-sm text-slate-500 dark:text-metal-300">
                  {loadingText}
                </span>
              ) : (
                filteredSuggestions.map((suggestion, index) => (
                  <button
                    key={suggestion}
                    type="button"
                    role="option"
                    tabIndex={-1}
                    aria-selected={index === activeIndex}
                    className={cn(
                      'flex min-h-10 w-full cursor-pointer items-center px-6 py-1.5 text-left text-sm text-slate-800 transition-colors hover:bg-gray-50 dark:text-metal-50 dark:hover:bg-metal-700',
                      index === activeIndex && 'bg-gray-50 dark:bg-metal-700',
                    )}
                    onMouseDown={(event) => {
                      event.preventDefault();
                    }}
                    onClick={() => {
                      addTag(suggestion);
                    }}
                  >
                    {suggestion}
                  </button>
                ))
              )}
            </div>
          ) : null}
        </div>

        {hasError ? (
          <Typography
            component="span"
            id={errorId}
            className={cn(
              'text-xs tracking-normal text-red-700 dark:text-red-400',
              errorClassName,
            )}
          >
            {error}
          </Typography>
        ) : null}

        {hasHelperText ? (
          <Typography
            component="span"
            id={helperTextId}
            className={cn(
              'text-xs text-slate-600 dark:text-slate-200',
              helperTextClassName,
            )}
          >
            {helperText}
          </Typography>
        ) : null}
      </div>
    );
  },
);

TagsInput.displayName = 'KonstructTagsInput';

export { TagsInput };
