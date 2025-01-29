import { Indicator, Root } from '@radix-ui/react-checkbox';
import { FC, forwardRef, useCallback, useId } from 'react';
import { Check } from 'react-feather';

import { useTheme } from '../../contexts';
import { useToggle } from '../../hooks';
import { cn } from '../../utils';

import { CheckboxProps } from './Checkbox.types';
import { checkboxVariants, labelVariants } from './Checkbox.variants';

export const Checkbox: FC<CheckboxProps> = forwardRef<
  HTMLButtonElement,
  CheckboxProps
>(
  (
    {
      ariaLabelledBy,
      className,
      defaultChecked,
      disabled,
      id,
      label,
      labelClassName,
      name,
      theme,
      title,
      variant,
      onChange,
    },
    ref,
  ) => {
    const [checked, setChecked] = useToggle(defaultChecked);
    const defaultId = useId();
    const { theme: contextTheme } = useTheme();

    const handleChange = useCallback(() => {
      setChecked();
      onChange?.();
    }, [onChange, setChecked]);

    return (
      <div className="flex items-center gap-2">
        <Root
          id={id ?? defaultId}
          checked={checked}
          ref={ref}
          name={name}
          disabled={disabled}
          aria-labelledby={ariaLabelledBy}
          title={title}
          className={cn(
            checkboxVariants({
              className,
              theme: theme ?? contextTheme,
              variant,
              checked,
            }),
          )}
          onCheckedChange={handleChange}
        >
          <Indicator>
            <Check className="w-4 h-4 stroke-2" />
          </Indicator>
        </Root>

        {label ? (
          <label
            htmlFor={name ?? id}
            className={cn(
              labelVariants({
                variant,
                theme,
                className: labelClassName,
              }),
            )}
          >
            {label}
          </label>
        ) : null}
      </div>
    );
  },
);
