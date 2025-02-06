import { Slot } from '@radix-ui/react-slot';
import { FC, useCallback, useState } from 'react';

import { useTheme } from '@/contexts';
import { cn } from '@/utils';

import { Radio } from '../Radio/Radio';

import { RadioGroupProps } from './RadioGroup.types';
import { radioGroupVariants } from './RadioGroup.variants';

export const RadioGroup: FC<RadioGroupProps> = ({
  asChild,
  className,
  defaultValue,
  name,
  options,
  theme,
  wrapperClassName,
  direction,
  onValueChange,
}) => {
  const Comp = asChild ? Slot : 'div';
  const { theme: contextTheme } = useTheme();
  const [selected, setSelected] = useState<string | undefined>(defaultValue);

  const handleSelected = useCallback(
    (value: string) => {
      setSelected(value);
      onValueChange?.(value);
    },
    [onValueChange],
  );

  return (
    <Comp
      className={cn(
        radioGroupVariants({ className: wrapperClassName, direction }),
      )}
    >
      <>
        {options.map(({ value, ...delagated }) => (
          <Radio
            key={value}
            value={value}
            theme={theme ?? contextTheme}
            name={name}
            className={cn(className)}
            checked={selected === value}
            onChange={() => handleSelected(value)}
            {...delagated}
          />
        ))}
      </>
    </Comp>
  );
};
