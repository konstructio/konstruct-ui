import { Slot } from '@radix-ui/react-slot';
import { FC, useCallback, useState } from 'react';

import { cn } from '@/utils';

import { Radio } from '../Radio/Radio';

import { RadioGroupProps } from './RadioGroup.types';
import { radioGroupVariants } from './RadioGroup.variants';

/**
 * A group of radio buttons with shared state management.
 *
 * @example
 * ```tsx
 * // Vertical layout (default)
 * <RadioGroup
 *   name="subscription"
 *   options={[
 *     { value: 'monthly', label: 'Monthly', description: '$10/mo' },
 *     { value: 'yearly', label: 'Yearly', description: '$100/yr' },
 *   ]}
 *   defaultChecked="monthly"
 *   onValueChange={(value) => setSubscription(value)}
 * />
 *
 * // Horizontal layout
 * <RadioGroup
 *   name="size"
 *   direction="row"
 *   options={[
 *     { value: 'sm', label: 'Small' },
 *     { value: 'md', label: 'Medium' },
 *     { value: 'lg', label: 'Large' },
 *   ]}
 *   onValueChange={setSize}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-radiogroup--docs Storybook}
 */
export const RadioGroup: FC<RadioGroupProps> = ({
  asChild,
  className,
  defaultChecked,
  direction,
  name,
  options,
  theme,
  wrapperClassName,
  onValueChange,
}) => {
  const Component = asChild ? Slot : 'div';
  const [selected, setSelected] = useState<string | undefined>(
    () => defaultChecked,
  );

  const handleSelected = useCallback(
    (value: string) => {
      setSelected(value);
      onValueChange?.(value);
    },
    [onValueChange],
  );

  return (
    <Component
      className={cn(
        radioGroupVariants({ className: wrapperClassName, direction }),
      )}
      data-theme={theme}
    >
      {options.map(({ value, ...delagated }) => (
        <Radio
          key={value}
          value={value}
          name={name}
          className={cn(className)}
          checked={selected === value}
          onChange={() => handleSelected(value)}
          {...delagated}
        />
      ))}
    </Component>
  );
};
