import { FC, forwardRef, useCallback, useId } from 'react';

import { cn } from '@/utils';

import { RadioProps } from './Radio.types';
import {
  labelRadioVariants,
  radioVariants,
  wrapperRadioVariants,
} from './Radio.variants';

export const Radio: FC<RadioProps> = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      checked = false,
      className,
      defaultChecked,
      disabled,
      label,
      labelTextClassName,
      name,
      theme,
      value,
      wrapperClassName,
      onChange,
    },
    ref,
  ) => {
    const id = useId();
    const defaultFor = `${id}-${name}`;

    const handleChange = useCallback(
      (value: string) => {
        onChange?.(value);
      },
      [onChange],
    );

    return (
      <label
        htmlFor={defaultFor}
        className={cn(
          wrapperRadioVariants({
            className: wrapperClassName,
            disabled: disabled || false,
          }),
        )}
        data-theme={theme}
      >
        <input
          ref={ref}
          id={defaultFor}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          defaultChecked={defaultChecked}
          className="hidden peer"
          onChange={() => handleChange(value)}
          disabled={disabled}
        />

        <span
          className={cn(
            radioVariants({
              className,
              disabled: disabled || false,
              checked: checked || defaultChecked || false,
            }),
          )}
        />
        <span
          className={cn(labelRadioVariants({ className: labelTextClassName }))}
        >
          {label}
        </span>
      </label>
    );
  },
);
