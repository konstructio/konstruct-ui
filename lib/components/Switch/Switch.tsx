import { Root, Thumb } from '@radix-ui/react-switch';
import {
  FC,
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { LoaderIcon } from '@/assets/icons/components';
import { Typography } from '@/components/Typography/Typography';
import { cn } from '@/utils';

import { Props } from './Switch.types';
import { switchVariants, thumbVariants } from './Switch.variants';

/**
 * A toggle switch component built on Radix UI primitives.
 * Supports horizontal and vertical layouts with label and helper text.
 *
 * @example
 * ```tsx
 * // Basic switch
 * <Switch label="Enable feature" />
 *
 * // Controlled switch
 * <Switch
 *   label="Dark mode"
 *   value={isDarkMode}
 *   onChange={(enabled) => setIsDarkMode(enabled)}
 * />
 *
 * // Vertical layout with helper text
 * <Switch
 *   label="Notifications"
 *   helperText="Receive email notifications"
 *   alignment="vertical"
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-switch--docs Storybook}
 */
export const Switch: FC<Props> = forwardRef<HTMLInputElement, Props>(
  (
    {
      alignment = 'horizontal',
      className,
      defaultChecked,
      disabled = false,
      helperText,
      helperTextClassName,
      isLoading = false,
      label,
      labels,
      labelClassName,
      labelWrapperClassName,
      name,
      theme,
      thumbClassName,
      value,
      variant,
      onChange,
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const id = useId();
    const componentId = name ? `${id}-${name}` : id;
    const [isChecked, setIsChecked] = useState(
      value ?? defaultChecked ?? false,
    );
    const resolvedLabel = labels ? (isChecked ? labels.on : labels.off) : label;

    useImperativeHandle(ref, () => inputRef.current!, [inputRef]);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.value = `${value}`;
      }

      if (value !== undefined) {
        setIsChecked(value);
      }
    }, [value]);

    const handleCheckedChange = (checked: boolean) => {
      setIsChecked(checked);
      onChange?.(checked);
    };

    return (
      <div
        className={cn(
          'w-full',
          'flex',
          'gap-3',
          alignment === 'vertical' ? 'flex-col' : 'flex-row',
          labelWrapperClassName,
        )}
        data-theme={theme}
      >
        <Root
          id={componentId}
          defaultChecked={defaultChecked}
          checked={value}
          onCheckedChange={handleCheckedChange}
          className={cn(switchVariants({ variant, className }))}
          aria-label={resolvedLabel}
          aria-busy={isLoading || undefined}
          disabled={disabled || isLoading}
        >
          <Thumb
            className={thumbVariants({
              className: thumbClassName,
            })}
          />
        </Root>

        {isLoading ? (
          <LoaderIcon
            size={16}
            aria-hidden="true"
            className="animate-spin shrink-0 self-center text-metal-400"
          />
        ) : null}

        {resolvedLabel ? (
          <Typography
            component="label"
            className={cn(
              'flex',
              'flex-col',
              'text-sm',
              'dark:text-white',
              'select-none',
              labelClassName,
            )}
            htmlFor={componentId}
            style={{ paddingRight: 15 }}
          >
            {resolvedLabel}
            {helperText ? (
              <Typography
                component="span"
                className={cn(
                  'text-xs',
                  'select-none',
                  'text-slate-600',
                  'dark:text-metal-400',
                  helperTextClassName,
                )}
              >
                {helperText}
              </Typography>
            ) : null}
          </Typography>
        ) : null}

        <input
          ref={inputRef}
          name={name}
          type="text"
          className="hidden"
          aria-hidden="true"
        />
      </div>
    );
  },
);
