import {
  FC,
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Root, Thumb } from '@radix-ui/react-switch';

import { cn } from '../../utils';
import { useTheme } from '../../contexts';

import { SwitchProps } from './Switch.types';
import { switchVariants, thumbVariants } from './Switch.variants';

export const Switch: FC<SwitchProps> = forwardRef<
  HTMLInputElement,
  SwitchProps
>(
  (
    {
      name,
      defaultChecked,
      alignment = 'horizontal',
      theme,
      thumbClassName,
      className,
      label,
    },
    ref,
  ) => {
    const [isActive, setIsActive] = useState<boolean>(defaultChecked ?? false);
    const inputRef = useRef<HTMLInputElement>(null);
    const id = useId();
    const { theme: contextTheme } = useTheme();
    const inheritTheme = theme ?? contextTheme;
    const componentId = name ? `${id}-${name}` : id;

    useImperativeHandle(ref, () => inputRef.current!, [inputRef]);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.value = `${isActive}`;
      }
    }, [isActive]);

    const handleChange = useCallback(
      (value: boolean) => setIsActive(value),
      [],
    );

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
          onCheckedChange={handleChange}
          className={switchVariants({ theme: inheritTheme, className })}
        >
          <Thumb
            className={thumbVariants({
              theme: inheritTheme,
              className: thumbClassName,
            })}
          />
        </Root>

        <input ref={inputRef} name={name} type="text" className="hidden" />
      </div>
    );
  },
);
