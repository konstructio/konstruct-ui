import {
  ChangeEvent,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { twMerge } from 'tailwind-merge';
// import { ArrowDown } from 'react-feather';

import { AutocompleteProps, Option } from './Autocomplete.types';
import { autocompleteVariants } from './Autocomplete.variants';

const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
  ({ className, options, label }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [newOptions] = useState<Option[]>(() => options ?? []);
    const [showOptions, setShowOptions] = useState(false);
    const [value, setValue] = useState('');

    useImperativeHandle(ref, () => inputRef.current!, []);

    useEffect(() => {
      const controller = new AbortController();
      const handleFocus = (focus: boolean) => setShowOptions(focus);

      inputRef.current?.addEventListener('focusin', () => handleFocus(true), {
        signal: controller.signal,
      });

      inputRef.current?.addEventListener('focusout', () => handleFocus(false), {
        signal: controller.signal,
      });

      return () => {
        controller.abort();
      };
    }, []);

    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value),
      [],
    );

    const handleSelectValue = useCallback((value: string) => {
      console.log(value);
      setValue(value);
    }, []);

    return (
      <div className="relative flex flex-col">
        {label ? <span className="pl-1 mb-2 text-base">{label}</span> : null}

        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            className={autocompleteVariants({ className })}
            onChange={handleChange}
            value={value}
          />
          {/* <ArrowDown className="w-4 h-4 absolute right-2 top-0 translate-y-[50%] text-current" /> */}
        </div>

        <div
          className={twMerge(
            'absolute z-10 top-full w-full rounded-md mt-1 border shadow-sm',
            !showOptions && 'hidden',
          )}
        >
          <ul className="max-h-[250px] overflow-y-auto">
            {newOptions.map(({ value }) => (
              <li key={value}>
                <button
                  type="button"
                  className="cursor-pointer hover:bg-slate-50 px-3 py-1.5 w-full text-left"
                  onClick={() => handleSelectValue(value)}
                >
                  {value}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  },
);

Autocomplete.displayName = 'Autocomplete';

export { Autocomplete };
