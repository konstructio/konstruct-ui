import { FC, forwardRef, useCallback, useId } from 'react';

import { RadioProps } from './Radio.types';
import { radioVariants } from './Radio.variants';

export const Radio: FC<RadioProps> = forwardRef<HTMLInputElement, RadioProps>(
  (
    { checked = false, className, label, name, value, theme, onChange },
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
        className="inline-flex items-center cursor-pointer"
      >
        <input
          ref={ref}
          id={defaultFor}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          className="hidden peer"
          onChange={() => handleChange(value)}
        />
        <span className={radioVariants({ className, theme })} />
        <span className="ml-2">{label}</span>
      </label>
    );
  },
);
