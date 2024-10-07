import { FC, forwardRef, useCallback, useId } from 'react';
import { Root, Indicator } from '@radix-ui/react-checkbox';
import { Check } from 'react-feather';

import { useToggle } from '../../hooks';

import { CheckboxProps } from './Checkbox.types';
import { checkboxVariants, labelVariants } from './Checkbox.variants';

export const Checkbox: FC<CheckboxProps> = forwardRef<
  HTMLButtonElement,
  CheckboxProps
>(
  (
    {
      className,
      defaultChecked,
      disabled,
      label,
      labelClassName,
      name,
      theme,
      variant,
      onChange,
    },
    ref,
  ) => {
    const [checked, setChecked] = useToggle(defaultChecked);
    const id = useId();

    const handleChange = useCallback(() => {
      setChecked();
      onChange?.();
    }, [onChange, setChecked]);

    return (
      <div className="flex items-center gap-2">
        <Root
          id={name ?? id}
          checked={checked}
          ref={ref}
          name={name}
          disabled={disabled}
          className={checkboxVariants({ className, theme, variant, checked })}
          onCheckedChange={handleChange}
        >
          <Indicator>
            <Check className="w-4 h-4 stroke-2" />
          </Indicator>
        </Root>

        {label ? (
          <label
            htmlFor={name ?? id}
            className={labelVariants({
              variant,
              theme,
              className: labelClassName,
            })}
          >
            {label}
          </label>
        ) : null}
      </div>
    );
  },
);
