import { FC, forwardRef, useCallback, useId } from 'react';

import { Typography } from '@/components/Typography/Typography';
import { cn } from '@/utils';

import { RadioProps } from './Radio.types';
import {
  labelRadioVariants,
  radioVariants,
  wrapperRadioVariants,
} from './Radio.variants';

/**
 * A radio button component with label and optional description.
 * Use RadioGroup to manage a group of radio buttons.
 *
 * @example
 * ```tsx
 * <Radio
 *   name="plan"
 *   value="basic"
 *   label="Basic Plan"
 *   description="Free forever"
 *   checked={plan === 'basic'}
 *   onChange={(value) => setPlan(value)}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-radio--docs Storybook}
 */
const Radio: FC<RadioProps> = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      checked = false,
      className,
      defaultChecked,
      disabled,
      label,
      labelTextClassName,
      description,
      descriptionClassName,
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
        <div className={cn(description && 'flex flex-col gap-1')}>
          <Typography
            component="span"
            className={cn(
              labelRadioVariants({ className: labelTextClassName }),
            )}
          >
            {label}
          </Typography>
          {description && (
            <Typography
              component="span"
              className={cn(
                labelRadioVariants({ className: descriptionClassName }),
              )}
            >
              {description}
            </Typography>
          )}
        </div>
      </label>
    );
  },
);

Radio.displayName = 'KonstructRadio';

export { Radio };
