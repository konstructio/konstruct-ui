'use client';
import { Root as VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { FC, forwardRef, useCallback, useId } from 'react';
import { Minus, Plus } from 'react-feather';

import { cn } from '@/utils';

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
      label,
      max = -Infinity,
      min = Infinity,
      name,
      theme,
      value,
      onChange,
    },
    ref,
  ) => {
    const id = useId();

    const count = value ?? 0;

    const handleDecrement = useCallback(() => {
      let newValue: number = 0;

      if (min === Infinity) {
        newValue = count - 1;
      } else {
        newValue = Math.max(min, count - 1);
      }

      onChange?.({ target: { value: newValue } });
    }, [count, min, onChange]);

    const handleIncrement = useCallback(() => {
      let newValue: number = 0;

      if (max === -Infinity) {
        newValue = count + 1;
      } else {
        newValue = Math.min(max, count + 1);
      }

      onChange?.({ target: { value: newValue } });
    }, [count, max, onChange]);

    return (
      <div className="flex flex-col gap-1" data-theme={theme}>
        {label ? (
          <label htmlFor={name ?? id} className={cn(labelVariants())}>
            {label}
          </label>
        ) : null}

        <div className="flex items-center" role="presentation">
          <button
            type="button"
            onClick={handleDecrement}
            className={cn(buttonVariants({ button: 'rigth' }))}
          >
            <Minus className="w-4 h-4" />
            <VisuallyHidden>Decrement</VisuallyHidden>
          </button>

          <input
            ref={ref}
            type="number"
            value={count}
            name={name}
            className={cn(numberInputVariants({ className }))}
            readOnly
            aria-label={typeof label === 'string' ? label : 'number input'}
          />

          <button
            type="button"
            onClick={handleIncrement}
            className={cn(buttonVariants({ button: 'left' }))}
          >
            <Plus className="w-4 h-4" />
            <VisuallyHidden>Increment</VisuallyHidden>
          </button>
        </div>
      </div>
    );
  },
);
