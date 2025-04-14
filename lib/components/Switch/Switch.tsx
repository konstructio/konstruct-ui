import { Root, Thumb } from '@radix-ui/react-switch';
import {
  FC,
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
} from 'react';

import { useTheme } from '@/contexts';
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
      onChange,
      value,
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const id = useId();
    const { theme: contextTheme } = useTheme();
    const inheritTheme = theme ?? contextTheme;
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
      >
        {label ? (
          <label
            className="text-base"
            htmlFor={componentId}
            style={{ paddingRight: 15 }}
          >
            {label}
          </label>
        ) : null}

        <Root
          id={componentId}
          defaultChecked={defaultChecked}
          checked={value}
          onCheckedChange={(e) => onChange?.(e)}
          className={cn(switchVariants({ theme: inheritTheme, className }))}
          aria-label={label}
        >
          <Thumb
            className={thumbVariants({
              theme: inheritTheme,
              className: thumbClassName,
            })}
          />
        </Root>

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
