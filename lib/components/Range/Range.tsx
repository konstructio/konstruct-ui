import {
  ComponentRef,
  FC,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  Root,
  Thumb,
  Track,
  Range as RangeRadix,
} from '@radix-ui/react-slider';

import { cn } from '../../utils';
import { useTheme } from '../../contexts';

import { RangeProps } from './Range.types';
import {
  rangeOutsideVariants,
  rangeVariants,
  thumbVariants,
  trackVariants,
} from './Range.variants';

export const Range: FC<RangeProps> = forwardRef<
  ComponentRef<'input'>,
  RangeProps
>(
  (
    {
      label,
      defaultValue = [0, 100],
      name,
      theme,
      size,
      showValue,
      ...delegated
    },
    ref,
  ) => {
    const inputRef = useRef<ComponentRef<'input'>>(null);
    const [value, setValue] = useState<number[]>(defaultValue);
    const { theme: contextTheme } = useTheme();
    const inheritTheme = theme ?? contextTheme;

    useImperativeHandle(ref, () => inputRef.current!, [inputRef]);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.value = `[${value.toString()}]`;
      }
    }, [value]);

    const handleValueChange = useCallback(
      (newValue: number[]) => setValue(newValue),
      [],
    );

    return (
      <div className="w-full relative flex flex-col gap-3">
        <div
          className={cn(
            'flex items-center',
            label ? 'justify-between' : 'justify-end',
          )}
        >
          {label ? <label>{label}</label> : null}
          {showValue ? (
            <span className="text-xs">
              {value[0]} - {value[1]}
            </span>
          ) : null}
        </div>

        <input ref={inputRef} name={name} className="hidden" type="text" />

        <Root
          value={value}
          className={rangeVariants({ theme: inheritTheme })}
          onValueChange={handleValueChange}
          {...delegated}
        >
          <Track className={trackVariants({ theme: inheritTheme, size })}>
            <RangeRadix
              className={rangeOutsideVariants({ theme: inheritTheme })}
            />
          </Track>

          <Thumb className={thumbVariants({ theme: inheritTheme, size })} />
          <Thumb className={thumbVariants({ theme: inheritTheme, size })} />
        </Root>
      </div>
    );
  },
);
