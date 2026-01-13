'use client';
import { Root as VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { FC, forwardRef, useCallback, useId } from 'react';
import { Minus, Plus } from 'react-feather';

import { cn } from '@/utils';

import { CounterProps } from './Counter.types';
import {
  buttonVariants,
  labelVariants,
  counterVariants,
} from './Counter.variants';
import { Typography } from '../Typography/Typography';

export const Counter: FC<CounterProps> = forwardRef<
  HTMLInputElement,
  CounterProps
>(
  (
    {
      canDecrement = true,
      canIncrement = true,
      className,
      decrementButtonClassName,
      incrementButtonClassName,
      isRequired,
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
          <Typography
            component="label"
            htmlFor={name ?? id}
            variant="labelLarge"
            className={cn(labelVariants())}
          >
            Number of nodes{' '}
            {isRequired && <span className="text-red-600">*</span>}
          </Typography>
        ) : null}

        <div className="flex items-center" role="presentation">
          <button
            type="button"
            onClick={handleDecrement}
            className={cn(
              buttonVariants({
                button: 'rigth',
                className: decrementButtonClassName,
              }),
            )}
            disabled={!canDecrement}
          >
            <Minus className="w-4 h-4" />
            <VisuallyHidden>Decrement</VisuallyHidden>
          </button>

          <input
            ref={ref}
            type="number"
            value={count}
            name={name}
            className={cn(counterVariants({ className }))}
            readOnly
            aria-label={typeof label === 'string' ? label : 'number input'}
          />

          <button
            type="button"
            onClick={handleIncrement}
            className={cn(
              buttonVariants({
                button: 'left',
                className: incrementButtonClassName,
              }),
            )}
            disabled={!canIncrement}
          >
            <Plus className="w-4 h-4" />
            <VisuallyHidden>Increment</VisuallyHidden>
          </button>
        </div>
      </div>
    );
  },
);
