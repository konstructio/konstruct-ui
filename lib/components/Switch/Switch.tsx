import { Root, Thumb } from '@radix-ui/react-switch';
import {
  FC,
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
} from 'react';

import { cn } from '@/utils';

import { SwitchProps } from './Switch.types';
import { switchVariants, thumbVariants } from './Switch.variants';

export const Switch: FC<SwitchProps> = forwardRef<
  HTMLInputElement,
  SwitchProps
>(
  (
    {
      name,
      alignment = 'horizontal',
      theme,
      thumbClassName,
      className,
      label,
      defaultChecked,
      value,
      helperText,
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
          'w-full flex gap-3',
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
        >
          <Thumb
            className={thumbVariants({
              className: thumbClassName,
            })}
          />
        </Root>

        {label ? (
          <label
            className="flex flex-col text-slate-800 dark:text-white text-sm"
            htmlFor={componentId}
            style={{ paddingRight: 15 }}
          >
            {label}
            {helperText ? (
              <span className="text-slate-600 dark:text-slate-400 text-xs">
                {helperText}
              </span>
            ) : null}
          </label>
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
