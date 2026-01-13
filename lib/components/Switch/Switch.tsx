import { Root, Thumb } from '@radix-ui/react-switch';
import {
  FC,
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
} from 'react';

import { Typography } from '@/components/Typography/Typography';
import { cn } from '@/utils';

import { SwitchProps } from './Switch.types';
import { switchVariants, thumbVariants } from './Switch.variants';

export const Switch: FC<SwitchProps> = forwardRef<
  HTMLInputElement,
  SwitchProps
>(
  (
    {
      alignment = 'horizontal',
      className,
      defaultChecked,
      disabled = false,
      helperText,
      helperTextClassName,
      label,
      labelClassName,
      name,
      theme,
      thumbClassName,
      value,
      onChange,
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const id = useId();
    const componentId = name ? `${id}-${name}` : id;

    useImperativeHandle(ref, () => inputRef.current!, [inputRef]);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.value = `${value}`;
      }
    }, [value]);

    return (
      <div
        className={cn(
          'w-full',
          'flex',
          'gap-3',
          alignment === 'vertical' ? 'flex-col' : 'flex-row',
        )}
        data-theme={theme}
      >
        <Root
          id={componentId}
          defaultChecked={defaultChecked}
          checked={value}
          onCheckedChange={(e) => onChange?.(e)}
          className={cn(switchVariants({ className }))}
          aria-label={label}
          disabled={disabled}
        >
          <Thumb
            className={thumbVariants({
              className: thumbClassName,
            })}
          />
        </Root>

        {label ? (
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
            {label}
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
