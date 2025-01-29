import { Root, Thumb, Track } from '@radix-ui/react-slider';
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

import { useTheme } from '../../contexts';
import { cn } from '../../utils';

import { SliderProps } from './Slider.types';
import {
  sliderVariants,
  thumbVariants,
  trackVariants,
} from './Slider.variants';

export const Slider: FC<SliderProps> = forwardRef<
  ComponentRef<'input'>,
  SliderProps
>(
  (
    { label, defaultValue = [0], name, theme, size, showValue, ...delegated },
    ref,
  ) => {
    const inputRef = useRef<ComponentRef<'input'>>(null);
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
          className={cn(
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
          className={cn(sliderVariants({ theme: inheritTheme }))}
          onValueChange={handleValueChange}
          {...delegated}
        >
          <Track className={cn(trackVariants({ theme: inheritTheme, size }))} />
          <Thumb className={cn(thumbVariants({ theme: inheritTheme, size }))} />
        </Root>
      </div>
    );
  },
);
