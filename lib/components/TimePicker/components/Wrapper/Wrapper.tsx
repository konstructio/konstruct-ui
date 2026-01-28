import { ChevronDownIcon } from 'lucide-react';
import {
  FC,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  ChangeEvent,
  FocusEvent,
} from 'react';

import { Typography } from '@/components/Typography/Typography';
import { cn } from '@/utils';

import { useTimePickerContext } from '../../contexts';
import { timePickerVariants } from '../../TimePicker.variants';
import { parseTimeString } from '../../utils';
import { WrapperList } from '../WrapperList/WrapperList';

import { WrapperProps } from './Wrapper.types';

export const Wrapper: FC<WrapperProps> = ({
  name,
  label,
  isRequired,
  scrollBehavior,
  className,
  listClassName,
  listItemClassName,
  listItemButtonClassName,
  disabled,
  mode = 'select',
  showList = true,
  error: externalError,
  placeholder,
}) => {
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);
  const isTypingRef = useRef(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { format, formattedTime, setTimeDirectly, setIsTyping } =
    useTimePickerContext();
  const labelId = name ?? `time-${id}`;

  const [inputValue, setInputValue] = useState(formattedTime);
  const [internalError, setInternalError] = useState<string | undefined>();

  // External error takes precedence, then internal validation error
  const displayError = externalError || internalError;

  // Sync external time changes to input value (only when not actively typing)
  useEffect(() => {
    if (!isTypingRef.current) {
      setInputValue(formattedTime);
      setInternalError(undefined);
    }
  }, [formattedTime]);

  const handleOpen = useCallback(() => {
    if (!disabled) {
      setIsOpen((status) => !status);
    }
  }, [disabled]);

  const handleInputFocus = useCallback(() => {
    if (!disabled && showList) {
      setIsOpen(true);
    }
    // Clear error when focusing
    setInternalError(undefined);
  }, [disabled, showList]);

  // Reset typing flag when clicking on the list (before blur fires)
  const handleWrapperMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      // If clicking inside wrapper but not on the input, it's a list click
      if (e.target !== inputRef.current) {
        isTypingRef.current = false;
        setIsTyping(false);
      }
    },
    [setIsTyping],
  );

  const handleInputBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      // Don't close if clicking inside the wrapper (e.g., on the list)
      if (wrapperRef.current?.contains(e.relatedTarget as Node)) {
        return;
      }
      isTypingRef.current = false;
      setIsTyping(false);
      setIsOpen(false);

      // Validate and update time on blur - read directly from event target
      const value = e.currentTarget.value.trim();
      if (value === '') {
        setInternalError(undefined);
        return;
      }

      const parsed = parseTimeString(value, format);
      if (parsed) {
        setInternalError(undefined);
        setTimeDirectly(parsed);

        // Auto-format the input value
        const hours = parsed.getHours();
        const minutes = parsed.getMinutes().toString().padStart(2, '0');

        if (format === '24') {
          setInputValue(`${hours.toString().padStart(2, '0')}:${minutes}`);
        } else {
          // 12-hour format
          const displayHours = hours % 12 || 12;
          const meridian = hours >= 12 ? 'PM' : 'AM';
          setInputValue(`${displayHours}:${minutes} ${meridian}`);
        }
      } else {
        setInternalError('Invalid time');
      }
    },
    [format, setTimeDirectly, setIsTyping],
  );

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const rawValue = e.target.value;
      let value = '';

      // Mark as typing to prevent sync from overwriting and enable list scroll
      isTypingRef.current = true;
      setIsTyping(true);

      // Detect if user is deleting (new value is shorter)
      const isDeleting = rawValue.length < inputValue.length;

      if (format === '12') {
        // 12-hour format: allow typing patterns like "1:30 PM", "12:00 AM"
        // Max length: 8 characters (e.g., "12:00 PM")
        const filtered = rawValue
          .replace(/[^0-9:apmAPM\s]/g, '')
          .replace(/[apm]/gi, (char) => char.toUpperCase());

        // Validate structure as user types
        const match = filtered.match(/^(\d{0,2}):?(\d{0,2})\s?(A|AM|P|PM)?$/i);
        if (match || filtered === '') {
          value = filtered.slice(0, 8);

          // Auto-insert colon after 2 digits if no colon exists (only when not deleting)
          if (!isDeleting && /^\d{2}$/.test(value)) {
            value = value + ':';
          }
        } else {
          // Keep previous valid value
          value = inputValue;
        }
      } else {
        // 24-hour format: only digits and colon, max 5 chars (e.g., "23:59")
        // Remove invalid chars and ensure only one colon
        value = rawValue
          .replace(/[^0-9:]/g, '')
          .replace(/:+/g, ':') // Replace multiple colons with single colon
          .slice(0, 5);

        // Auto-insert colon after 2 digits if no colon exists (only when not deleting)
        if (!isDeleting && /^\d{2}$/.test(value)) {
          value = value + ':';
        }
      }

      setInputValue(value);
      // Clear error while typing
      setInternalError(undefined);

      // Try to parse and update time as user types (for list sync)
      const parsed = parseTimeString(value, format);
      if (parsed) {
        setTimeDirectly(parsed);
      }
    },
    [format, inputValue, setTimeDirectly, setIsTyping],
  );

  useEffect(() => {
    const controller = new AbortController();

    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside, {
      signal: controller.signal,
    });

    document.addEventListener('keydown', handleKeyboard, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      onMouseDown={mode === 'input' ? handleWrapperMouseDown : undefined}
      className={cn(
        'w-full',
        'text-slate-800',
        'text-sm',
        'flex',
        'flex-col',
        'gap-2',
      )}
    >
      {label ? (
        <Typography
          component="label"
          variant="labelLarge"
          htmlFor={labelId}
          className="font-medium"
        >
          {label}{' '}
          {isRequired && (
            <Typography
              component="span"
              className="text-red-600 dark:text-red-500 text-sm font-normal"
            >
              *
            </Typography>
          )}
        </Typography>
      ) : null}

      <div className="relative">
        {mode === 'select' ? (
          <button
            aria-label={labelId}
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-controls="time-options"
            className={cn(
              timePickerVariants({ className }),
              disabled && 'opacity-50 cursor-not-allowed',
            )}
            data-open={isOpen}
            onClick={handleOpen}
            disabled={disabled}
          >
            {formattedTime}
            <ChevronDownIcon
              className="w-4 h-4 transition-all text-gray-400 data-[open=true]:rotate-180"
              data-open={isOpen}
            />
          </button>
        ) : (
          <div className="flex flex-col gap-1">
            <input
              ref={inputRef}
              type="text"
              aria-label={labelId}
              value={inputValue}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              disabled={disabled}
              data-error={!!displayError}
              data-open={isOpen}
              placeholder={placeholder}
              className={cn(
                'w-full',
                'h-10',
                'px-2.5',
                'text-sm',
                'rounded',
                'border',
                'border-gray-300',
                'bg-white',
                'text-slate-800',
                'transition-all',
                'placeholder:text-slate-400',
                'focus-visible:outline-none',
                'data-[open=true]:ring-1',
                'data-[open=true]:ring-aurora-500',
                'dark:bg-metal-800',
                'dark:border-metal-700',
                'dark:text-white',
                'dark:placeholder:text-metal-300',
                'dark:data-[open=true]:ring-aurora-500',
                'disabled:cursor-not-allowed',
                'disabled:bg-gray-50',
                'disabled:text-slate-500',
                'dark:disabled:bg-metal-900',
                'dark:disabled:text-metal-400',
                {
                  'border-red-600 data-[open=true]:border-red-600 data-[open=true]:ring-transparent dark:border-red-500':
                    displayError,
                },
              )}
            />
            {displayError && (
              <Typography
                component="span"
                className="text-red-600 dark:text-red-500 text-xs"
              >
                {displayError}
              </Typography>
            )}
          </div>
        )}

        {showList && (
          <WrapperList
            isOpen={isOpen}
            scrollBehavior={scrollBehavior}
            listClassName={listClassName}
            listItemClassName={listItemClassName}
            listItemButtonClassName={listItemButtonClassName}
            onClose={() => setIsOpen(false)}
          />
        )}
      </div>

      <input
        type="hidden"
        name={labelId}
        value={formattedTime}
        className="hidden"
      />
    </div>
  );
};
