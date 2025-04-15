import { Slot } from '@radix-ui/react-slot';
import { FC, useCallback, useState } from 'react';

import { cn } from '@/utils';

import { Radio } from '../Radio/Radio';

import { RadioGroupProps } from './RadioGroup.types';
import { radioGroupVariants } from './RadioGroup.variants';

export const RadioGroup: FC<RadioGroupProps> = ({
  asChild,
  className,
  defaultChecked,
  name,
  options,
  theme,
  wrapperClassName,
  direction,
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
