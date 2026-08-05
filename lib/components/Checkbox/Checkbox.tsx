import { Indicator, Root } from '@radix-ui/react-checkbox';
import { FC, forwardRef, useId } from 'react';
import { Check } from 'react-feather';

import { useToggle } from '@/hooks';
import { cn } from '@/utils';

import { Props } from './Checkbox.types';
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
 *   checked={subscribed}
 *   onChange={(checked) => setSubscribed(checked)}
 * />
 *
 * // Disabled checkbox
 * <Checkbox label="Premium feature" disabled />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-checkbox--docs Storybook}
 */
const Checkbox: FC<Props> = forwardRef<HTMLButtonElement, Props>(
  (
    {
      ariaLabelledBy,
      checked: checkedProp,
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
    const [internalChecked, setInternalChecked] = useToggle(
      defaultChecked ?? false,
    );
    const isControlled = checkedProp !== undefined;
    const checked = isControlled ? checkedProp : internalChecked;
    const defaultId = useId();

    const handleChange = (newChecked: boolean) => {
      if (!isControlled) {
        setInternalChecked(newChecked);
      }

      onChange?.(newChecked);
    };

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
