import {
  ElementRef,
  FC,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import * as RadixSlider from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';

import { SliderProps } from './Slider.types';

export const Slider: FC<SliderProps> = forwardRef<
  ElementRef<'input'>,
  SliderProps
>(({ label, defaultValue = [50], ...delegated }, ref) => {
  const inputRef = useRef<ElementRef<'input'>>(null);
  const [value, setValue] = useState<number[]>(defaultValue);

  useImperativeHandle(ref, () => inputRef.current!, [inputRef]);

  const handleValueChange = useCallback(
    (newValue: number[]) => setValue(newValue),
    [],
  );

  return (
    <div className="w-full">
      {label ? <label>{label}</label> : null}

      <RadixSlider.Root
        ref={ref}
        value={value}
        {...delegated}
        className={twMerge(
          'relative flex items-center w-full',
          label ? 'mt-3' : '',
        )}
        onValueChange={handleValueChange}
      >
        <RadixSlider.Track className="relative flex-grow bg-red-500 h-2 rounded-lg">
          <RadixSlider.Range className="abosulute bg-gray-600 h-full" />
        </RadixSlider.Track>
        <RadixSlider.Thumb className="block w-5 h-5 bg-yellow-600 rounded-full cursor-pointer" />
      </RadixSlider.Root>

      <input ref={inputRef} className="hidden" type="number" />
    </div>
  );
});
