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

import { cn } from '@/utils';

import { SliderProps } from './Slider.types';
import {
  sliderVariants,
  thumbVariants,
  trackVariants,
} from './Slider.variants';

/**
 * A single-thumb slider component for selecting a value.
 * Built on Radix UI Slider for accessibility.
 *
 * @example
 * ```tsx
 * <Slider
 *   label="Brightness"
 *   min={0}
 *   max={100}
 *   defaultValue={[75]}
 *   showValue
 *   name="brightness"
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-slider--docs Storybook}
 */
export const Slider: FC<SliderProps> = forwardRef<
  ComponentRef<'input'>,
  SliderProps
>(
  (
    {
      label,
      labelWrapperClassName,
      defaultValue = [0],
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
      <div className="w-full relative flex flex-col gap-3" data-theme={theme}>
        <div
          className={cn(
            'flex items-center',
            label ? 'justify-between' : 'justify-end',
            labelWrapperClassName,
          )}
        >
          {label ? <label>{label}</label> : null}
          {showValue ? <span className="text-xs">{value}</span> : null}
        </div>

        <input ref={inputRef} name={name} className="hidden" type="number" />

        <Root
          value={value}
          className={cn(sliderVariants())}
          onValueChange={handleValueChange}
          {...delegated}
        >
          <Track className={cn(trackVariants({ size }))} />
          <Thumb className={cn(thumbVariants({ size }))} />
        </Root>
      </div>
    );
  },
);
