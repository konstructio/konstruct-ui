import {
  ElementRef,
  FC,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Root, Thumb, Track } from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';

import { useTheme } from '../../contexts';

import { SliderProps } from './Slider.types';
import {
  sliderVariants,
  thumbVariants,
  trackVariants,
} from './Slider.variants';

export const Slider: FC<SliderProps> = forwardRef<
  ElementRef<'input'>,
  SliderProps
>(
  (
    { label, defaultValue = [0], name, theme, size, showValue, ...delegated },
    ref,
  ) => {
    const inputRef = useRef<ElementRef<'input'>>(null);
    const [value, setValue] = useState<number[]>(defaultValue);
    const { theme: contextTheme } = useTheme();
    const inheritTheme = theme ?? contextTheme;

    useImperativeHandle(ref, () => inputRef.current!, [inputRef]);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.value = value.toString();
      }
    }, [value]);

    const handleValueChange = useCallback(
      (newValue: number[]) => setValue(newValue),
      [],
    );

    return (
      <div className="w-full relative flex flex-col gap-3">
        <div
          className={twMerge(
            'flex items-center',
            label ? 'justify-between' : 'justify-end',
          )}
        >
          {label ? <label>{label}</label> : null}
          {showValue ? <span className="text-xs">{value}</span> : null}
        </div>

        <input ref={inputRef} name={name} className="hidden" type="number" />

        <Root
          value={value}
          className={sliderVariants({ theme: inheritTheme })}
          onValueChange={handleValueChange}
          {...delegated}
        >
          <Track className={trackVariants({ theme: inheritTheme, size })} />
          <Thumb className={thumbVariants({ theme: inheritTheme, size })} />
        </Root>
      </div>
    );
  },
);
