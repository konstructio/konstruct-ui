import { FC, forwardRef, useCallback, useId } from 'react';

import { useTheme } from '../../contexts';
import { cn } from '../../utils';

import { RadioProps } from './Radio.types';
import { radioVariants } from './Radio.variants';

export const Radio: FC<RadioProps> = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      checked = false,
      className,
      defaultChecked,
      label,
      name,
      theme,
      value,
      onChange,
    },
    ref,
  ) => {
    const id = useId();
    const { theme: contextTheme } = useTheme();
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
        className="inline-flex items-center cursor-pointer"
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
        />
        <span
          className={cn(
            radioVariants({ className, theme: theme ?? contextTheme }),
          )}
        />
        <span className="ml-2">{label}</span>
      </label>
    );
  },
);
