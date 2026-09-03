'use client';
import { Root as VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { ChangeEvent, FC, forwardRef, useId, useState } from 'react';
import { Minus, Plus } from 'react-feather';

import { cn, composeIds } from '@/utils';

import { Props } from './Counter.types';
import {
  buttonVariants,
  counterVariants,
  fieldVariants,
  labelVariants,
  unitVariants,
} from './Counter.variants';
import { Typography } from '../Typography/Typography';

/**
 * A numeric input component with increment/decrement buttons.
 * Also exported as `NumberInput` for convenience.
 *
 * @example
 * ```tsx
 * // Basic counter
 * <Counter
 *   label="Quantity"
 *   value={count}
 *   onChange={({ target }) => setCount(target.value)}
 * />
 *
 * // With min/max limits
 * <Counter
 *   label="Number of nodes"
 *   value={nodes}
 *   min={1}
 *   max={10}
 *   onChange={({ target }) => setNodes(target.value)}
 * />
 *
 * // Stepping by 500 GB with a unit, price and helper text
 * <Counter
 *   label="Size"
 *   value={size}
 *   step={500}
 *   unit="GB"
 *   labelAction={<span>$12.00/mo</span>}
 *   helperText="Increments of 500 GB"
 *   onChange={handleChange}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-counter--docs Storybook}
 */
export const Counter: FC<Props> = forwardRef<HTMLInputElement, Props>(
  (
    {
      canDecrement = true,
      canIncrement = true,
      className,
      decrementButtonClassName,
      decrementLabel = 'Decrement',
      disabled = false,
      editable = false,
      error,
      errorClassName,
      fullWidth = false,
      helperText,
      helperTextClassName,
      incrementButtonClassName,
      incrementLabel = 'Increment',
      isRequired,
      label,
      labelAction,
      labelWrapperClassName,
      max = -Infinity,
      min = Infinity,
      name,
      step = 1,
      theme,
      unit,
      value,
      onChange,
    },
    ref,
  ) => {
    const id = useId();
    const inputId = name ?? id;
    const errorId = `${id}-error`;
    const helperTextId = `${id}-helper-text`;
    const hasError = typeof error === 'string' && error.length > 0;
    const hasHelperText = !hasError && !!helperText;
    const describedBy = composeIds(
      hasError && errorId,
      hasHelperText && helperTextId,
    );

    const count = value ?? 0;
    const [draft, setDraft] = useState<string | null>(null);
    const displayed = draft ?? String(count);

    const handleDecrement = () => {
      let newValue: number = 0;

      if (min === Infinity) {
        newValue = count - step;
      } else {
        newValue = Math.max(min, count - step);
      }

      setDraft(null);
      onChange?.({ target: { value: newValue } });
    };

    const handleIncrement = () => {
      let newValue: number = 0;

      if (max === -Infinity) {
        newValue = count + step;
      } else {
        newValue = Math.min(max, count + step);
      }

      setDraft(null);
      onChange?.({ target: { value: newValue } });
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const raw = event.target.value;
      setDraft(raw);
      if (raw === '') {
        return;
      }
      const parsed = Number(raw);
      if (!Number.isFinite(parsed)) {
        return;
      }
      onChange?.({ target: { value: parsed } });
    };

    const handleBlur = () => {
      setDraft(null);
      const lowerBound = min === Infinity ? -Infinity : min;
      const upperBound = max === -Infinity ? Infinity : max;
      const clamped = Math.min(upperBound, Math.max(lowerBound, count));
      if (clamped !== count) {
        onChange?.({ target: { value: clamped } });
      }
    };

    return (
      <div
        className={cn('flex flex-col gap-2', fullWidth && 'w-full')}
        data-theme={theme}
      >
        {label || labelAction ? (
          <div
            className={cn(
              'flex items-center justify-between',
              labelWrapperClassName,
            )}
          >
            {label ? (
              <Typography
                component="label"
                htmlFor={inputId}
                variant="labelLarge"
                className={cn(labelVariants())}
              >
                {label}{' '}
                {isRequired && (
                  <span className="text-red-600 dark:text-red-500">*</span>
                )}
              </Typography>
            ) : null}

            {labelAction}
          </div>
        ) : null}

        <div className="flex items-center" role="presentation">
          <button
            type="button"
            onClick={handleDecrement}
            className={cn(
              buttonVariants({
                button: 'rigth',
                hasError,
                className: decrementButtonClassName,
              }),
            )}
            disabled={disabled || !canDecrement}
          >
            <Minus className="w-4 h-4" />
            <VisuallyHidden>{decrementLabel}</VisuallyHidden>
          </button>

          <div className={cn(fieldVariants({ fullWidth, hasError, disabled }))}>
            <input
              ref={ref}
              id={inputId}
              type="number"
              value={editable ? displayed : count}
              name={name}
              disabled={disabled}
              className={cn(counterVariants({ fullWidth, className }))}
              {...(editable
                ? { onChange: handleChange, onBlur: handleBlur }
                : { readOnly: true })}
              aria-label={typeof label === 'string' ? label : 'number input'}
              aria-invalid={hasError || undefined}
              aria-describedby={describedBy}
              aria-required={isRequired || undefined}
            />

            {unit ? <span className={cn(unitVariants())}>{unit}</span> : null}
          </div>

          <button
            type="button"
            onClick={handleIncrement}
            className={cn(
              buttonVariants({
                button: 'left',
                hasError,
                className: incrementButtonClassName,
              }),
            )}
            disabled={disabled || !canIncrement}
          >
            <Plus className="w-4 h-4" />
            <VisuallyHidden>{incrementLabel}</VisuallyHidden>
          </button>
        </div>

        {hasError ? (
          <Typography
            component="span"
            id={errorId}
            className={cn(
              'text-xs tracking-normal text-red-700 dark:text-red-400',
              errorClassName,
            )}
          >
            {error}
          </Typography>
        ) : null}

        {hasHelperText ? (
          <Typography
            component="span"
            id={helperTextId}
            className={cn(
              'text-xs text-slate-600 dark:text-slate-200',
              helperTextClassName,
            )}
          >
            {helperText}
          </Typography>
        ) : null}
      </div>
    );
  },
);
