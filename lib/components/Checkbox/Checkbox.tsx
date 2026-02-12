import { Indicator, Root } from '@radix-ui/react-checkbox';
import { FC, forwardRef, useCallback, useId } from 'react';
import { Check } from 'react-feather';

import { useToggle } from '@/hooks';
import { cn } from '@/utils';

import { CheckboxProps } from './Checkbox.types';
import { checkboxVariants, labelVariants } from './Checkbox.variants';

/**
 * A checkbox component built on Radix UI primitives.
 * Supports controlled and uncontrolled modes with label support.
 *
 * @example
 * ```tsx
 * // Basic checkbox with label
 * <Checkbox label="Accept terms and conditions" />
 *
 * // Controlled checkbox
 * <Checkbox
 *   label="Subscribe to newsletter"
 *   defaultChecked={subscribed}
 *   onChange={(checked) => setSubscribed(checked)}
 * />
 *
 * // Disabled checkbox
 * <Checkbox label="Premium feature" disabled />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-checkbox--docs Storybook}
 */
const Checkbox: FC<CheckboxProps> = forwardRef<
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
      labelWrapperClassName,
      name,
      theme,
      title,
      variant,
      onChange,
      ...delegated
    },
    ref,
  ) => {
    const [checked, setChecked] = useToggle(defaultChecked ?? false);
    const defaultId = useId();

    const handleChange = useCallback(
      (checked: boolean) => {
        setChecked(checked);
        onChange?.(checked);
      },
      [onChange, setChecked],
    );

    return (
      <div
        className={cn('flex items-center gap-4', labelWrapperClassName)}
        data-theme={theme}
      >
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
              variant,
              checked,
            }),
          )}
          onCheckedChange={handleChange}
          {...delegated}
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
                className: labelClassName,
              }),
              {
                'cursor-not-allowed': disabled,
              },
            )}
            onClick={() => !disabled && handleChange(!checked)}
          >
            {label}
          </label>
        ) : null}
      </div>
    );
  },
);

Checkbox.displayName = 'KonstructCheckbox';

export { Checkbox };
