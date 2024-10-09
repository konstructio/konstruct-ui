import { FC, forwardRef, useId } from 'react';

import { RadioProps } from './Radio.types';
import { radioVariants } from './Radio.variants';

export const Radio: FC<RadioProps> = forwardRef<HTMLInputElement, RadioProps>(
  (
    { checked = false, className, label, name, value, theme, onChange },
    ref,
  ) => {
    const id = useId();
    const defaultHtmlFor = name ?? id;

    return (
      <label
        htmlFor={defaultHtmlFor}
        className="inline-flex items-center cursor-pointer"
      >
        <input
          ref={ref}
          id={defaultHtmlFor}
          type="radio"
          name={name}
          value={value}
          defaultChecked={checked}
          className="hidden peer"
          onChange={onChange}
        />
        <span className={radioVariants({ className, theme })} />
        <span className="ml-2">{label}</span>
      </label>
    );
  },
);
