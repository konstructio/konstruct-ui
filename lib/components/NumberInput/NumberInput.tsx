import { FC, forwardRef, useCallback, useId, useState } from 'react';
import { Root as VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Minus, Plus } from 'react-feather';

import { useTheme } from '../../contexts';

import { NumberInputProps } from './NumberInput.types';
import {
  buttonVariants,
  labelVariants,
  numberInputVariants,
} from './NumberInput.variants';

export const NumberInput: FC<NumberInputProps> = forwardRef<
  HTMLInputElement,
  NumberInputProps
>(
  (
    {
      className,
      init,
      label,
      max = -Infinity,
      min = Infinity,
      name,
      theme,
      onChange,
    },
    ref,
  ) => {
    const { theme: themeContext } = useTheme();
    const defaultTheme = theme ?? themeContext;
    const id = useId();
    const [count, setCount] = useState(() => {
      if (!init) {
        return 0;
      }

      return init;
    });

    const handleDecrement = useCallback(() => {
      let newValue: number = 0;

      if (min === Infinity) {
        newValue = count - 1;
      } else {
        newValue = Math.max(min, count - 1);
      }

      setCount(newValue);
      onChange?.(newValue);
    }, [count, min, onChange]);

    const handleIncrement = useCallback(() => {
      let newValue: number = 0;

      if (max === -Infinity) {
        newValue = count + 1;
      } else {
        newValue = Math.min(max, count + 1);
      }

      setCount(newValue);
      onChange?.(newValue);
    }, [count, max, onChange]);

    return (
      <div className="flex flex-col gap-1">
        {label ? (
          <label
            htmlFor={name ?? id}
            className={labelVariants({
              theme: defaultTheme,
            })}
          >
            {label}
          </label>
        ) : null}

        <div className="flex items-center" role="presentation">
          <button
            type="button"
            onClick={handleDecrement}
            className={buttonVariants({ theme: defaultTheme, button: 'rigth' })}
          >
            <Minus className="w-4 h-4" />
            <VisuallyHidden>Decrement</VisuallyHidden>
          </button>

          <input
            ref={ref}
            type="number"
            value={count}
            name={name}
            className={numberInputVariants({ className, theme: defaultTheme })}
            readOnly
            aria-label={label}
          />

          <button
            type="button"
            onClick={handleIncrement}
            className={buttonVariants({ theme: defaultTheme, button: 'left' })}
          >
            <Plus className="w-4 h-4" />
            <VisuallyHidden>Increment</VisuallyHidden>
          </button>
        </div>
      </div>
    );
  },
);
